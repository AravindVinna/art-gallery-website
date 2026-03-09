const mongoose = require("mongoose");

// Create Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true   // adds createdAt & updatedAt automatically
});

// Export Model
module.exports = mongoose.model("User", userSchema);