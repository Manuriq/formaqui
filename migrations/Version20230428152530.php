<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230428152530 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE profile ADD address VARCHAR(255) DEFAULT NULL, ADD first_name VARCHAR(255) NOT NULL, ADD last_name VARCHAR(255) NOT NULL, ADD age DATETIME DEFAULT NULL, ADD phone VARCHAR(255) DEFAULT NULL, ADD postcode INT DEFAULT NULL, ADD city VARCHAR(255) DEFAULT NULL, ADD latitude VARCHAR(255) DEFAULT NULL, ADD longitude VARCHAR(255) DEFAULT NULL, ADD street VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE user DROP address, DROP student, DROP first_name, DROP last_name, DROP age, DROP contrat, DROP is_verified, DROP phone, DROP image_name, DROP image_size, DROP postcode, DROP city, DROP latitude, DROP longitude, DROP street');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD address VARCHAR(255) DEFAULT NULL, ADD student TINYINT(1) NOT NULL, ADD first_name VARCHAR(255) NOT NULL, ADD last_name VARCHAR(255) NOT NULL, ADD age DATETIME DEFAULT NULL, ADD contrat LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', ADD is_verified TINYINT(1) NOT NULL, ADD phone VARCHAR(255) DEFAULT NULL, ADD image_name VARCHAR(255) DEFAULT NULL, ADD image_size INT DEFAULT NULL, ADD postcode INT DEFAULT NULL, ADD city VARCHAR(255) DEFAULT NULL, ADD latitude VARCHAR(255) DEFAULT NULL, ADD longitude VARCHAR(255) DEFAULT NULL, ADD street VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE profile DROP address, DROP first_name, DROP last_name, DROP age, DROP phone, DROP postcode, DROP city, DROP latitude, DROP longitude, DROP street');
    }
}
