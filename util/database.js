const Sequelize  = require("sequelize");

const sequelize = new Sequelize('myDB', 'postgres', 'Shaik@5f3', {
    dialect:  'postgres',
    host: 'localhost'
  });

  module.exports=sequelize