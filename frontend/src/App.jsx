import NavBar from './components/NavBar';
import ChatRoom from './pages/ChatRoom';
import ChatRoomList from './pages/ChatRoomList';
import { useState, useEffect } from "react";
import useChatStore from './store/Store';


//! FAZER PRIMEIRO FUNCIONAL COM HTML E CSS, PARA CONSEGUIR FAZER O BACK, DEPOIS FAZER ESTÉTICO COM AS UI LIBS
// * ESTAMOS USANDO MATERIAL UI

//TODO = REFINAR/ESCLARECER/SIMPLIFICAR A LÓGICA, A IDÉIA É: A ABA DE CHATS VAI RECEBER OS CHATS E RENDERIZAR ELES, A PARTE DO CHAT SELECIONADO SÓ VAI RECEBER AS MENSAGENS E RENDERIZAR ELAS, E CONECTAR AO SERVIÇO PARA ENVIAR OUTRA MENSAGEM (AKA: ADICIONAR OUTRA MENSAGEM A PILHA E A PILHA SER ATUALIZADA NO OUTRO USUARIO) TODO O RESTO É LÓGICA OU DETALHE, SELECIONAR O CHAT É SÓ UMA LÓGICA SIMPLES NO JS OU NO CSS


//* A LÓGICA CASO ESQUEÇA É: O FRONT É SÓ UM INTERMEDIARIO, ELE SÓ VAI COLETAR VALORES E MANDAR PARA O BACK POR MEIO DAS ROTAS, TODO RESTO DE CRIAR CHAT, ENTRAR EM CHAT, MANDAR MENSAGEM VAI SER PROCESSADO NO BACK

//! TALVEZ NÃO USAR ZUSTAND, NÃO ESTOU CONSEGUINDO RESOLVER O ERRO DE USAR HOOKS


function App() {
  const rooms = useChatStore((state) => state.rooms);
  const setRooms = useChatStore((state) => state.setRooms);
  const addRoom = useChatStore((state) => state.addRoom);

  // const { rooms, setRooms, addRoom } = useChatStore();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  //LÓGICA CHATROOMLIST

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
      const response = await axios.post('')
      addRoom(response.data);
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Erro ao criar a sala: ', error);
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
          <ChatRoomList onSubmit={handleCreate} setChatName={setName} setChatDescription={setDescription} name={name} description={description}/>
        </div>
        <div className="col-start-2 col-end-10 row-start-1 row-end-3 bg-gray-400">
          <ChatRoom />
        </div>
      </div>
    </>
  );
}

export default App;
