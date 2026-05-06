import { MigrationInterface, QueryRunner } from "typeorm";

export class initSeed1618048358536 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "order" ("amount", "customer", "status") VALUES ('156.34', 'John', 'pending')`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "order"`);
  }
}
