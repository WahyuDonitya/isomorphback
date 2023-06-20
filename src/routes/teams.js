const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addTeams, getNeedApprove, approved, getTeamsById, getCountallApproval, getCountallNeedApproval, getCountallApproved, reject, getCountallRejected,  } = require("../controllers/teams");

const upload = multer()

router.post("/add", upload.none() ,addTeams)
router.get("/getneedApprove", getNeedApprove)
router.post("/approve/:id", upload.none() ,approved)
router.post("/reject/:id", upload.none() ,reject)
router.get("/get/:id",getTeamsById)
router.get("/getapproval", getCountallApproval)
router.get("/getneedapproval", getCountallNeedApproval)
router.get("/getapproved", getCountallApproved)
router.get("/getrejected", getCountallRejected)
module.exports = router
