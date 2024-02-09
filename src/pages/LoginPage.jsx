import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function LoginPage() {


   // ! - FUNÇÃO DE ENVIO DE FORMULARIO DE EXEMPLO DO TEMPLATE, USE ESSE OU CRIE O SEU
/*    function SignIn() {
      const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
         email: data.get('email'),
         password: data.get('password'),
      });
   }; */

   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <Box
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
         >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <Box component="form" /*TODO- ADICIONAR OnSubmit NOVAMENTE PARA ENVIAR*/ noValidate sx={{ mt: 1 }}>
            <TextField
               margin="normal"
               required
               fullWidth
               id="email"
               label="Email Address"
               name="email"
               autoComplete="email"
               autoFocus
            />
            <TextField
               margin="normal"
               required
               fullWidth
               name="password"
               label="Password"
               type="password"
               id="password"
               autoComplete="current-password"
            />
            <FormControlLabel
               control={<Checkbox value="remember" color="primary" />}
               label="Remember me"
            />
            <Button
               type="submit"
               fullWidth
               variant="contained"
               sx={{ mt: 3, mb: 2 }}
            >
               Sign In
            </Button>
            <Grid container>
               <Grid item xs>
                  <Link href="#" variant="body2">
                  Forgot password?
                  </Link>
               </Grid>
               <Grid item>
                  <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                  </Link>
               </Grid>
            </Grid>
            </Box>
         </Box>
      </Container>
   )
}
