const express = require("express");
const router = express.Router();
const { queryKategori } = require("../controllers/kategori");
const verifyJWT = require("../middlewares/verifyJWT");

router.get("/", [verifyJWT], queryKategori);

module.exports = router;
