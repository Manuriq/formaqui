<?php

namespace App\Entity;

use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\JobRepository;
use Gedmo\Mapping\Annotation as Gedmo;

#[ORM\Entity(repositoryClass: JobRepository::class)]
class Job
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'jobs')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Business $Business = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column]
    #[Gedmo\Timestampable(on: 'create')]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    #[Gedmo\Timestampable]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\Column]
    private ?bool $state = true;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private array $tags = [];

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $pay = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private array $bonus = [];

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private array $qualifications = [];

    #[ORM\Column(nullable: true)]
    private ?DateTime $startJob = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTime $stopJob = null;

    #[ORM\Column(length: 255)]
    private ?string $address = null;

    #[ORM\Column(length: 255)]
    private ?string $street = null;

    #[ORM\Column(length: 255)]
    private ?string $postcode = null;

    #[ORM\Column(length: 255)]
    private ?string $city = null;

    #[ORM\Column(length: 255)]
    private ?string $latitude = null;

    #[ORM\Column(length: 255)]
    private ?string $longitude = null;

    #[ORM\Column(length: 255)]
    private ?string $pay_choice = null;

    #[ORM\OneToMany(mappedBy: 'job', targetEntity: Apply::class)]
    private Collection $applies;

    public function __construct()
    {
        $this->applies = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBusiness(): ?Business
    {
        return $this->Business;
    }

    public function setBusiness(?Business $Business): self
    {
        $this->Business = $Business;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function isState(): ?bool
    {
        return $this->state;
    }

    public function setState(bool $state): self
    {
        $this->state = $state;

        return $this;
    }

    public function getTags(): array
    {
        return $this->tags;
    }

    public function setTags(?array $tags): self
    {
        $this->tags = $tags;

        return $this;
    }

    public function getPay(): ?string
    {
        return $this->pay;
    }

    public function setPay(?string $pay): self
    {
        $this->pay = $pay;

        return $this;
    }

    public function getBonus(): array
    {
        return $this->bonus;
    }

    public function setBonus(?array $bonus): self
    {
        $this->bonus = $bonus;

        return $this;
    }

    public function getQualifications(): array
    {
        return $this->qualifications;
    }

    public function setQualifications(?array $qualifications): self
    {
        $this->qualifications = $qualifications;

        return $this;
    }

    public function getStartJob(): ?\DateTime
    {
        return $this->startJob;
    }

    public function setStartJob(\DateTime $startJob): self
    {
        $this->startJob = $startJob;

        return $this;
    }

    public function getStopJob(): ?\DateTime
    {
        return $this->stopJob;
    }

    public function setStopJob(?\DateTime $stopJob): self
    {
        $this->stopJob = $stopJob;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function setStreet(string $street): self
    {
        $this->street = $street;

        return $this;
    }

    public function getPostcode(): ?string
    {
        return $this->postcode;
    }

    public function setPostcode(string $postcode): self
    {
        $this->postcode = $postcode;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getLatitude(): ?string
    {
        return $this->latitude;
    }

    public function setLatitude(string $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): ?string
    {
        return $this->longitude;
    }

    public function setLongitude(string $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getPayChoice(): ?string
    {
        return $this->pay_choice;
    }

    public function setPayChoice(string $pay_choice): self
    {
        $this->pay_choice = $pay_choice;

        return $this;
    }

    /**
     * @return Collection<int, Apply>
     */
    public function getApplies(): Collection
    {
        return $this->applies;
    }

    public function addApply(Apply $apply): self
    {
        if (!$this->applies->contains($apply)) {
            $this->applies->add($apply);
            $apply->setJob($this);
        }

        return $this;
    }

    public function removeApply(Apply $apply): self
    {
        if ($this->applies->removeElement($apply)) {
            // set the owning side to null (unless already changed)
            if ($apply->getJob() === $this) {
                $apply->setJob(null);
            }
        }

        return $this;
    }
}
