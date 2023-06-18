const express = require("express");
const router = express.Router();
const {getAll_heroes, delete_heroes, getNamaHero} = require("../controllers/heroes")

router.get("/", getAll_heroes);
router.delete("/:id", delete_heroes);
router.get("/namahero", getNamaHero);

module.exports = router;
