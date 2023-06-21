const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addTeams, getNeedApprove, approved, getTeamsById, getCountallApproval, reject, getCountallApprovalLogin, getLogin,  } = require("../controllers/teams");

const upload = multer()

router.post("/add", upload.none() ,addTeams)
router.get("/getneedApprove", getNeedApprove)
router.post("/approve/:id", upload.none() ,approved)
router.post("/reject/:id", upload.none() ,reject)
router.get("/get/:id",getTeamsById)
router.get("/getReport", getCountallApproval)
router.get("/getReportLogin/:name", getLogin)
module.exports = router
