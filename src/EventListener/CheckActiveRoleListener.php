<?php 

// src/EventListener/CheckActiveRoleListener.php
namespace App\EventListener;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpKernel\Event\RequestEvent;

class CheckActiveRoleListener
{
    private $requestStack;
    private $urlGenerator;
    private $security;

    public function __construct(RequestStack $requestStack, UrlGeneratorInterface $urlGenerator, Security $security)
    {
        $this->requestStack = $requestStack;
        $this->urlGenerator = $urlGenerator;
        $this->security = $security;
    }

    public function onKernelRequest(RequestEvent $event)
    {
        $request = $event->getRequest();
        $route = $request->attributes->get('_route');
        
        // On vérifie que ce ne sont pas nos appels AJAX
        if ($route == "autocomplete") {
            return;
        }

        // Vérifie si l'utilisateur est authentifié et possède le rôle ROLE_ACTIVE
        /** @var \App\Entity\User|null $user */
        $user = $this->security->getUser();
        if ($user && $user->isActivated()) {
            // Si l'utilisateur a le rôle ROLE_ACTIVE, on ne fait rien
            return;
        }

        // Vérifie si la redirection a déjà été effectuée
        $session = $request->getSession();
        $redirected = $session->get('redirected_' . $route);
        if ($redirected) {
            return;
        }

        // Si l'utilisateur est authentifié mais ne possède pas le rôle ROLE_ACTIVE
        if ($user) {
            if (in_array('ROLE_STUDENT', $user->getRoles())) {
                $route = 'app_profile_new';
            } elseif (in_array('ROLE_BUSINESS', $user->getRoles())) {
                $route = 'app_business_new';
            }
        }

        // Enregistre le fait que la redirection a été effectuée
        $session->set('redirected_' . $route, true);

        // Redirige l'utilisateur vers la page correspondante
        $url = $this->urlGenerator->generate($route);
        $response = new RedirectResponse($url);
        $event->setResponse($response);
    }
}
