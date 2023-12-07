const express = require("express");
const homeController = require("./home.js");
const homeRouter = express.Router();

homeRouter.use("/login", homeController.login);
homeRouter.use("/registration", homeController.registretion);
homeRouter.use("/getuser", homeController.getuser);
homeRouter.use("/adduser", homeController.adduser);
homeRouter.use("/", homeController.StartFile);



module.exports = homeRouter;