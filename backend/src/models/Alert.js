const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema(
  {
    timestamp: {
      type: Date,
      required: true
    },
    tool: {
      type: String,
      required: true,
      enum: ["suricata", "zeek", "mock", "manual"]
    },
    eventType: {
      type: String,
      required: true
    },
    severity: {
      type: String,
      required: true,
      enum: ["low", "medium", "high", "critical"]
    },
    signature: {
      type: String,
      required: true,
      trim: true
    },
    srcIp: {
      type: String,
      required: true
    },
    srcPort: {
      type: Number,
      default: null
    },
    destIp: {
      type: String,
      required: true
    },
    destPort: {
      type: Number,
      default: null
    },
    protocol: {
      type: String,
      default: "TCP"
    },
    category: {
      type: String,
      required: true,
      enum: ["scan", "brute-force", "web-attack", "dns", "malware", "other"]
    },
    status: {
      type: String,
      required: true,
      enum: ["new", "investigating", "closed", "false-positive"],
      default: "new"
    },
    notes: {
      type: [String],
      default: []
    },
    rawLog: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Alert", alertSchema);