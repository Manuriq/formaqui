<?php

namespace App\Controller;

use App\Entity\Job;
use App\Entity\Apply;
use App\Form\JobType;
use App\Repository\JobRepository;
use App\Repository\ApplyRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
    public function new(Request $request, JobRepository $jobRepository, HttpClientInterface $httpClient): Response
    {
        // Ici on regarde si l'utilisateur a bien le role ROLE_BOSS
        if (!$this->isGranted('ROLE_BOSS')) {
            $this->addFlash("danger", "Vous n'êtes pas autorisé à accéder à cette page.");
            $referer = $request->headers->get('referer');
            return $this->redirect($referer);

        }

        $job = new Job();
    
        $form = $this->createForm(JobType::class, $job, array(
                'address' => $this->getUser()->getBusinesses()->first()->getAddress(),
                'autocomplete' => $this->generateUrl('autocomplete')
            )
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $response = $httpClient->request('GET', 'https://api-adresse.data.gouv.fr/search/', [
                'query' => [
                    'q' => $form->get('address')->getData(),
                ],
            ]);
            $results = json_decode($response->getContent());
    
            $job->setLatitude($results->features[0]->geometry->coordinates[0]);
            $job->setLongitude($results->features[0]->geometry->coordinates[1]);
            $job->setCity($results->features[0]->properties->city);
            $job->setPostcode($results->features[0]->properties->postcode);
            $job->setAddress($results->features[0]->properties->label);
            $job->setStreet($results->features[0]->properties->name);

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
        $applied = 0;
        foreach ($this->getUser()->getApplies() as $key => $apply) {
            if($apply->getJob() == $job){
                $applied = 1;
                break;
            }
        }
        return $this->render('job/show.html.twig', [
            'job' => $job,
            'applied' => $applied
        ]);
    }

    #[Route('/{id}/edit', name: 'app_job_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Job $job, JobRepository $jobRepository, HttpClientInterface $httpClient): Response
    {
        // Ici on regarde si l'utilisateur a bien le role ROLE_BOSS
        if (!$this->isGranted('ROLE_BOSS')) {
            $this->addFlash("danger", "Vous n'êtes pas autorisé à accéder à cette page.");
            $referer = $request->headers->get('referer');
            return $this->redirect($referer);

        }
        $form = $this->createForm(JobType::class, $job, array(
            'address' => $job->getAddress(),
            'autocomplete' => $this->generateUrl('autocomplete')
        )
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $response = $httpClient->request('GET', 'https://api-adresse.data.gouv.fr/search/', [
                'query' => [
                    'q' => $form->get('address')->getData(),
                ],
            ]);
            $results = json_decode($response->getContent());
    
            $job->setLatitude($results->features[0]->geometry->coordinates[0]);
            $job->setLongitude($results->features[0]->geometry->coordinates[1]);
            $job->setCity($results->features[0]->properties->city);
            $job->setPostcode($results->features[0]->properties->postcode);
            $job->setAddress($results->features[0]->properties->label);
            $job->setStreet($results->features[0]->properties->name);

            $job->setTags($form->get('tags')->getData());

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

    #[Route('/apply/{id}', name: 'app_job_apply', methods: ['GET'])]
    public function apply(Request $request, Job $job, JobRepository $jobRepository, ApplyRepository $applyRepository): Response
    {
        $apply = new Apply();
        $apply->setJob($job);
        $apply->setUser($this->getUser());
        $apply->setCreatedAt(new \DateTimeImmutable());
        $apply->setUpdatedAt(new \DateTimeImmutable());
        $applyRepository->save($apply, true);

        $this->addFlash("success", "Félicitation, vous venez de postuler pour cette offre !");

        return $this->redirectToRoute('app_job_show', ['id' => $job->getId()], Response::HTTP_SEE_OTHER);
    }

    #[Route('/toggle/{id}-{toggle}', name: 'app_job_toggle', methods: ['GET'])]
    public function toggle(Request $request, Job $job, JobRepository $jobRepository, $toggle): Response
    {
        if (!$this->getUser() == $job->getBusiness()->getOwner()) {
            $this->addFlash("danger", "Vous n'êtes pas autorisé à accéder à cette page.");
            $referer = $request->headers->get('referer');
            return $this->redirect($referer);
        }

        if ($toggle == 0) {
            $job->setState(0);
        } else {
            $job->setState(1);
        }

        $jobRepository->save($job, true);

        return $this->redirectToRoute('app_job_index', [], Response::HTTP_SEE_OTHER);
    }
}
