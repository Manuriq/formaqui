<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class RegistrationBusinessFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email')
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
            ->add('b_name', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez le nom de votre entreprise',
                    ]),
                ],
                'label' => "Nom de l'entreprise",
            ])
            ->add('b_address', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez l\'adresse de votre entreprise',
                    ]),
                ],
                'label' => "Adresse de l'entreprise",
                'autocomplete' => true,
                'autocomplete_url' => "autocomplete/",
                'tom_select_options' => [
                    'maxItems' => 1,
                    'placeholder' => "Rechercher une adresse"
                ]
            ])
            ->add('b_phone', TelType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez le numéro de téléphone de votre entreprise',
                    ]),
                ],
                'label' => "Numéro de téléphone de l'entreprise",
            ])
            ->add('b_siret', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez le numéro de SIRET de votre entreprise',
                    ]),
                ],
                'label' => "Numéro de SIRET de l'entreprise",
            ])
            ->add('b_activities', ChoiceType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez l\'activité de votre entreprise',
                    ]),
                ],
                'label' => "Activité de l'entreprise",
                'choices' => [
                    'Multi Accueil' => 'Multi Accueil',
                    'Crèche' => 'Crèche',
                    'Micro Crèche' => 'Micro Crèche',
                    'Agence de garde d\'enfants' => 'Agence de garde d\'enfants',
                    'Centre de loisirs' => 'Centre de loisirs',
                    'Accueil périscolaire' => 'Accueil périscolaire',
                    'Ecole Maternelle' => 'Ecole Maternelle',
                    'Ecole Primaire' => 'Ecole Primaire',
                    'MAM' => 'MAM',
                ],
                'multiple' => true,
                'expanded' => true,
            ])
            ->add('b_description', TextareaType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez la description de votre entreprise',
                    ]),
                    new Length([
                        // 'min' => 10,
                        // 'minMessage' => 'Votre description doit faire au moins {{ limit }} caractères',
                        // max length allowed by Symfony for security reasons
                        'max' => 255,
                        'maxMessage' => 'Votre description doit faire au maximum {{ limit }} caractères',
                    ])
                ],
                'label' => "Description de l'entreprise",
            ])
            ->add('b_speciales', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez les spécialitées de votre entreprise',
                    ]),
                ],
                'label' => "Spécialitées de l'entreprise",
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
