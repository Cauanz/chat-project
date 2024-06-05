const router = require("express").Router();
const verifyToken = require("./verifyToken.js");
const Chat = require("../models/Chat.js");

//* ROTAS CRIAÇÃO/GERENCIAMENTO DE CHATS/MENSAGENS ETC... 

router.post("/create", verifyToken, async (req, res) => {
  const chatData = req.body;
  const userId = req.user.userId;

  chatData.creator = { id: userId };
  // console.log(userId)
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


router.get('/rooms', verifyToken, async (req, res) => {
  const userId = req.user.userId;

  try {
    const rooms = await Chat.find();
    res.json(rooms);
  } catch (error) {
    console.error('Error fetching rooms', error);
    res.status(500).json({ message: 'Error fetching rooms' });
  }
})

router.get('/:roomId/messages', verifyToken, async (req, res) => {
  const roomId = req.params.roomId;

  try {
    const messages = await Chat.findById(roomId);
    res.json(messages);
  } catch (error) {
    console.error(`Error fetching messages for room: ${roomId}`, error);
    res.status(500).json({ message: 'Error fetching messages' });
  }
})

module.exports = router;
