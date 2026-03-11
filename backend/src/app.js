require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const alertsRoutes = require("./routes/alerts.routes");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health route
app.get("/", (req, res) => {
  res.json({
    message: "Cloud SOC Lab API is running"
  });
});

// API routes
app.use("/api/alerts", alertsRoutes);

// Fallback route
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});