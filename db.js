
var mysql = require('mysql2');


   var connection =mysql.createConnection({
      host : 'localhost',
      port:'3306',
      user : 'putYourUser',
      password : 'putYourPass',
      database : 'bancodedados'
   });

   connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('DataBase connection ESTABLISHED')
})
module.exports=connection;
