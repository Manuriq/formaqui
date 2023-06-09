<?php

namespace App\Controller;

use App\Entity\Job;
use DateTimeImmutable;
use App\Entity\Profile;
use App\Form\ProfileType;
use App\Repository\UserRepository;
use App\Repository\ProfileRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/profile')]
class ProfileController extends AbstractController
{
    #[Route('/', name: 'app_profile_index', methods: ['GET'])]
    public function index(ProfileRepository $profileRepository): Response
    {
        /** @var \App\Entity\User|null $user */
        $user = $this->getUser();
        if($user->getProfile() == null){
            return $this->redirectToRoute('app_profile_new');
        }
        else{
            return $this->redirectToRoute('app_profile_edit', ['id' => $user->getProfile()->getId()]);
        }
    }

    #[Route('/new', name: 'app_profile_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ProfileRepository $profileRepository, UserRepository $userRepository): Response
    {
        $profile = new Profile();
        $form = $this->createForm(ProfileType::class, $profile, array(
            'autocomplete' => $this->generateUrl('autocomplete')
        ));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            /** @var \App\Entity\User|null $user */
            $user = $this->getUser();
            $user->setIsActivated(true);
            $userRepository->save($user, true);

            $profile->setUser($user);
            $profileRepository->save($profile, true);

            $this->addFlash('success', 'Votre profil a bien été créé !');

            return $this->redirectToRoute('app_job_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('profile/new.html.twig', [
            'profile' => $profile,
            'form' => $form,
            'backLink' => $request->headers->get('referer'),
        ]);
    }

    #[Route('/{id}', name: 'app_profile_show', methods: ['GET'])]
    public function show(Profile $profile, Request $request): Response
    {

        return $this->render('profile/show.html.twig', [
            'profile' => $profile,
            'backLink' => $request->headers->get('referer'),
        ]);
    }

    #[Route('/{id}/edit', name: 'app_profile_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Profile $profile, ProfileRepository $profileRepository): Response
    {
        $form = $this->createForm(ProfileType::class, $profile, array(
            'autocomplete' => $this->generateUrl('autocomplete')
        ));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $profile->setUpdatedAt(new \DateTimeImmutable('now'));
            $profileRepository->save($profile, true);

            $this->addFlash('success', 'Votre profil a bien été modifié !');

            return $this->redirectToRoute('app_profile_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('profile/edit.html.twig', [
            'profile' => $profile,
            'form' => $form,
            'backLink' => $request->headers->get('referer'),
        ]);
    }
}
