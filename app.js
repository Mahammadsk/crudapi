// app.js

const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const Product = require("./models/product");
const User=require("./models/user")

const adminRoutes = require("./routes/admin");

const app = express();
app.use(bodyParser.json());


app.use('/admin', adminRoutes);



sequelize.sync()
  .then(result => {
    console.log("Tables synced successfully");
    app.listen(3000, () => {
      console.log("Server connected successfully");
    });
  })
  .catch(err => {
    console.log("Error syncing tables:", err);
  });
