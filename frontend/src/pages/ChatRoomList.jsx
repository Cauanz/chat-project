export default function ChatRoomList() {
  //TODO- LISTA DE CHATS QUE VAI FICAR NA ESQUERDA COM TODOS OS CHATS CRIADOS OU DISPONIVEIS PARA ENTRAR OU SOMENTE OS QUE VOCE JA ESTA

  //TODO- Adicionar form pop-up para criação de novo chat, pergunta nome etc... disabilitar funcionalidade de clicar fora do pop-up e desaparecer

  const chatRooms = [
    'Chat Room 1',
    'Chat Room 2',
    'Chat Room 3',
    'Chat Room 4',
    'Chat Room 5',
    'Chat Room 6',
    'Chat Room 7',
    'Chat Room 8',
    'Chat Room 9',
    'Chat Room 10',
    'Chat Room 1',
    'Chat Room 2',
    'Chat Room 3',
    'Chat Room 4',
    'Chat Room 5',
    'Chat Room 6',
    'Chat Room 7',
    'Chat Room 8',
    'Chat Room 9',
    'Chat Room 10',
  ]; //! EXEMPLO PARA DEBUG

  return (
    <>
      <div className="flex h-full w-full">
        <div className="grid grid-cols-1 gap-4 overflow-y-auto w-full">
          {/* Replace this with your chat room cards */}
          {chatRooms.map((chatRoom, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-md">
              {chatRoom}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
