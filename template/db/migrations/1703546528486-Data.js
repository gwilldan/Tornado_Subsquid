module.exports = class Data1703546528486 {
    name = 'Data1703546528486'

    async up(db) {
        await db.query(`CREATE TABLE "deposit" ("id" character varying NOT NULL, "from" bytea NOT NULL, "value" numeric NOT NULL, "commitment" bytea NOT NULL, "leaf_index" numeric NOT NULL, "timestamp" numeric NOT NULL, "block_number" numeric NOT NULL, "block_timestamp" numeric NOT NULL, "transaction_hash" bytea NOT NULL, CONSTRAINT "PK_6654b4be449dadfd9d03a324b61" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "withdrawal" ("id" character varying NOT NULL, "to" bytea NOT NULL, "nullifier_hash" bytea NOT NULL, "relayer" bytea NOT NULL, "fee" numeric NOT NULL, "block_number" numeric NOT NULL, "block_timestamp" numeric NOT NULL, "transaction_hash" bytea NOT NULL, CONSTRAINT "PK_840e247aaad3fbd4e18129122a2" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "deposit"`)
        await db.query(`DROP TABLE "withdrawal"`)
    }
}
