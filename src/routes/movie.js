const express = require("express");
const router = express.Router();
const {
    queryMovie,
    getSingleMovie,
    postMovie,
    putMovie,
    deleteMovie,
} = require("../controllers/movie");
const verifyJWT = require("../middlewares/verifyJWT");

router.get("/", [verifyJWT], queryMovie);
router.get("/:id", [verifyJWT], getSingleMovie);
router.post("/", [verifyJWT], postMovie);
router.put("/:id", [verifyJWT], putMovie);
router.delete("/:id", [verifyJWT], deleteMovie);

module.exports = router;
