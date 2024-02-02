import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedUserIconField1706876685475 implements MigrationInterface {
    name = 'AddedUserIconField1706876685475'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "image" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "image"`);
    }

}
