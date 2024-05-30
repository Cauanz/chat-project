// import NavBar from './components/NavBar';
// import ChatRoom from './pages/ChatRoom';
// import ChatRoomList from './pages/ChatRoomList';
import { useState, useEffect } from "react";
import io from 'socket.io-client';
import { useFormStore } from "./store/FormStore";

//! FAZER PRIMEIRO FUNCIONAL COM HTML E CSS, PARA CONSEGUIR FAZER O BACK, DEPOIS FAZER ESTÉTICO COM AS UI LIBS

// * ESTAMOS USANDO MATERIAL UI


//TODO = REFINAR/ESCLARECER/SIMPLIFICAR A LÓGICA, A IDÉIA É: A ABA DE CHATS VAI RECEBER OS CHATS E RENDERIZAR ELES, A PARTE DO CHAT SELECIONADO SÓ VAI RECEBER AS MENSAGENS E RENDERIZAR ELAS, E CONECTAR AO SERVIÇO PARA ENVIAR OUTRA MENSAGEM (AKA: ADICIONAR OUTRA MENSAGEM A PILHA E A PILHA SER ATUALIZADA NO OUTRO USUARIO) TODO O RESTO É LÓGICA OU DETALHE, SELECIONAR O CHAT É SÓ UMA LÓGICA SIMPLES NO JS OU NO CSS

const socket = io('http://localhost:3000')

function App() {

  const [message, setMessage] = useState('');
  const { room, messages, setRoom, addMessage, clearMessages } = useFormStore();

  useEffect(() => {
    socket.on('chatMessage', (msg) => {
      addMessage(msg);
    })

    return () => {
      socket.disconnect();
    };
  }, [addMessage]);

  const joinRoom = () => {
    if(room !== ''){
      clearMessages();
      socket.emit('joinRoom', room);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if(message !== ''){
      socket.emit('chatMessage', { room, message });
      setMessage('');
    }
  }

  return (
    <>
      <div className="h-[64px] bg-gray-200">
        <NavBar />
      </div>
      <div className="grid grid-cols-9 grid-rows-2 h-[calc(100vh-64px)]">
        <div className="col-start-1 col-end-2 row-start-1 row-end-3 bg-gray-300">
          <ChatRoomList />
        </div>
        <div className="col-start-2 col-end-10 row-start-1 row-end-3 bg-gray-400">
          <ChatRoom />
        </div>
      </div>
    </>
  );
}

export default App;
