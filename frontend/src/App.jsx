import NavBar from './components/NavBar';
import ChatRoom from './pages/ChatRoom';
import ChatRoomList from './pages/ChatRoomList';

function App() {
  //TODO - AINDA NAO SEI OQUE VAI TER AQUI, TALVEZ O CHATROOMLIST E O NAVBAR? JA QUE O RESTO FICA UM DENTRO DO OUTRO E O LOGIN E REGISTER SÃO INDIVIDUAIS PARA AUTENTICAÇÃO E LIBERAÇÃO DA ENTRADA NO APP

  //! FAZER PRIMEIRO FUNCIONAL COM HTML E CSS, PARA CONSEGUIR FAZER O BACK, DEPOIS FAZER ESTÉTICO COM AS UI LIBS

  // * ESTAMOS USANDO MATERIAL UI
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
