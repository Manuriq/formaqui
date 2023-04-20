<?php

namespace App\Form;

use App\Entity\Job;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\RadioType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class JobType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $address = $options['address'];
        $postcode = $options['postcode'];
        $city = $options['city'];

        $businessAdress = 'Voulez vous utiliser cette adresse pour votre offre ? '. $address .', ' . $city . ', ' . $postcode .'';
        $builder
            ->add('title', TextType::class, [
                'mapped' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez le titre de votre offre',
                    ]),
                ],
                'label' => "Titre de votre offre",
            ])
            ->add('description', TextareaType::class, [
                'mapped' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez la description de votre offre',
                    ]),
                ],
                'label' => "Description de votre offre",
            ])
            ->add('tags', ChoiceType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Choisissez des tags pour votre offre',
                    ]),
                ],
                'choices' => [
                    'CDI' => "CDI",
                    'CDD' => "CDD",
                    'Alternance' => "Alternance",
                ],
                'label' => "Type de contrat",
                'multiple' => true,
                'expanded' => true,
            ])
            ->add('startJob', DateType::class, [
                'mapped' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Choisissez la date de début du contrat',
                    ]),
                ],
                'label' => "Date de début du contrat",
            ])
            ->add('stopJob', DateType::class, [
                'mapped' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Choisissez la date de fin du contrat',
                    ]),
                ],
                'label' => "Date de fin du contrat",
                'label_attr' => ['id' => 'label_job_stopJob']
            ])
            ->add('pay', TextType::class, [
                'mapped' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez le salaire de votre offre',
                    ]),
                ],
                'label' => "Salaire de votre offre (en € brut) par mois",
                'attr' => [
                    'placeholder' => 'Ex: 2000€'
                ]
            ])
            ->add('checkbox_address', ChoiceType::class, [
                'mapped' => false,
                'label'    => $businessAdress,
                'required' => true,
                'choices' => [
                    'Oui' => "Oui",
                    'Non' => "Non",
                ],
                'multiple' => false,
                'expanded' => false,
            ])
            ->add('address', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez l\'adresse de votre entreprise',
                    ]),
                ],
                'label' => "Adresse de l'offre",
                'autocomplete' => true,
                'autocomplete_url' => "autocomplete/",
                'tom_select_options' => [
                    'maxItems' => 1,
                    'placeholder' => "Rechercher une adresse"
                ]
            ])
            // ->add('checkbox_qualifications', ChoiceType::class, [
            //     'mapped' => false,
            //     'label'    => 'Diplome exigé?',
            //     'required' => true,
            //     'choices' => [
            //         'Oui' => "Oui",
            //         'Non' => "Non",
            //     ],
            //     'multiple' => false,
            //     'expanded' => false,
            // ])
            // ->add('qualifications', ChoiceType::class, [
            //     'mapped' => false,
            //     'constraints' => [
            //         new NotBlank([
            //             'message' => 'Quelles sont les qualifications requises pour votre offre ?',
            //         ]),
            //     ],
            //     'choices' => [
            //         'CDI' => "CDI",
            //         'CDD' => "CDD",
            //         'Alternance' => "Alternance",
            //     ],
            //     'label' => "Quelles sont les qualifications requises pour votre offre ?",
            //     'multiple' => true,
            //     'expanded' => true,
            // ])
            // ->add('bonus', ChoiceType::class, [
            //     'mapped' => false,
            //     'constraints' => [
            //         new NotBlank([
            //             'message' => 'Choisissez des avantages pour votre offre',
            //         ]),
            //     ],
            //     'choices' => [
            //         'A DEFINIR 1' => "A DEFINIR 1",
            //         'A DEFINIR 2' => "A DEFINIR 2",
            //         'A DEFINIR 3' => "A DEFINIR 3",
            //     ],
            //     'label' => "Choisissez des avantages pour votre offre",
            //     'multiple' => true,
            //     'expanded' => true,
            // ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Job::class,
            'address' => null,
            'postcode' => null,
            'city' => null,
        ]);
    }
}
