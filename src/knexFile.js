//Dar um 'cd src' antes de executar os comandos para as migrations

//remoto
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host : 'sql10.freesqldatabase.com',
      user : 'sql10394236',
      password : 'CundSBTZli',
      database : 'sql10394236'  
    },
    migrations: {
      tableName: 'migrations',
      directory: 'dataBase/migrations'
    }
  }
}


// //KAMILLE
// module.exports = {
//   development: {
//     client: 'mysql2',
//     connection: {
//       port: 3307,
//       host : 'localhost',
//       user : 'root',
//       password : 'tonoif2017',
//       database : 'crud'  
//     },
//     migrations: {
//       tableName: 'migration',
//       directory: 'dataBase/migration'
//     }
//   }
// }
