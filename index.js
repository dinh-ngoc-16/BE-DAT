const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./routes/User");

dotenv.config();
const PORT = process.env.PORT || 3500;
const app = express();

mongoose
  .connect(`${process.env.MONGO_URL}`)
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
