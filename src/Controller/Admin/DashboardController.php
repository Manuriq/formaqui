<?php

namespace App\Controller\Admin;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{

    public function __construct(private AdminUrlGenerator $adminUrlGenerator)
    {
        
    }

    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        //return parent::index();

        // Option 1. You can make your dashboard redirect to some common page of your backend
        //

        $url = $this->adminUrlGenerator
            ->setController(UserCrudController::class)
            ->generateUrl();

        
        return $this->redirect($url);

        // Option 2. You can make your dashboard redirect to different pages depending on the user
        //
        // if ('jane' === $this->getUser()->getUsername()) {
        //     return $this->redirect('...');
        // }

        // Option 3. You can render some custom template to display a proper dashboard with widgets, etc.
        // (tip: it's easier if your template extends from @EasyAdmin/page/content.html.twig)
        //
        // return $this->render('some/path/my-dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Formaqui');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::subMenu('Actions', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Utilisateurs', 'fas fa-users', User::class),
            // MenuItem::linkToCrud('Profils', 'fas fa-user', User::class),
            // MenuItem::linkToCrud('Entreprises', 'fas fa-building', User::class),
            // MenuItem::linkToCrud('Formations', 'fas fa-graduation-cap', User::class),
            // MenuItem::linkToCrud('Offres', 'fas fa-briefcase', User::class),
            // MenuItem::linkToCrud('Candidatures', 'fas fa-file-alt', User::class),
            // MenuItem::linkToCrud('Messages', 'fas fa-envelope', User::class),
            // MenuItem::linkToCrud('Notifications', 'fas fa-bell', User::class),
        ]);
    }
}
