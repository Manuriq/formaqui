<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230420154822 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE business ADD street VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE job ADD address VARCHAR(255) NOT NULL, ADD street VARCHAR(255) NOT NULL, ADD postcode VARCHAR(255) NOT NULL, ADD city VARCHAR(255) NOT NULL, ADD latitude VARCHAR(255) NOT NULL, ADD longitude VARCHAR(255) NOT NULL, CHANGE start_job start_job DATETIME DEFAULT NULL, CHANGE stop_job stop_job DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD street VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE business DROP street');
        $this->addSql('ALTER TABLE job DROP address, DROP street, DROP postcode, DROP city, DROP latitude, DROP longitude, CHANGE start_job start_job DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', CHANGE stop_job stop_job DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE user DROP street');
    }
}
