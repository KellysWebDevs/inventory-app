const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = (data) => {
  let isValid = true;

  if (!data.item_name) {
    isValid = false;
  } else if (!data.item_amount) {
    isValid = false;
  } else if (!data.item_category) {
    isValid = false;
  }

  return isValid;
};
