const express = require("express");
const itemRoutes = express.Router();
const itemController = require("../controllers/itemController");
const { catchErrors } = require("../handlers/errorHandlers");

itemRoutes.get("/", catchErrors(itemController.getItems));
itemRoutes.post("/add", itemController.addItem);
itemRoutes.post("/edit/:id", itemController.editItem);
itemRoutes.delete("/:id", itemController.deleteItem);

module.exports = itemRoutes;
