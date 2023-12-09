const express = require('express');

const galleryController = require("./home.js");
const galleryRouter = express.Router();

galleryRouter.use("/add", galleryController.add);
galleryRouter.use("/favorites", galleryController.favorites);
galleryRouter.use("/AddToFavorites", galleryController.AddToFavorites);
galleryRouter.use("/addpicture", galleryController.addpicture);
galleryRouter.use("/", galleryController.mainGallery);

module.exports = galleryRouter;