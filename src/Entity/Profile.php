<?php

namespace App\Entity;

use App\Repository\ProfileRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProfileRepository::class)]
class Profile
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(inversedBy: 'profile', cascade: ['persist', 'remove'])]
    private ?user $user = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $wish = [];

    #[ORM\Column(type: Types::ARRAY)]
    private array $contract = [];

    #[ORM\Column]
    private ?bool $replacements = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $availability = [];

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $startJob = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $diplomeDate = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $diplomes = [];

    #[ORM\Column]
    private ?int $experience = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $qualities = [];

    #[ORM\Column(type: Types::ARRAY)]
    private array $likes = [];

    #[ORM\Column(type: Types::TEXT)]
    private ?string $other = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updatedAt = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?user
    {
        return $this->user;
    }

    public function setUser(?user $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getWish(): array
    {
        return $this->wish;
    }

    public function setWish(array $wish): self
    {
        $this->wish = $wish;

        return $this;
    }

    public function getContract(): array
    {
        return $this->contract;
    }

    public function setContract(array $contract): self
    {
        $this->contract = $contract;

        return $this;
    }

    public function isReplacements(): ?bool
    {
        return $this->replacements;
    }

    public function setReplacements(bool $replacements): self
    {
        $this->replacements = $replacements;

        return $this;
    }

    public function getAvailability(): array
    {
        return $this->availability;
    }

    public function setAvailability(array $availability): self
    {
        $this->availability = $availability;

        return $this;
    }

    public function getStartJob(): ?\DateTimeInterface
    {
        return $this->startJob;
    }

    public function setStartJob(\DateTimeInterface $startJob): self
    {
        $this->startJob = $startJob;

        return $this;
    }

    public function getDiplomeDate(): ?\DateTimeInterface
    {
        return $this->diplomeDate;
    }

    public function setDiplomeDate(\DateTimeInterface $diplomeDate): self
    {
        $this->diplomeDate = $diplomeDate;

        return $this;
    }

    public function getDiplomes(): array
    {
        return $this->diplomes;
    }

    public function setDiplomes(array $diplomes): self
    {
        $this->diplomes = $diplomes;

        return $this;
    }

    public function getExperience(): ?int
    {
        return $this->experience;
    }

    public function setExperience(int $experience): self
    {
        $this->experience = $experience;

        return $this;
    }

    public function getQualities(): array
    {
        return $this->qualities;
    }

    public function setQualities(array $qualities): self
    {
        $this->qualities = $qualities;

        return $this;
    }

    public function getLikes(): array
    {
        return $this->likes;
    }

    public function setLikes(array $likes): self
    {
        $this->likes = $likes;

        return $this;
    }

    public function getOther(): ?string
    {
        return $this->other;
    }

    public function setOther(string $other): self
    {
        $this->other = $other;

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
}
