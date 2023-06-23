const express = require('express');

const app = express(); // Esta instancia.

const PORT = 3000;

// 
app.get('/ejemplo', (request, response) => {
  response.send('Hola mundo desde get')
});

app.get('/ejemplo', (request, response) => {
  response.send('Hola mundo desde get 2')
});

app.post('/ejemplo', (request, response) => {
  response.send('Hola mundo desde post')
});

app.put('/ejemplo', (request, response) => {
  response.send('Hola mundo desde put')
});

app.delete('/ejemplo', (request, response) => {
  response.send('Hola mundo desde delete')
});

// Esta es la sintaxis para subir/activar el servidor
// app.listen( Puerto_Donde_Escucha, Callback_opcional );

// La funcionalidad del callback es ejecutar ese código la primera vez que se levanta el servidor
app.listen(PORT, () => {
  console.log("La aplicación es está ejecutando en: https//localhost:" + PORT);
});