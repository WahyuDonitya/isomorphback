const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addTeams, getNeedApprove, approved, getTeamsById } = require("../controllers/teams");

const upload = multer()

router.post("/add", upload.none() ,addTeams)
router.get("/getneedApprove", getNeedApprove)
router.post("/approve/:id", upload.none() ,approved)
router.get("/get/:id",getTeamsById)
module.exports = router
