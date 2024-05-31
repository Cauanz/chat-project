const socketIo = require('socket.io');
const mongoose = require("mongoose");
const express = require("express");
const http = require('http');
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();

const verifyToken = require('./routes/verifyToken');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');

const User = require('./models/User');

const port = 3000;
app.use(cors());

app.use(express.json());
require("dotenv").config();
app.use(
  express.urlencoded({
    extended: true,
  })
);

//TODO - criar arquivo separado para operações de usuario e chat

//* As rotas não precisam estar conectadas as páginas no front, elas são acessadas por recursos nas páginas no front que mandam dados e recebem de volta

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    methods: ['GET', 'POST']
  }
})


mongoose.connect('mongodb+srv://cauanzelazo:dIsJALWHdKh31XyQ@cluster0.efug1zl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log("Ocorreu um erro:" + err));

app.use(userRoutes);
app.use(chatRoutes);

app.get('/', (req, res) => {
  res.send('Server is running')
})


// io.on('connection', (socket) => {
//   console.log('a user connected');

//   socket.on('joinRoom', (room) => {
//     socket.join(room);
//     console.log(`User joined room: ${room}`)
//   });

//   socket.on('chatMessage', (data) => {
//     io.to(data.room).emit('chatMessage', data.message);
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   })
// })



server.listen(port, () => {
  console.log('Server running on port:', port);
})