<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230427140033 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE profile (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, wish LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', contract LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', replacements TINYINT(1) NOT NULL, availability LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', start_job DATETIME NOT NULL, diplome_date VARCHAR(255) NOT NULL, diplomes LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', experience INT NOT NULL, qualities LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', likes LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', other LONGTEXT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_8157AA0FA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE profile ADD CONSTRAINT FK_8157AA0FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE profile DROP FOREIGN KEY FK_8157AA0FA76ED395');
        $this->addSql('DROP TABLE profile');
    }
}
