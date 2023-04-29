<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Business;
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
        $this->createUser($manager, 'student@gmail.com', ['ROLE_STUDENT']);
        $this->createUser($manager, 'business@gmail.com', ['ROLE_BUSINESS']);
    }

    private function createUser(ObjectManager $manager, string $email, array $role){
       
        $user = new User();
        $user->setEmail($email);
        $user->setPassword('');
        $user->setFirstName('Manuel');
        $user->setLastName('Riquelme');

        $user->setPassword(
            $this->userPasswordHasher->hashPassword(
                $user,
                "12345"
            )
        );

        $user->setRoles($role);
        $manager->persist($user);
        $manager->flush();  

    }
}
