const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const port = 3000;
const userRoutes = require("./routes/userRoutes.js");

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/user", userRoutes);

const password = "j6xfMzb01gv4jZxw";
mongoose
  .connect(
    `mongodb+srv://cauanzelazo:${password}@cluster2.v6ux2jq.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectado ao DB");

    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
