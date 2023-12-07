const express = require('express');

const galleryController = require("./home.js");
const galleryRouter = express.Router();

galleryRouter.use("/add", galleryController.add);
galleryRouter.use("/favorites", galleryController.favorites);
galleryRouter.use("/", galleryController.mainGallery);
galleryRouter.use("/AddToFavorites", galleryController.AddToFavorites);


module.exports = galleryRouter;