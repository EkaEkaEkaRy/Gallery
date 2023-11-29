const express = require("express");
const homeController = require("./home.js");
const homeRouter = express.Router();

homeRouter.use("/login", homeController.login);
homeRouter.use("/registration", homeController.registretion);
homeRouter.use("/", homeController.StartFile);
homeRouter.use("/getUser", homeController.getUser);


module.exports = homeRouter;