const socketIo = require('socket.io');
const mongoose = require("mongoose");
const express = require("express");
const http = require('http');
const cors = require("cors");
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;
app.use(cors());

//TODO - criar arquivo separado para operações de usuario e chat

//* As rotas não precisam estar conectadas as páginas no front, elas são acessadas por recursos nas páginas no front que mandam dados e recebem de volta

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
})

app.use(express.json());
require("dotenv").config();
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose.connect('mongodb+srv://cauanzelazo:dIsJALWHdKh31XyQ@cluster0.efug1zl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log("Ocorreu um erro:" + err));


async function authenticateUser(name, password) {
  try {
    const user = await User.findOne({ name });
    if(!user) throw new Error("Usuário não encontrado");

    const validPassword = await bcrypt.compare|(password, user.password);
    if(!validPassword) throw new Error("Senha incorreta!");
    

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    return token
  } catch (error) {
    throw new Error(error);
  }
}

function authenticateToken(req, res, next){
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if(!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if(err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}


app.post('/login', async (req, res) => {
  const {name, password} = req.body;

  try {
      const token = await authenticateUser(name, password);
      res.json({ token });
  } catch (error) {
      res.status(401).json({ message: error.message });
  }
})

app.post('/register', async (req, res) => {
  const {name, email, password} = req.body;

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword
    })

    user.save()

    console.log('Usuario criado com sucesso')
    res.status(201);
  } catch (error) {
    throw new Error("Ocorreu um erro ao criar o usuario", error)
  }
})

app.get('/', (req, res) => {
  res.send('Server is running')
})

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`)
  });

  socket.on('chatMessage', (data) => {
    io.to(data.room).emit('chatMessage', data.message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  })
})



server.listen(port, () => {
  console.log('Server running on port:', port);
})