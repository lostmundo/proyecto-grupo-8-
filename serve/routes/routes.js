const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const diskstorage = multer.diskStorage({
  destination: path.join(__dirname, "../images"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "proyectSebas" + file.originalname);
  },
});

const fileUpload = multer({
  storage: diskstorage,
}).single("image");

router.get("/", (req, res) => {
  res.send("welcome to my imag app");
});

router.post("/images/post", fileUpload, async (req, res) => {
  const img = req.file;
  console.log(img.filename);
  res.json(img.filename);
});

module.exports = router;
