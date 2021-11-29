import knex from 'knex';
import path from 'path';


const connections = knex({
  client: 'mysql',
  connection: {
       host : 'mysql03-farm36.kinghost.net',
    port : 3306,
    user : 'chocofy',
    password : '1q2w3e4r1234',
    database : 'chocofy'
  },
  useNullAsDefault: true
});

export default connections;
