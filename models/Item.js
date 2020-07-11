const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  barcodes: {
    type: Array,
  },
});

mongoose.model("Item", itemSchema);
