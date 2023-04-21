<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230421124805 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user CHANGE address address VARCHAR(255) DEFAULT NULL, CHANGE postcode postcode INT DEFAULT NULL, CHANGE city city VARCHAR(255) DEFAULT NULL, CHANGE latitude latitude VARCHAR(255) DEFAULT NULL, CHANGE longitude longitude VARCHAR(255) DEFAULT NULL, CHANGE street street VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user CHANGE address address VARCHAR(255) NOT NULL, CHANGE postcode postcode INT NOT NULL, CHANGE city city VARCHAR(255) NOT NULL, CHANGE latitude latitude VARCHAR(255) NOT NULL, CHANGE longitude longitude VARCHAR(255) NOT NULL, CHANGE street street VARCHAR(255) NOT NULL');
    }
}
