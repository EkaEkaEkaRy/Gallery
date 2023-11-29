const express = require('express');

const galleryController = require("./gallery.js");
const galleryRouter = express.Router();

galleryRouter.use("/", galleryController.mainGallery);
galleryRouter.use("/add", galleryController.add);
galleryRouter.use("/favorites", galleryController.favorites);


module.exports = galleryRouter;