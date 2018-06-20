
exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', (tbl) => {
    tbl
      .integer('id')
      .primary();

    tbl
      .string('name', 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('category');
};