import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function ChatRoomList() {
  //TODO- LISTA DE CHATS QUE VAI FICAR NA ESQUERDA COM TODOS OS CHATS CRIADOS OU DISPONIVEIS PARA ENTRAR OU SOMENTE OS QUE VOCE JA ESTA

  //TODO- Adicionar form pop-up para criação de novo chat, pergunta nome etc... disabilitar funcionalidade de clicar fora do pop-up e desaparecer
  return (
    <>
      <CssBaseline />
      <Container maxWidth="false" sx={{ position: 'fixed', left: 0, width: '300px' }} disableGutters>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </>
  );
}
