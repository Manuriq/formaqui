<?php

namespace App\Entity;

use App\Repository\ProfileRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Ignore;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: ProfileRepository::class)]
#[Vich\Uploadable]
class Profile
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $address = null;

    #[ORM\Column(length: 255)]
    private ?string $firstName = null;

    #[ORM\Column(length: 255)]
    private ?string $lastName = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $age = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $phone = null;

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

    #[ORM\Column(length: 255)]
    private ?string $diplomeDate = null;

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

    // Système d'upload d'images
    #[Vich\UploadableField(mapping: 'avatars', fileNameProperty: 'imageName', size: 'imageSize')]
    #[Ignore]
    private ?File $imageFile = null;

    #[ORM\Column(nullable: true)]
    private ?string $imageName = null;

    #[ORM\Column(nullable: true)]
    private ?int $imageSize = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\OneToOne(inversedBy: 'profile', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getAge(): ?\DateTimeInterface
    {
        return $this->age;
    }

    public function setAge(\DateTimeInterface $age): self
    {
        $this->age = $age;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

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

    public function getDiplomeDate(): ?string
    {
        return $this->diplomeDate;
    }

    public function setDiplomeDate(string $diplomeDate): self
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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageName(?string $imageName): void
    {
        $this->imageName = $imageName;
    }

    public function getImageName(): ?string
    {
        return $this->imageName;
    }

    public function setImageSize(?int $imageSize): void
    {
        $this->imageSize = $imageSize;
    }

    public function getImageSize(): ?int
    {
        return $this->imageSize;
    }
}
