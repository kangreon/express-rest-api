/**
 * @param knex{Knex}
 * @return {Promise<void>}
 */
exports.up = async knex => {
  await knex.schema.createTable('', table => {
    table.increments().primary();
  });
};

/**
 * @param knex{Knex}
 * @return {Promise<void>}
 */
exports.down = async knex => {
  knex.schema.dropTableIfExists('');
};
