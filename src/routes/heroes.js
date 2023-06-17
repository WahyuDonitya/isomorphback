const express = require("express");
const router = express.Router();
const {getAll_heroes, delete_heroes} = require("../controllers/heroes")

router.get("/", getAll_heroes);
router.delete("/:id", delete_heroes);

module.exports = router;
