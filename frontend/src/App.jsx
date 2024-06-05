import NavBar from './components/NavBar';
import ChatRoom from './pages/ChatRoom';
import ChatRoomList from './pages/ChatRoomList';
import axios from 'axios';
import { useState, useEffect } from "react";
import io from 'socket.io-client';

//! FAZER PRIMEIRO FUNCIONAL COM HTML E CSS, PARA CONSEGUIR FAZER O BACK, DEPOIS FAZER ESTÉTICO COM AS UI LIBS
// * ESTAMOS USANDO MATERIAL UI

//TODO = REFINAR/ESCLARECER/SIMPLIFICAR A LÓGICA, A IDÉIA É: A ABA DE CHATS VAI RECEBER OS CHATS E RENDERIZAR ELES, A PARTE DO CHAT SELECIONADO SÓ VAI RECEBER AS MENSAGENS E RENDERIZAR ELAS, E CONECTAR AO SERVIÇO PARA ENVIAR OUTRA MENSAGEM (AKA: ADICIONAR OUTRA MENSAGEM A PILHA E A PILHA SER ATUALIZADA NO OUTRO USUARIO) TODO O RESTO É LÓGICA OU DETALHE, SELECIONAR O CHAT É SÓ UMA LÓGICA SIMPLES NO JS OU NO CSS


//* A LÓGICA CASO ESQUEÇA É: O FRONT É SÓ UM INTERMEDIARIO, ELE SÓ VAI COLETAR VALORES E MANDAR PARA O BACK POR MEIO DAS ROTAS, TODO RESTO DE CRIAR CHAT, ENTRAR EM CHAT, MANDAR MENSAGEM VAI SER PROCESSADO NO BACK

//! TALVEZ NÃO USAR ZUSTAND, NÃO ESTOU CONSEGUINDO RESOLVER O ERRO DE USAR HOOKS


function App() {
  const [rooms, setRooms] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [messages, setMessages] = useState([]);

  // SOCKET.IO
  const socket = io('http://localhost:3000')

  // SOCKET.IO

  //LÓGICA CHATROOMLIST

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/chat/rooms', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setRooms(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching rooms', error);
      }
    };

    fetchRooms();
  }, []);
  
  const handleCreate = async (e) => {
    e.preventDefault();

    const newChat = {
      name, 
      description,
      creator: {
        id: '',
        name: '',
      },
      participants: [],
      messages: [],
    };

    try {
      const response = await axios.post('http://localhost:3000/chat/create', newChat, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      setRooms((prevRooms) => [...prevRooms, response.data])
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Erro ao criar a sala: ', error);
    }
  };

  const fetchMessages = async (roomId) => {
    // console.log(roomId)
    try {
      const response = await axios.get(`http://localhost:3000/chat/${roomId}/messages`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages', error);
    }
  }


  const sendMessage = (messageText) => {
    socket.emit('new_message', { message: messageText, roomId: currentRoomId });
  }

  //LÓGICA CHATROOMLIST

  return (
    <>
      <div className="h-[64px] bg-gray-200">
        <NavBar />
      </div>
      <div className="h-[calc(100vh-64px)] grid grid-cols-12">
        <div className="col-start-1 col-end-3 row-start-1 row-end-3 bg-gray-300">
          <ChatRoomList 
            onSubmit={handleCreate} 
            setChatName={setName} 
            setChatDescription={setDescription} 
            name={name} 
            description={description} 
            rooms={rooms}
            onSelectRoom={fetchMessages}
            />
        </div>
        <div className="col-start-3 col-end-13 row-start-1 row-end-3 bg-gray-400">
          <ChatRoom sendMessage={sendMessage} />
        </div>
      </div>
    </>
  );
}

export default App;
