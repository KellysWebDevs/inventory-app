const mongoose = require("mongoose");

// List all models here.
// Models are served in /start.js
const Item = require("./Item");
const User = require("./User");

const models = { Item, User };

module.exports = models;
