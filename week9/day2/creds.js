const Pool = require("pg").Pool;

const creds = new Pool({
  host: "localhost",
  port: 5432,
  database: "todolist",
  user: "postgres",
  password: process.env.PASSWORD,
});

module.exports = creds;
