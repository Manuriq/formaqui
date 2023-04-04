<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use SymfonyUX\AutoCompleteBundle\Response\AutoCompleteResponse;
use SymfonyUX\AutoCompleteBundle\AutoCompleteInterface;

class DataGouvAutoComplete implements AutoCompleteInterface
{
    private $httpClient;
    private $baseUrl;

    public function __construct(HttpClientInterface $httpClient, string $baseUrl)
    {
        $this->httpClient = $httpClient;
        $this->baseUrl = $baseUrl;
    }

    public function getResults(Request $request): AutoCompleteResponse
    {
        $query = $request->query->get('q');

        $response = $this->httpClient->request('GET', $this->baseUrl . '/search/', [
            'query' => [
                'q' => $query,
            ],
        ]);

        $data = json_decode($response->getContent(), true);

        $results = array_map(function ($result) {
            return [
                'value' => $result['properties']['label'],
                'data' => $result,
            ];
        }, $data['features']);

        return new AutoCompleteResponse($results);
    }
}
