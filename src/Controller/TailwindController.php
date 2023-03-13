<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TailwindController extends AbstractController
{
    #[Route('/tailwind', name: 'app_tailwind')]
    public function index(): Response
    {
        return $this->render('tailwind/index.html.twig', [
            'controller_name' => 'TailwindController',
        ]);
    }
}
