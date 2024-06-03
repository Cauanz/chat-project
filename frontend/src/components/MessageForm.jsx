
export default function MessageForm(handleMessageInput) {

   //TODO - FORMULARIO PARA MENSAGEM, COMO É UM CHAT O FORM É SÓ UM CAMPO DE TEXTO E TALVEZ UM BOTÃO PARA ENVIAR




  return (
    <>
      <form action="">
        <input type="text" name="text" id="text" onChange={handleMessageInput} />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}
