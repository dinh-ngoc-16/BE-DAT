const router = require("express").Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    console.log(req.query);

    let obj = {
      page: 0,
      size: 2,
    };

    // if (req.query.page && req.query.page > 0) {
    //   obj.page = req.query.page - 1;
    // }

    // if (req.query.size && req.query.size > 0) {
    //   obj.size = req.query.size;
    // }

    let record = User.find().limit(obj.size).skip(1);
    let count = User.find().count();
    const promises = [record, count];
    let data = await Promise.all(promises);
    const bodyRes = {
      data: data[0],
      count: data[1],
    };
    res.status(200).json(bodyRes);
  } catch (error) {
    res.status(500).json({ message: "Some thing wrong" });
  }
});

module.exports = router;
