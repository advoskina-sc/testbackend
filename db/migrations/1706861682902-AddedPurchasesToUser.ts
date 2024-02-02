import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedPurchasesToUser1706861682902 implements MigrationInterface {
    name = 'AddedPurchasesToUser1706861682902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_purchases_product" ("usersId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_fa513ab8c480e5fc7316310454a" PRIMARY KEY ("usersId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_40d15c9cecac319607cb434231" ON "users_purchases_product" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9a199785f6743f1aadbe331c84" ON "users_purchases_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "users_purchases_product" ADD CONSTRAINT "FK_40d15c9cecac319607cb4342318" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_purchases_product" ADD CONSTRAINT "FK_9a199785f6743f1aadbe331c845" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_purchases_product" DROP CONSTRAINT "FK_9a199785f6743f1aadbe331c845"`);
        await queryRunner.query(`ALTER TABLE "users_purchases_product" DROP CONSTRAINT "FK_40d15c9cecac319607cb4342318"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9a199785f6743f1aadbe331c84"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_40d15c9cecac319607cb434231"`);
        await queryRunner.query(`DROP TABLE "users_purchases_product"`);
    }

}
