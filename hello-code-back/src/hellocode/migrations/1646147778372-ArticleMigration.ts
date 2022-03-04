import {MigrationInterface, QueryRunner} from "typeorm";

export class ArticleMigration1646147778372 implements MigrationInterface {
    name = 'ArticleMigration1646147778372'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`article\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`text\` varchar(255) NOT NULL, \`dateCreated\` datetime NOT NULL, \`categoryId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`article\``);
    }

}
