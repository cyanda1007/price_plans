const { Client } = require("pg");

const config = {
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "276653",
  database: "phonebill",
};

const connection = new Client(config);

connection
  .connect()
  .catch((err) => console.log(err))
  .then((res) => {
    console.log("Connected");
  });

module.exports = connection