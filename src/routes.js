const express = require("express");
const app = express();
const paths = require("./routesPath");
const bodyParser = require("body-parser");

const handleBars = require("express-handlebars");
const connect = require('./configuration')
const queries = require('./queries')
app.engine("handlebars", handleBars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get(paths.getPhoneBill, (req, res) => {
  res.render("index");
});

app.post(paths.postPhoneBill, async (req, res) => {

  try{
    console.log(queries.createPhoneBill(req.body.username))
    const c =connect.query(queries.createPhoneBill(req.body.username))
    res.send("ok");
  }catch(err){
    console.log(err)
    res.send("Not ok");
  }

});

module.exports = app;
