<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230418131708 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE job ADD pay VARCHAR(255) DEFAULT NULL, ADD bonus LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', ADD qualifications LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', ADD start_job DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', ADD stop_job DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE job DROP pay, DROP bonus, DROP qualifications, DROP start_job, DROP stop_job');
    }
}
