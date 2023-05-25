const express = require("express");
const router = express.Router();
const { getPhotos } = require("../routes-handler/images-handler");

router.get("/photos", getPhotos);

module.exports = router;
