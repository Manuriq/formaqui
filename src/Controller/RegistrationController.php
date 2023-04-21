<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Business;
use App\Security\Authenticator;
use App\Security\EmailVerifier;
use App\Form\RegistrationFormType;
use Symfony\Component\Mime\Address;
use Doctrine\ORM\EntityManagerInterface;
use App\Form\RegistrationBusinessFormType;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;

class RegistrationController extends AbstractController
{
    private EmailVerifier $emailVerifier;

    public function __construct(EmailVerifier $emailVerifier)
    {
        $this->emailVerifier = $emailVerifier;
    }

    #[Route('/prereg', name: 'app_prereg')]
    public function autocomplete(Request $request)
    {
        // on check si l'utilisateur est déjà connecté
        if ($this->getUser()) {
            return $this->redirectToRoute('app_home');
        }
        return $this->render('registration/prereg.html.twig');
    }

    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, UserAuthenticatorInterface $userAuthenticator, Authenticator $authenticator, EntityManagerInterface $entityManager, HttpClientInterface $httpClient): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('app_home');
        }
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            // On refait un appel à l'API pour récupérer les coordonnées GPS de l'adresse
            $response = $httpClient->request('GET', 'https://api-adresse.data.gouv.fr/search/', [
                'query' => [
                    'q' => $form->get('address')->getData(),
                ],
            ]);
            $results = json_decode($response->getContent());

            $user->setLatitude($results->features[0]->geometry->coordinates[0]);
            $user->setLongitude($results->features[0]->geometry->coordinates[1]);
            $user->setCity($results->features[0]->properties->city);
            $user->setPostcode($results->features[0]->properties->postcode);
            $user->setAddress($results->features[0]->properties->label);
            $user->setStreet($results->features[0]->properties->name);

            $user->setStudent(true);
            $user->setCreatedAt(new \DateTimeImmutable('now'));
            $user->setUpdatedAt(new \DateTimeImmutable('now'));
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );
            $user->setRoles(['ROLE_USER']);

            $entityManager->persist($user);
            $entityManager->flush();

            // generate a signed url and email it to the user
            $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
                (new TemplatedEmail())
                    ->from(new Address('mailer@your-domain.com', 'FormaKids'))
                    ->to($user->getEmail())
                    ->subject('Merci de confirmer votre email')
                    ->htmlTemplate('registration/confirmation_email.html.twig')
            );
            // do anything else you need here, like send an email
            $this->addFlash("success", "Félicitation pour votre inscription! N'oubliez pas de valider votre email !");
            return $userAuthenticator->authenticateUser(
                $user,
                $authenticator,
                $request
            );
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    #[Route('/regb', name: 'app_register_business')]
    public function regb(Request $request, UserPasswordHasherInterface $userPasswordHasher, UserAuthenticatorInterface $userAuthenticator, Authenticator $authenticator, EntityManagerInterface $entityManager, HttpClientInterface $httpClient): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('app_home');
        }
        $user = new User();
        $form = $this->createForm(RegistrationBusinessFormType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $user->setStudent(false);
            $user->setCreatedAt(new \DateTimeImmutable('now'));
            $user->setUpdatedAt(new \DateTimeImmutable('now'));
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );
            $user->setRoles(['ROLE_USER', 'ROLE_BOSS']);

            $entityManager->persist($user);
            $entityManager->flush();

            $business = new Business();

            // On refait un appel à l'API pour récupérer les coordonnées GPS de l'adresse
            $response = $httpClient->request('GET', 'https://api-adresse.data.gouv.fr/search/', [
                'query' => [
                    'q' => $form->get('b_address')->getData(),
                ],
            ]);
            $results = json_decode($response->getContent());

            $business->setLatitude($results->features[0]->geometry->coordinates[0]);
            $business->setLongitude($results->features[0]->geometry->coordinates[1]);
            $business->setCity($results->features[0]->properties->city);
            $business->setPostcode($results->features[0]->properties->postcode);
            $business->setAddress($results->features[0]->properties->label);
            $business->setStreet($results->features[0]->properties->name);

            $business->setOwner($user);
            $business->setName($form->get('b_name')->getData());
            $business->setPhone($form->get('b_phone')->getData());
            $business->setSiret($form->get('b_siret')->getData());
            $business->setActivities($form->get('b_activities')->getData());
            $business->setDescription($form->get('b_description')->getData());
            $business->setWebsite($form->get('b_website')->getData());
            $business->setCreatedAt(new \DateTimeImmutable('now'));
            $business->setUpdatedAt(new \DateTimeImmutable('now'));

            $entityManager->persist($business);
            $entityManager->flush();
            // generate a signed url and email it to the user
            $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
                (new TemplatedEmail())
                    ->from(new Address('mailer@your-domain.com', 'FormaKids'))
                    ->to($user->getEmail())
                    ->subject('Merci de confirmer votre email')
                    ->htmlTemplate('registration/confirmation_email.html.twig')
            );
            // do anything else you need here, like send an email
            $this->addFlash("success", "Félicitation pour votre inscription! N'oubliez pas de valider votre email !");
            return $userAuthenticator->authenticateUser(
                $user,
                $authenticator,
                $request
            );
        }

        return $this->render('registration/registerBusiness.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    #[Route('/verify/email', name: 'app_verify_email')]
    public function verifyUserEmail(Request $request, TranslatorInterface $translator): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        // validate email confirmation link, sets User::isVerified=true and persists
        try {
            $this->emailVerifier->handleEmailConfirmation($request, $this->getUser());
        } catch (VerifyEmailExceptionInterface $exception) {
            $this->addFlash('verify_email_error', $translator->trans($exception->getReason(), [], 'VerifyEmailBundle'));

            return $this->redirectToRoute('app_register');
        }

        // @TODO Change the redirect on success and handle or remove the flash message in your templates
        $this->addFlash('success', 'Vous venez de vérifier votre adresse email avec succès.');

        return $this->redirectToRoute('app_home');
    }
}
