const mongoose = require("mongoose");

const Chat = mongoose.model("Chat", {
  name: String,
  description: String,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Isso assume que você tem um modelo de usuário e quer referenciar um usuário específico como o criador do chat
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Isso permite que você referencie múltiplos usuários como participantes do chat
    },
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message", // Isso permite que você referencie múltiplos mensagens associadas a este chat
    },
  ],
});

module.exports = Chat;
