const mysql = require("mysql");

module.exports = mysql.createConnection({
  host: "pe-cargo.cuysdymkxedt.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "cargo-test",
  database: "pe-cargo",
});
