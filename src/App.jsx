import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavBar from './components/NavBar';
import ChatRoom from './pages/ChatRoom';
import ChatRoomList from './pages/ChatRoomList';

function App() {
  //TODO - AINDA NAO SEI OQUE VAI TER AQUI, TALVEZ O CHATROOMLIST E O NAVBAR? JA QUE O RESTO FICA UM DENTRO DO OUTRO E O LOGIN E REGISTER SÃO INDIVIDUAIS PARA AUTENTICAÇÃO E LIBERAÇÃO DA ENTRADA NO APP

  // * ESTAMOS USANDO MATERIAL UI
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={100}>
            <NavBar />
          </Grid>
          <Grid item xs={1}>
            <ChatRoomList />
          </Grid>
          <Grid item xs={9}>
            <ChatRoom />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
