require('dotenv').config();

const environments = {
    development : {
      mysql: {
          username : process.env.localusername,
          password : process.env.localpassword,
          database : process.env.localdb,
          host : process.env.localhost,
          port : process.env.localport
        }
    },


    production: {
      mysql: {
        // username : process.env.dbusername,
        // password : process.env.dbpassword,
        // database : process.env.database,
        // host : process.env.dbhost,
        // port : process.env.port
        username : 'root',
        password : 'skcc',
        database : '2016',
        host : '172.17.240.3',
        port : '3006'
      }
    }
}


const nodeEnv = process.env.node_env || 'production';

module.exports = environments[nodeEnv];
