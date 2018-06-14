
exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', (tbl) => {
    tbl
      .increments('id')
      .primary();

    tbl
      .string('name', 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('category');
};
