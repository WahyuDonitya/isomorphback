const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addTeams } = require("../controllers/teams");

const upload = multer()

router.post("/add", upload.none() ,addTeams)
module.exports = router
