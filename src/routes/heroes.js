const express = require("express");
const router = express.Router();
const {getAll_heroes, delete_heroes, getNamaHero, addHero} = require("../controllers/heroes")

router.get("/", getAll_heroes);
router.delete("/:id", delete_heroes);
router.get("/namahero", getNamaHero);
router.post("/hero", addHero);

module.exports = router;
