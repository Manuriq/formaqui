<?php

namespace App\Controller;

use App\AutoComplete\DataGouvAutoComplete;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AutocompleteController extends AbstractController
{
    #[Route('/autocomplete', name: 'autocomplete')]
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
            $data["results"][] = ["value" => $city->properties->id, "text" => $city->properties->label];
        }

        return new JsonResponse($data);
    }
}
