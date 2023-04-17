<?php

namespace App\Controller;

use App\Entity\Job;
use App\Form\JobType;
use App\Repository\JobRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/job')]
class JobController extends AbstractController
{
    #[Route('/', name: 'app_job_index', methods: ['GET'])]
    public function index(JobRepository $jobRepository): Response
    {
        return $this->render('job/index.html.twig', [
            'jobs' => $jobRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_job_new', methods: ['GET', 'POST'])]
    public function new(Request $request, JobRepository $jobRepository): Response
    {
        // Ici on regarde si l'utilisateur a bien le role ROLE_BOSS
        if (!$this->isGranted('ROLE_BOSS')) {
            $this->addFlash("danger", "Vous n'êtes pas autorisé à accéder à cette page.");
            $referer = $request->headers->get('referer');
            return $this->redirect($referer);

        }

        $job = new Job();
        $form = $this->createForm(JobType::class, $job, array('user' => $this->getUser()));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $job->setTags($form->get('tags')->getData());
            $job->setBusiness($this->getUser()->getBusinesses()->first());
            $jobRepository->save($job, true);

            return $this->redirectToRoute('app_job_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('job/new.html.twig', [
            'job' => $job,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_job_show', methods: ['GET'])]
    public function show(Job $job): Response
    {
        return $this->render('job/show.html.twig', [
            'job' => $job,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_job_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Job $job, JobRepository $jobRepository): Response
    {
        // Ici on regarde si l'utilisateur a bien le role ROLE_BOSS
        if (!$this->isGranted('ROLE_BOSS')) {
            $this->addFlash("danger", "Vous n'êtes pas autorisé à accéder à cette page.");
            $referer = $request->headers->get('referer');
            return $this->redirect($referer);

        }
        $form = $this->createForm(JobType::class, $job);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $jobRepository->save($job, true);

            return $this->redirectToRoute('app_job_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('job/edit.html.twig', [
            'job' => $job,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_job_delete', methods: ['POST'])]
    public function delete(Request $request, Job $job, JobRepository $jobRepository): Response
    {
        // Ici on regarde si l'utilisateur a bien le role ROLE_BOSS
        if (!$this->isGranted('ROLE_BOSS')) {
            $this->addFlash("danger", "Vous n'êtes pas autorisé à accéder à cette page.");
            $referer = $request->headers->get('referer');
            return $this->redirect($referer);

        }
        if ($this->isCsrfTokenValid('delete'.$job->getId(), $request->request->get('_token'))) {
            $jobRepository->remove($job, true);
        }

        return $this->redirectToRoute('app_job_index', [], Response::HTTP_SEE_OTHER);
    }

    private function distance($lat1, $lon1, $lat2, $lon2, $unit) {
        if (($lat1 == $lat2) && ($lon1 == $lon2)) {
            return 0;
        } else {
            $radlat1 = pi() * $lat1/180;
            $radlat2 = pi() * $lat2/180;
            $theta = $lon1 - $lon2;
            $radtheta = pi() * $theta/180;
            $dist = sin($radlat1) * sin($radlat2) + cos($radlat1) * cos($radlat2) * cos($radtheta);
            if ($dist > 1) {
                $dist = 1;
            }
            $dist = acos($dist);
            $dist = $dist * 180/pi();
            $dist = $dist * 60 * 1.1515;
            if ($unit == "K") { $dist = $dist * 1.609344; }
            if ($unit == "N") { $dist = $dist * 0.8684; }
            return $dist;
        }
    }
    
}
