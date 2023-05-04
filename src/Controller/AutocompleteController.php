<?php

namespace App\Controller;

use App\AutoComplete\DataGouvAutoComplete;
use App\Repository\JobRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AutocompleteController extends AbstractController
{
    #[Route('/adresse', name: 'autocomplete')]
    public function autocomplete(Request $request, HttpClientInterface $httpClient)
    {

        $query = $request->query->get('query');

        $response = $httpClient->request('GET', 'https://api-adresse.data.gouv.fr/search/', [
            'query' => [
                'q' => $query,
            ],
        ]);

        $results = json_decode($response->getContent());
        foreach ($results->features as $result => $city) {
            $data["results"][] = ["value" => $city->properties->label, "text" => $city->properties->label];
        }

        return new JsonResponse($data);
    }

    #[Route('/jobs', name: 'job_autocomplete')]
    public function job_autocomplete(Request $request, HttpClientInterface $httpClient, JobRepository $jobRepository)
    {

        
        $query = $request->query->get('query');
        
        $results = $jobRepository->autocomplete($query);
        foreach ($results as $result) {
            $data["results"][] = ["value" => $result["title"], "text" => $result["title"]];
        }

        return new JsonResponse($data);
    }
}
