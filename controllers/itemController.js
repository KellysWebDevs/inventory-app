const mongoose = require("mongoose");
const Item = mongoose.model("Item");

exports.getItems = async (req, res) => {
  const items = await Item.find();

  res.json(items);
};
