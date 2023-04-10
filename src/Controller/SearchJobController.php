<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SearchJobController extends AbstractController
{
    #[Route('/searchjob', name: 'searchjob')]
    public function index(): Response
    {
        return $this->render('search_job/index.html.twig', [
            'controller_name' => 'SearchJobController',
        ]);
    }
}
