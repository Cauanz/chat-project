const router = require("express").Router();
const verifyToken = require("./verifyToken.js");

//* ROTAS CRIAÇÃO/GERENCIAMENTO DE CHATS/MENSAGENS ETC...

router.post("/create", verifyToken, async (req, res) => {
  const chatData = req.body;

  res.json({ chatData });
});

module.exports = router;
