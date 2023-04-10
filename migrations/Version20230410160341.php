<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230410160341 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE business DROP FOREIGN KEY FK_8D36E388FDDAB70');
        $this->addSql('DROP INDEX IDX_8D36E388FDDAB70 ON business');
        $this->addSql('ALTER TABLE business CHANGE activities activities LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', CHANGE owner_id_id owner_id INT NOT NULL');
        $this->addSql('ALTER TABLE business ADD CONSTRAINT FK_8D36E387E3C61F9 FOREIGN KEY (owner_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_8D36E387E3C61F9 ON business (owner_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE business DROP FOREIGN KEY FK_8D36E387E3C61F9');
        $this->addSql('DROP INDEX IDX_8D36E387E3C61F9 ON business');
        $this->addSql('ALTER TABLE business CHANGE activities activities VARCHAR(255) NOT NULL, CHANGE owner_id owner_id_id INT NOT NULL');
        $this->addSql('ALTER TABLE business ADD CONSTRAINT FK_8D36E388FDDAB70 FOREIGN KEY (owner_id_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_8D36E388FDDAB70 ON business (owner_id_id)');
    }
}
