exports.up = knex => knex.schema.createTable('user', table => {
    table.string('id').primary();
    table.string('name', 90).notNullable();
    table.string('email', 90).unique().notNullable();
    table.string('password', 30).notNullable();
})

exports.down = knex => knex.schema.dropTable('user')