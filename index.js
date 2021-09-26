const express = require("express");
const userRoutes = require("./routes/users.js");
const shipmentRoutes = require("./routes/shipments.js");
const orderRoutes = require("./routes/orders.js");

const app = express();
const PORT = 5000;

app.use(express.json()); //For JSON requests
app.use(express.urlencoded({ extended: false }));
app.use("/users", userRoutes);
app.use("/shipments", shipmentRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
