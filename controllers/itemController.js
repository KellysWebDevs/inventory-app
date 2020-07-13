const mongoose = require("mongoose");
const Item = mongoose.model("Item");

const validateAddInput = require("../validation/item/add");

exports.getItems = async (req, res) => {
  const items = await Item.find();

  res.json(items);
};

exports.addItem = (req, res) => {
  const isValid = validateAddInput(req.body);
  if (!isValid) {
    return res.status(400).json({ error: "hacker" });
  }

  const {
    item_name: name,
    item_amount: amount,
    item_category: category,
    item_barcodes: barcodes,
  } = req.body;

  Item.findOne({ name })
    .then((item) => {
      if (item) {
        return res.status(400).json({ error: "exists" });
      }

      const newItem = new Item({
        name,
        amount,
        category,
        barcodes,
      });

      newItem
        .save()
        .then((item) => {
          res.json(item);
        })
        .catch((err) => console.error(err));
      // res.json(newItem);
    })
    .catch((err) => console.error(err));
};

exports.editItem = (req, res) => {
  if (req.body.item_barcodes) {
    Item.findOneAndUpdate(
      { _id: req.body.id },
      {
        name: req.body.item_name,
        amount: req.body.item_amount,
        barcodes: req.body.item_barcodes,
      },
      { useFindAndModify: false }
    )
      .then(() => res.json("success"))
      .catch((err) => console.error(err));
  } else {
    Item.findOneAndUpdate(
      { _id: req.body.id },
      { name: req.body.item_name, amount: req.body.item_amount },
      { useFindAndModify: false }
    )
      .then(() => res.json("success"))
      .catch((err) => console.error(err));
  }
};

exports.deleteItem = (req, res) => {
  Item.deleteOne({ _id: req.params.id })
    .then(() => {
      res.json("success");
    })
    .catch((err) => console.error(err));
};
