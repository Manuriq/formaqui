<?php
namespace App\Autocompleter;

use App\Entity\Job;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Security\Core\Security;
use Symfony\UX\Autocomplete\EntityAutocompleterInterface;
use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;

#[AutoconfigureTag('ux.entity_autocompleter', ['alias' => 'Job'])] 
class JobAutocompleter implements EntityAutocompleterInterface
{
    public function getEntityClass(): string
    {
        return Job::class;
    }

    public function createFilteredQueryBuilder(EntityRepository $repository, string $query): QueryBuilder
    {
        return $repository
            // the alias "food" can be anything
            ->createQueryBuilder('Job')
            ->andWhere('job.title LIKE :search OR job.description LIKE :search')
            ->setParameter('search', '%'.$query.'%')
            ->orderBy('job.updatedAt', 'ASC')
            // maybe do some custom filtering in all cases
            ->andWhere('job.state = 1')
            //->setParameter('isHealthy', true)
        ;
    }

    public function getLabel(object $entity): string
    {
        return $entity->getName();
    }

    public function getValue(object $entity): string
    {
        return $entity->getId();
    }

    public function isGranted(Security $security): bool
    {
        // see the "security" option for details
        return true;
    }
}