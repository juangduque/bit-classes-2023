// Importing the express module
const express = require('express');

//Instance of express
const app = express();

//Building our first API
app.get('/', function(request, response){
  response.send("hello world");
});

// Running the server // app.listen recibe dos parametros: 1 el puerto donde va a escuchar y el segundo es un callback que en este caso es para dar una información por console.
app.listen(3000, () => { // Aqui se levanta el servidor. lo que quiere decir que un servidor es un mecanismo de software que se mantiene a la espera de que ocurra un evento. En este caso bajo el contexto de express el evento sería un llamado http.
  // eslint-disable-next-line no-console
  console.log("The application is running at: 127.0.0.1:3000");
})
