<?php

namespace App\Controller\Admin;

use App\Entity\User;
use Symfony\Component\Form\FormEvents;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use Symfony\Component\Form\FormBuilderInterface;
use EasyCorp\Bundle\EasyAdminBundle\Dto\EntityDto;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Config\KeyValueStore;
use EasyCorp\Bundle\EasyAdminBundle\Context\AdminContext;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class UserCrudController extends AbstractCrudController
{

    public function __construct(public UserPasswordHasherInterface $userPasswordHasher)
    {
        
    }

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        $roles = [
            'ROLE_USER' => "Accès au site", 
            'ROLE_STUDENT' => "Compte étudiant", 
            'ROLE_BUSINESS' => "Compte entreprise", 
            'ROLE_ADMIN' => "Administrateur"
        ];
        $fields = [
            IdField::new('id')->hideOnForm(),
            EmailField::new('email', 'Adresse email'),
            TextField::new('first_name', 'Prénom'),
            TextField::new('last_name', 'Nom'),
            ChoiceField::new('roles', 'Roles')
                ->setFormTypeOptions([
                    'multiple' => true,
                    'expanded' => true,
                    'choices' => array_combine($roles, $roles),
                    'data' => ["Accès au site"],
                ])
            ->setRequired(true)
            ->onlyOnForms(),
            BooleanField::new('is_verified', 'Utilisateur vérifié'),
            DateTimeField::new('created_at', 'Date de création')->hideOnForm(),
            DateTimeField::new('updated_at', 'Date de modification')->hideOnForm(),
            //TextField::new('password')->onlyWhenCreating(),
            //TextEditorField::new('description'),
        ];


        $password = TextField::new('password')
            ->setFormType(RepeatedType::class)
            ->setFormTypeOptions([
                'type' => PasswordType::class,
                'first_options' => ['label' => 'Mot de passe'],
                'second_options' => ['label' => '(Répétez le mot de passe)'],
                'mapped' => false,
            ])
            ->setRequired($pageName === Crud::PAGE_NEW)
            ->onlyOnForms()
        ;

        $fields[] = $password;

        return $fields;

    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            // the visible title at the top of the page and the content of the <title> element
            // it can include these placeholders:
            //   %entity_name%, %entity_as_string%,
            //   %entity_id%, %entity_short_id%
            //   %entity_label_singular%, %entity_label_plural%
            ->setPageTitle('index', 'Gestion des utilisateurs')

            // you can pass a PHP closure as the value of the title
            ->setPageTitle('new', 'Créer un utilisateur')

            // in DETAIL and EDIT pages, the closure receives the current entity
            // as the first argument
            ->setPageTitle('detail', fn (User $user) => (string) $user)
            ->setPageTitle('edit', fn (User $user) => sprintf('Edition de: <b>%s %s</b>', $user->getFirstName(), $user->getLastName()))

            // the help message displayed to end users (it can contain HTML tags)
            ->setHelp('edit', 'Ajouter le ROLE_ADMIN si vous souhaitez passer l\'utilisateur admin')
            ->setHelp('new', 'Ajouter le ROLE_ADMIN si vous souhaitez passer l\'utilisateur admin')
        ;
    }

    public function createNewFormBuilder(EntityDto $entityDto, KeyValueStore $formOptions, AdminContext $context): FormBuilderInterface
    {
        $formBuilder = parent::createNewFormBuilder($entityDto, $formOptions, $context);
        return $this->addPasswordEventListener($formBuilder);
    }

    public function createEditFormBuilder(EntityDto $entityDto, KeyValueStore $formOptions, AdminContext $context): FormBuilderInterface
    {
        $formBuilder = parent::createEditFormBuilder($entityDto, $formOptions, $context);
        return $this->addPasswordEventListener($formBuilder);
    }

    private function addPasswordEventListener(FormBuilderInterface $formBuilder): FormBuilderInterface
    {
        return $formBuilder->addEventListener(FormEvents::POST_SUBMIT, $this->hashPassword());
    }

    private function hashPassword() {
        return function($event) {
            $form = $event->getForm();
            if (!$form->isValid()) {
                return;
            }
            $password = $form->get('password')->getData();
            if ($password === null) {
                return;
            }

            $hash = $this->userPasswordHasher->hashPassword($this->getUser(), $password);
            $form->getData()->setPassword($hash);
        };
    }
    
}
