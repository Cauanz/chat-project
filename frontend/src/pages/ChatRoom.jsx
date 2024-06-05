import MessageForm from "../components/MessageForm";

export default function ChatRoom({ sendMessage }) {
  //* - REPRESENTA UMA SALA DE CHAT INDIVIDUAL, VOCE ESTA EM UMA SALA COM MENSAGENS ETC...

  return (
    <>
      <div className="flex-1 bg-red-600">
        <div className="flex flex-col-reverse h-full">
          <div className="overflow-y-auto">
            {/* Renderizar mensagens aqui */}
          </div>
          <div className="mb-4">
            <MessageForm />
          </div>
        </div>
      </div>
    </>
  );
}
