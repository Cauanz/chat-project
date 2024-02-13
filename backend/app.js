const express = require('express');
const app = express();
const port =   3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(path.join(__dirname, 'public'), () => {
  console.log(`Server running at http://localhost:${port}`);
});

//TODO- Instalar o prettier e eslint no backend tambem
//TODO- Revisar esse codigo (foi copiado e colado) nao tenho garantias