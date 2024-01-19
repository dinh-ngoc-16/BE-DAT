const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./routes/User");

const PORT = 3500;
const app = express();

mongoose
  .connect(`mongodb+srv://admin:admin@db1.cl02taj.mongodb.net/DBEX1`)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());

app.use("/user", User);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
