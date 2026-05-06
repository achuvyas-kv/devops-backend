import { MigrationInterface, QueryRunner } from "typeorm";

export class moreOrdersSeed1618462845736 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "order" ("amount", "customer", "status") VALUES ('15.54', 'James', 'completed')`
    );
    await queryRunner.query(
      `INSERT INTO "order" ("amount", "customer", "status") VALUES ('105.54', 'Janet', 'completed')`
    );
    await queryRunner.query(
      `INSERT INTO "order" ("amount", "customer", "status") VALUES ('5.54', 'Melina', 'confirmed')`
    );
    await queryRunner.query(
      `INSERT INTO "order" ("amount", "customer", "status") VALUES ('15.00', 'Yoko', 'cancelled')`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "order"`);
  }
}
