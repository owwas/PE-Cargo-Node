const express = require("express");
const db = require("../server");
const router = express.Router();

//Add Order
router.post("/", (req, res) => {
  try {
    let order = req.body;
    if (!order) {
      return res
        .status(400)
        .send({ error: true, message: "Please provide order details" });
    }
    var sql =
      'INSERT INTO orders (name,phoneNo,address,details,shipmentId) VALUES ("' +
      order.name +
      '","' +
      order.phoneNo +
      '","' +
      order.address +
      '","' +
      order.details +
      '","' +
      order.shipmentId +
      '")';

    db.query(sql);
    return res.send({ message: "Booked successfully." });
  } catch (error) {
    console.log(error);
  }
});

// Get all orders
router.get("/", (req, res) => {
  db.query("SELECT * FROM orders", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

// Get all orders by Shipment Id
router.get("/:shipmentId", (req, res) => {
  db.query(
    "SELECT * FROM orders WHERE shipmentId = '" + req.params.id + "'",
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

module.exports = router;
