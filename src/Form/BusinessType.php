<?php

namespace App\Form;

use App\Entity\Business;
use Symfony\Component\Form\AbstractType;
use Vich\UploaderBundle\Form\Type\VichFileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class BusinessType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        $autocomplete = $options['autocomplete'];

        $builder
            ->add('name', TextType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez le nom de votre entreprise',
                    ]),
                ],
                'label' => "Nom de la structure",
            ])
            ->add('address', TextType::class, [
                'mapped' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez l\'adresse de l\'entreprise',
                    ]),
                ],
                'label' => "Adresse",
                'autocomplete' => true,
                'autocomplete_url' => $autocomplete,
                'tom_select_options' => [
                    'maxItems' => 1,
                    'placeholder' => "Entrez l'adresse de l'entreprise"
                ]
            ])
            ->add('phone', TelType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez le numéro de téléphone de votre entreprise',
                    ]),
                ],
                'label' => "Numéro de téléphone de votre structure",
            ])
            ->add('siret', TextType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez le numéro de SIRET de votre entreprise',
                    ]),
                ],
                'label' => "Numéro de SIRET",
            ])
            ->add('activities', ChoiceType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Choisissez au moins une activité',
                    ]),
                ],
                'label' => "Activités de votre entreprise",
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
            ->add('website', TextType::class, [
                'required' => false,
                'attr' => ['placeholder' => 'Facultatif'],
                'label' => "Site internet:",
            ])
            ->add('description', TextareaType::class, [
                'required' => false,
                'attr' => [
                    'placeholder' => "Facultatif",
                    'rows' => 5,
                ],
                'label' => "Description de votre entreprise",
            ])
            ->add('imageFile', VichFileType::class, [
                'label' => 'Logo de votre entreprise (facultatif)',
                'required' => false,
                'allow_delete' => true,
                'download_uri' => false,
                'download_label' => false,
                'delete_label' => false,
                'asset_helper' => true,
                'attr' => [
                    'class' => 'form-control-file',
                    'placeholder' => 'Choisissez une image',
                ],
            ])
            ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Business::class,
            'autocomplete' => null,
        ]);
    }
}
