const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const port =   3000;

const User = require("./models/User.js")

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json());


app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

const password = "j6xfMzb01gv4jZxw";

mongoose.connect(`mongodb+srv://cauanzelazo:${password}@cluster2.v6ux2jq.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
  console.log("Conectado ao DB")
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
}
)
.catch(err => console.log(err))


app.post("/newUser", async (req, res) => {

  const {name, password} = req.body;

  if(!name){
    res.status(422).json({ error: "O nome é obrigatório"})
  }

  const user = {
    name,
    password
  }

  try{
    const newUser = await User.create(user);

    res.status(201).json(newUser);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

})