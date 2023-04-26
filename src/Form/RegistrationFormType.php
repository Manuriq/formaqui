<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Vich\UploaderBundle\Form\Type\VichFileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class, [
                'constraints' => [
                    new Email([
                        'message' => 'Entrez une adresse email valide',
                    ]),
                ]
            ])
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
                'constraints' => [
                    new IsTrue([
                        'message' => 'Vous devez accepter les conditions d\'utilisation.',
                    ]),
                ],
                'label' => "J'accepte les conditions d'utilisation",
            ])
            ->add('plainPassword', PasswordType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
                'attr' => ['autocomplete' => 'new-password'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez un mot de passe',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Votre mot de passe doit faire au moins {{ limit }} caractères',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
            ])
            ->add('firstName', TextType::class, [
                'mapped' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez votre prénom',
                    ]),
                ],
                'label' => "Prénom",
            ])
            ->add('lastName', TextType::class, [
                'mapped' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez votre nom',
                    ]),
                ],
                'label' => "Nom",
            ])
            ->add('age', BirthdayType::class, [
                'mapped' => true,
                'widget' => 'single_text',
                'html5' => false,
                'format' => 'dd/mm/yyyy',
                'attr' => ['class' => 'js-datepicker'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez votre date de naissance',
                    ]),
                ],
                'label' => "Date de naissance",
            ])
            ->add('address', TextType::class, [
                'mapped' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez votre adresse',
                    ]),
                ],
                'label' => "Adresse",
                'autocomplete' => true,
                'autocomplete_url' => "autocomplete/",
                'tom_select_options' => [
                    'maxItems' => 1,
                    'placeholder' => "Rechercher une adresse"
                ]
            ])
            ->add('phone', TelType::class, [
                'mapped' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez votre numéro de téléphone',
                    ]),
                ],
                'label' => "Numéro de téléphone",
            ])
            ->add('imageFile', VichFileType::class, [
                'label' => 'Photo de profil',
                'required' => false,
                'allow_delete' => true,
                'download_uri' => false,
                'download_label' => false,
                'delete_label' => false,
                'asset_helper' => true,
                'attr' => [
                    'class' => 'form-control-file',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
