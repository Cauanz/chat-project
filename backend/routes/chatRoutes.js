const router = require("express").Router();
const verifyToken = require("./verifyToken.js");

//* ROTAS CRIAÇÃO/GERENCIAMENTO DE CHATS/MENSAGENS ETC...

router.post("/create", verifyToken, async (req, res) => {
  const chatData = req.body;
  const userId = req.userId;

  res.json({ chatData, userId });
});

module.exports = router;

//! TODO- CHAT NÃO FUNCIONANDO PELO INSOMNIA, ERRO DE AUTENTICAÇÃO DE TOKEN
