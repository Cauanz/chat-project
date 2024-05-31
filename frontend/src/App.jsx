import NavBar from './components/NavBar';
import ChatRoom from './pages/ChatRoom';
import ChatRoomList from './pages/ChatRoomList';
import { useState, useEffect } from "react";


//! FAZER PRIMEIRO FUNCIONAL COM HTML E CSS, PARA CONSEGUIR FAZER O BACK, DEPOIS FAZER ESTÉTICO COM AS UI LIBS
// * ESTAMOS USANDO MATERIAL UI

//TODO = REFINAR/ESCLARECER/SIMPLIFICAR A LÓGICA, A IDÉIA É: A ABA DE CHATS VAI RECEBER OS CHATS E RENDERIZAR ELES, A PARTE DO CHAT SELECIONADO SÓ VAI RECEBER AS MENSAGENS E RENDERIZAR ELAS, E CONECTAR AO SERVIÇO PARA ENVIAR OUTRA MENSAGEM (AKA: ADICIONAR OUTRA MENSAGEM A PILHA E A PILHA SER ATUALIZADA NO OUTRO USUARIO) TODO O RESTO É LÓGICA OU DETALHE, SELECIONAR O CHAT É SÓ UMA LÓGICA SIMPLES NO JS OU NO CSS


function App() {

  //LÓGICA CHATROOMLIST


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [chat, setChat] = useState({
    name: '',
    description: '',
    creator: {
      id: '',
      name: ''
    },
    participants: [],
    messages: [],
  });
  
  
  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      setChat({
        name: name,
        description: description,
        creator: {
          id: '',
          name: ''
        },
        participants: [],
        messages: [],
      });
      // setRooms((prevRooms) => [...prevRooms, response.data]);
      // const response = await axios.post('/rooms', chat);
    } catch (error) {
      console.error('Error creating room', error);
    }
  };


  //LÓGICA CHATROOMLIST

  return (
    <>
      <div className="h-[64px] bg-gray-200">
        <NavBar />
      </div>
      <div className="grid grid-cols-9 grid-rows-2 h-[calc(100vh-64px)]">
        <div className="col-start-1 col-end-2 row-start-1 row-end-3 bg-gray-300">
          <ChatRoomList onSubmit={handleCreate} setChatName={setName} setChatDescription={setDescription}/>
        </div>
        <div className="col-start-2 col-end-10 row-start-1 row-end-3 bg-gray-400">
          <ChatRoom />
        </div>
      </div>
    </>
  );
}

export default App;
