const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/menu-items', (req, res)=>{
   res.send([
      { nome: 'o kejfhwejhfwefwe e giro' },
      { nome: 'o ricardao e demais' },
      { nome: 'comia' },
      { nome: 'todo' },
   ]);
});

app.listen(9000, ()=> {
   console.log('escuta');
});