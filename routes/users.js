const express = require("express");
const db = require("../server");
const router = express.Router();

// Login
router.get("/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    var sql =
      'SELECT * FROM users WHERE name = "' +
      username +
      '" and password = "' +
      password +
      '"';

    db.query(sql, function (err, result, field) {
      if (!err && result.length > 0) {
        return res.send({
          userId: result[0].id,
          message: "Logged in successfully.",
        });
      } else {
        return res
          .status(404)
          .send({ message: "Invalid username or password." });
      }
    });
  }
});

//Get all Users
router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

//Add User
router.post("/", (req, res) => {
  try {
    let user = req.body;
    if (!user) {
      return res
        .status(400)
        .send({ error: true, message: "Please provide user" });
    }
    db.query(
      `INSERT INTO users (Name,Email,Password) VALUES ('${user.Name}','${user.Email}','${user.Password}')`
    );
    return res.send({ message: "New user has been created successfully." });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
