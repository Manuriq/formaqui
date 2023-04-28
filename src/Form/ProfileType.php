<?php

namespace App\Form;

use App\Entity\Profile;
use Symfony\Component\Form\AbstractType;
use Vich\UploaderBundle\Form\Type\VichFileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        $autocomplete = $options['autocomplete'];

        $builder
            ->add('firstName', TextType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez votre prénom',
                    ]),
                ],
                'label' => "Prénom",
            ])
            ->add('lastName', TextType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez votre nom',
                    ]),
                ],
                'label' => "Nom",
            ])
            ->add('age', BirthdayType::class, [
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
                'autocomplete_url' => $autocomplete,
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
            ->add('wish', ChoiceType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Choisissez où vous souhaitez postuler',
                    ]),
                ],
                'choices' => [
                    'MULTI ACCUEIL' => "MULTI ACCUEIL",
                    'CRECHE' => "CRECHE",
                    'MICRO CRECHE' => "MICRO CRECHE",
                    'ECOLE MATERNELLE' => "ECOLE MATERNELLE",
                    'ACCUEIL PERISCOLAIRE' => "ACCUEIL PERISCOLAIRE",
                    'CENTRE DE LOISIRS' => "CENTRE DE LOISIRS",
                    'AGENCE DE GARDE D\'ENFANTS' => "AGENCE DE GARDE D'ENFANTS",
                    'MAM' => "MAM"
                ],
                'label' => "Je souhaite postuler dans :",
                'multiple' => true,
                'expanded' => true,
            ])
            ->add('contract', ChoiceType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Choisissez un ou plusieurs types de contrat',
                    ]),
                ],
                'choices' => [
                    'CDI' => "CDI",
                    'CDD' => "CDD",
                    'Alternance' => "Alternance",
                ],
                'label' => "Mon choix de contrat :",
                'multiple' => true,
                'expanded' => true,
            ])
            ->add('replacements', ChoiceType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Acceptez vous les remplacements ponctuels ?'
                    ]),
                ],
                'choices' => [
                    'Oui' => true,
                    'Non' => false,
                ],
                'label' => "J'accepte les remplacements ponctuels :",
                'multiple' => false,
                'expanded' => true,
            ])
            ->add('availability', ChoiceType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Choisissez un ou plusieurs disponibilités',
                    ]),
                ],
                'choices' => [
                    '35h/semaine' => "35h/semaine",
                    '24h/semaine' => "24h/semaine",
                    'Moins de 24h/semaine' => "Moins de 24h/semaine",
                    'Je peux travailler les weeks ends' => "Je peux travailler les weeks ends",
                ],
                'label' => "Mes disponibiltés :",
                'multiple' => true,
                'expanded' => true,
            ])
            ->add('startJob', DateType::class, [
                'mapped' => true,
                'widget' => 'single_text',
                'html5' => false,
                'format' => 'dd/mm/yyyy',
                'attr' => ['class' => 'js-datepicker'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Choisissez à partir de quand vous êtes disponible',
                    ]),
                ],
                'label' => "Je suis disponible à partir du :",
            ])
            ->add('diplomeDate', TextType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez l\'année d\'obtention de votre CAP AEPE',
                    ]),
                ],
                'label' => "Année d'obtention de mon CAP AEPE :",
            ])
            ->add('diplomes', TextType::class, [
                'mapped' => false,
                'required' => false,
                'label' => "Autre diplome dans la petite enfance :",
            ])
            ->add('experience', ChoiceType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Choisissez votre expérience dans la petite enfance'
                    ]),
                ],
                'choices' => [
                    'Moins de 3 mois' => "0",
                    '1 à 2 ans' => "1",
                    'Plus de 3 ans' => "2"
                ],
                'label' => "Expérience dans la petite enfance :",
                'multiple' => false,
                'expanded' => true,
            ])
            ->add('qualities', ChoiceType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Choisissez au moins une qualité',
                    ]),
                ],
                'choices' => [
                    'Patient(e)' => "Patient(e)",
                    'Bienveillant(e)' => "Bienveillant(e)",
                    'Autonome' => "Autonome",
                    'Joyeux/souriant' => "Joyeux/souriant",
                    'Communiquant(e)' => "Communiquant(e)",
                    'Discret(e)' => "Discret(e)",
                    'A l\'écoute' => "A l'écoute",
                    'Je suis toujours les consignes' => "Je suis toujours les consignes",
                    'Plein d`\'idées' => "Plein d'idées",
                    'Hyper actif' => "Hyper actif",
                    'Calme' => "Calme",
                    'J\'aime animer' => "J'aime animer",
                    'Je suis flexible' => "Je suis flexible",
                    'Je m\'adapte facilement' => "Je m'adapte facilement",
                    'J\'aime travailler en équipe' => "J'aime travailler en équipe",
                    'je suis force de proposition' => "je suis force de proposition",
                    'Autres à préciser' => "Autres à préciser",
                ],
                'label' => "Mes principales qualités :",
                'multiple' => true,
                'expanded' => true,
            ])
            ->add('likes', ChoiceType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Choisissez ce que vous préférez dans votre métier',
                    ]),
                ],
                'choices' => [
                    'Chanter des chansons' => "Chanter des chansons",
                    'Créer des activités manuelles' => "Créer des activités manuelles",
                    'Faire manger les enfants' => "Faire manger les enfants",
                    'Cuisiner' => "Cuisiner",
                    'Jouer avec l\'enfant' => "Jouer avec l'enfant",
                    'Lire' => "Lire",
                    'Créer des jeux de plein air' => "Créer des jeux de plein air",
                    'Communiquer avec l\'enfant' => "Communiquer avec l'enfant",
                    'Communiquer avec les parents' => "Communiquer avec les parents",
                    'Appliquer les techniques d\'entretien' => "Appliquer les techniques d'entretien",
                    'Etre attentif à la sécurité de l\'enfant' => "Etre attentif à la sécurité de l'enfant",
                    'Assurer les soins au quotidien de l\'enfant' => "Assurer les soins au quotidien de l'enfant",
                    'Communiquer avec l\'équipe' => "Communiquer avec l'équipe",
                    'Garantir la confidentialité' => "Garantir la confidentialité",
                ],
                'label' => "Ce que je préfère dans mon métier :",
                'multiple' => true,
                'expanded' => true,
            ])
            ->add('other', TextareaType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Vous devez remplir ce champ',
                    ]),
                ],
                'attr' => [
                    'rows' => 5,
                ],
                'label' => "Complétez votre profil - Décrivez-vous :  Qu'est-ce qui fait que je suis unique ? Qu'est-ce que mon entourage dit de moi ?",
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
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Profile::class,
            'autocomplete' => null
        ]);
    }
}
