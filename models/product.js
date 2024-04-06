const Sequelize  = require("sequelize");

const sequelize=require("../util/database.js")

const product= sequelize.define('product', {
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true

    },
    first_name: {
      type: Sequelize.STRING,
    
    },
    last_name: {
      type:Sequelize.STRING
    
    },
    age:{
        type:Sequelize.INTEGER,
    }
  },);

  module.exports=product