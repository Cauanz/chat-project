import NavBar from './components/NavBar';
import ChatRoom from './pages/ChatRoom';
import ChatRoomList from './pages/ChatRoomList';
import { Grid, Skeleton, Container } from '@mantine/core';

function App() {
  //TODO - AINDA NAO SEI OQUE VAI TER AQUI, TALVEZ O CHATROOMLIST E O NAVBAR? JA QUE O RESTO FICA UM DENTRO DO OUTRO E O LOGIN E REGISTER SÃO INDIVIDUAIS PARA AUTENTICAÇÃO E LIBERAÇÃO DA ENTRADA NO APP

  // * ESTAMOS USANDO MATERIAL UI
  return (
    <>
      <Container my="md">
        <Grid>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <NavBar />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 8 }}>
            <ChatRoomList />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 8 }}>
            <ChatRoom />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export default App;
