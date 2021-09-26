const express = require("express");
const db = require("../server");
const router = express.Router();

//Add Shipment
router.post("/", (req, res) => {
  try {
    let shipment = req.body;
    if (!shipment) {
      return res
        .status(400)
        .send({ error: true, message: "Please provide shipment date" });
    }
    var sql = 'INSERT INTO shipment (date) VALUES ("' + shipment.Date + '")';

    db.query(sql);
    return res.send({ message: "Shipment added successfully." });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
