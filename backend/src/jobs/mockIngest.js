require("dotenv").config();

const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Alert = require("../models/Alert");

const ingestMockAlerts = async () => {
  try {
    await connectDB();

    const filePath = path.join(__dirname, "../data/mock-alerts.json");
    const rawData = fs.readFileSync(filePath, "utf-8");
    const alerts = JSON.parse(rawData);

    await Alert.deleteMany({});
    console.log("Existing alerts cleared");

    await Alert.insertMany(alerts);
    console.log(`${alerts.length} mock alerts inserted successfully`);

    await mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Mock ingest failed:", error.message);
    process.exit(1);
  }
};

ingestMockAlerts();