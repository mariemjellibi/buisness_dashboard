const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    status: { 
      type: String, 
      enum: ['active', 'inactive'], 
      default: 'active' 
    }
  });
  
  module.exports = mongoose.model('User', userSchema);