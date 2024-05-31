const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: String,
  creator: {
    id: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    name: String
  },
  participants: [{
    id: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    },
    name: String
  }],
  messages: [{
    sender: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    },
    message: String,
    timestamp: { 
      type: Date, 
      default: Date.now 
    }
  }]
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
