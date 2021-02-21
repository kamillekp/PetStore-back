exports.up = knex => knex.schema.createTable('products', table => {
    table.string('id').primary();
    table.string('name', 90).notNullable();
    table.string('description', 450).notNullable();
    table.string('category', 50).notNullable();
    table.decimal('price').notNullable();
    table.boolean('highlight').notNullable();
    table.integer('discount');
    table.string('weight').notNullable();
    table.string('brand', 50).notNullable();
})

exports.down = knex => knex.schema.dropTable('products')