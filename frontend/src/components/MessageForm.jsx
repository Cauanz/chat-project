
export default function MessageForm(handleMessageInput) {

   //TODO - FORMULARIO PARA MENSAGEM, COMO É UM CHAT O FORM É SÓ UM CAMPO DE TEXTO E TALVEZ UM BOTÃO PARA ENVIAR


  return (
    <>
      <form className="flex w-full justify-between">
        <label htmlFor="text" className="hidden"></label>
        <input
          type="text"
          name="text"
          id="text"
          className="flex-1 mr-2"
          onChange={handleMessageInput}
        />
        <button type="submit" className="self-end">
          Enviar
        </button>
      </form>
    </>
  );
}
