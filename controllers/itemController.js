const mongoose = require("mongoose");
const Item = mongoose.model("Item");

exports.getItems = async (req, res) => {
  const items = await Item.find();

  console.log(items);
  return res.json(items);
};
