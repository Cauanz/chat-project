const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const port =   3000;

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json());

const userRoutes = require("./routes/userRoutes.js")

app.use("/user", userRoutes)

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


