const express = require("express");
const {
  getAlerts,
  getAlertById,
  createAlert
} = require("../controllers/alerts.controller");

const router = express.Router();

router.get("/", getAlerts);
router.get("/:id", getAlertById);
router.post("/", createAlert);

module.exports = router;