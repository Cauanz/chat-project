const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: String,
  password: String,
  //TODO - Adicionar nome
});

module.exports = User;
