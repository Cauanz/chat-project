const socketIo = require('socket.io');
const mongoose = require("mongoose");
const express = require("express");
const http = require('http')
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
require("dotenv").config();

const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');

const port = 3000;
app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


//* NÃO PRECISA COLOCAR O SOCKET.IO NO ARQUIVO COM AS ROTAS

mongoose.connect('mongodb+srv://cauanzelazo:dIsJALWHdKh31XyQ@cluster0.efug1zl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log("Ocorreu um erro:" + err));

app.use('/user', userRoutes);
app.use('/chat', chatRoutes);

app.get('/', (req, res) => {
  res.send('Server is running')
})

server.listen(port, () => {
  console.log('Server running on port:', port);
})

io.on('connection', (socket) => {
  console.log('Novo usuário conectado:', socket.id);

  socket.on('new_message', (data) => {
    console.log(data);
    // Aqui você pode adicionar a lógica para lidar com novas mensagens
    socket.broadcast.emit('receive_message', data.message);
  });
});