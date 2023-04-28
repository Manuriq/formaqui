<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private HttpClientInterface $httpClient;
    private UserPasswordHasherInterface $userPasswordHasher;

    public function __construct(UserPasswordHasherInterface $hasher, HttpClientInterface $httpClient)
    {
        $this->userPasswordHasher = $hasher;
        $this->httpClient = $httpClient;
    }

    public function load(ObjectManager $manager): void
    {
        $this->createUser($manager, 'manu@gmail.com', ['ROLE_USER']);
        $this->createUser($manager, 'manuboss@gmail.com', ['ROLE_USER', 'ROLE_BOSS']);
    }

    private function createUser(ObjectManager $manager, string $email, array $role){
        $response = $this->httpClient->request('GET', 'https://api-adresse.data.gouv.fr/search/', [
            'query' => [
                'q' => "4 rue du gemmeur 33980 Audenge",
            ],
        ]);
        $results = json_decode($response->getContent());

        $user = new User();
        $user->setEmail($email);
        $user->setPassword('');
        $user->setFirstName('Manuel');
        $user->setLastName('Riquelme');
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
            $this->userPasswordHasher->hashPassword(
                $user,
                "nunu33660"
            )
        );

        $user->setRoles($role);
        $manager->persist($user);

        $manager->flush();
    }
}
