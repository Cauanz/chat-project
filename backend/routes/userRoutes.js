const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//* MUDAR ISSO DE LUGAR

//TODO CRIAR ROTAS PARA CRIAR CHATROOM, E MANDAR MENSAGENS, USAR SOCKET.IO

//* ROTAS LOGIN/AUTENTICAÇÃO/USER RELATED

//*REGISTER
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    res.status(422).json({ error: "O nome é obrigatório" });
    return;
  }

  if (!password) {
    res.status(422).json({ error: "A senha é obrigatória" });
    return;
  }

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = {
    email,
    password: passwordHash,
  };

  try {
    const newUser = await User.create(user);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//*LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // mesmo que digitar:
  // const usuario = req.body.usuario;
  // const senha = req.body.senha;

  if (!email) {
    res.status(422).json({ error: "O email é obrigatório" });
    return;
  }

  if (!password) {
    res.status(422).json({ error: "A senha é obrigatória" });
    return;
  }

  try {
    const user = await User.findOne({ email: email }); //TODO- MUDAR ISSO PARA USERNAME, PARA SEGURANÇA

    if (!user) {
      res.status(422).json({ error: "O usuario nao foi encontrado!" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(400).json({ error: "Senha incorreta!" });
      return;
    }

    const token = jwt.sign({ userId: user._id }, process.env.REACT_APP_SECRET, {
      expiresIn: "1 hour",
    });
    res.json({ token });
  } catch (err) {
    res.json({ error: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const people = await User.find();

    res.status(200).json(people);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const person = await User.findOne({ _id: id });

    if (!person) {
      res.status(422).json({ error: "O usuario nao foi encontrado!" });
      return;
    }

    res.status(200).json(person);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { name, password } = req.body;

  const user = {
    name,
    password,
  };

  try {
    const updatedUser = await User.updateOne({ _id: id }, user);

    if (updatedUser.matchedCount === 0) {
      res.status(422).json({ error: "O usuario nao foi encontrado!" });
      return;
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ _id: id });

  if (!user) {
    res.status(422).json({ error: "O usuario nao foi encontrado!" });
    return;
  }

  try {
    await User.deleteOne({ _id: id });

    res.status(200).json({ message: "Usuario removido com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
