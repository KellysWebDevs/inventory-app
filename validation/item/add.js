const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = (data) => {
  let isValid = true;

  if (!data.item_name) {
    isValid = false;
  } else if (!data.item_amount && data.item_amount !== 0) {
    isValid = false;
  } else if (!data.item_category) {
    isValid = false;
  }

  return isValid;
};
