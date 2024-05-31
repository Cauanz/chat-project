const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//* ROTAS LOGIN/AUTENTICAÇÃO/USER RELATED

async function authenticateUser(email, password) {
  try {
    const user = await User.findOne({ email });
    if(!user) throw new Error("Usuário não encontrado");

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) throw new Error("Senha incorreta!");
    

    const token = jwt.sign({ userId: user._id }, JWT_SECRET)
    return token
  } catch (error) {
    throw new Error(error);
  }
}

//*REGISTER
router.post('/register', async (req, res) => {
  const {name, email, password} = req.body;

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword
    })

    user.save()
      .then(() => {
      console.log('Usuario criado com sucesso');
      res.status(201).send({ message: 'Usuario criado com sucesso' });
    })
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Erro ao criar usuario' });
  }
})

//*LOGIN
router.post("/login", async (req, res) => {
  
  const { email, password } = req.body;

  if (!email) {
    res.status(422).json({ error: "O email é obrigatório" });
    return;
  }

  if (!password) {
    res.status(422).json({ error: "A senha é obrigatória" });
    return;
  }

  try {
    const token = await authenticateUser(email, password);
    res.json({ token });
  } catch (err) {
    res.json({ error: err });
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
