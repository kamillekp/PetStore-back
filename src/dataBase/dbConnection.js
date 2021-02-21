const knexFile = require('../knexFile');
const knex = require('knex')(knexFile.development);

console.log(knex.client.connectionSettings)

module.exports = knex;
