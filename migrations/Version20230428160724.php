<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230428160724 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE profile DROP postcode, DROP city, DROP latitude, DROP longitude, DROP street');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE profile ADD postcode INT DEFAULT NULL, ADD city VARCHAR(255) DEFAULT NULL, ADD latitude VARCHAR(255) DEFAULT NULL, ADD longitude VARCHAR(255) DEFAULT NULL, ADD street VARCHAR(255) DEFAULT NULL');
    }
}
