const router = require("express").Router();
const verifyToken = require("./verifyToken.js");
const Chat = require("../models/Chat.js");

//* ROTAS CRIAÇÃO/GERENCIAMENTO DE CHATS/MENSAGENS ETC...

router.post("/create", verifyToken, async (req, res) => {
  const chatData = req.body;
  const userId = req.userId;

  chatData.creator = { id: userId };

  try {
    const newChat = new Chat(chatData);
    await newChat.save();

    res
      .status(201)
      .json({ message: "Chat criado com sucesso!", chatId: newChat._id });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao criar o chat.", error: error.toString() });
  }
});

module.exports = router;
