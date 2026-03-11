const Alert = require("../models/Alert");

// GET /api/alerts
const getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ timestamp: -1 });
    res.status(200).json(alerts);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch alerts",
      error: error.message
    });
  }
};

// GET /api/alerts/:id
const getAlertById = async (req, res) => {
  try {
    const alert = await Alert.findById(req.params.id);

    if (!alert) {
      return res.status(404).json({ message: "Alert not found" });
    }

    res.status(200).json(alert);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch alert",
      error: error.message
    });
  }
};

// POST /api/alerts
const createAlert = async (req, res) => {
  try {
    const alert = await Alert.create(req.body);
    res.status(201).json(alert);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create alert",
      error: error.message
    });
  }
};

module.exports = {
  getAlerts,
  getAlertById,
  createAlert
};