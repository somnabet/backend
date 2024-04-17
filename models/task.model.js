const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    dueDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
      enum: ["completed", "pending"],
    },
  },
  { timestamps: true }
);

const taskModel = mongoose.model("Task", taskSchema);

module.exports = { taskModel };
