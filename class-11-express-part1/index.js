var express = require('express');
var app = express(); // Esta instancia.
var PORT = 3000;
app.get('/ejemplo', function (request, response) {
    response.send('Hola mundo desde get');
});
app.post('/ejemplo', function (request, response) {
    response.send('Hola mundo desde post');
});
app.put('/ejemplo', function (request, response) {
    response.send('Hola mundo desde put');
});
app.delete('/ejemplo', function (request, response) {
    response.send('Hola mundo desde delete');
});
// Esta es la sintaxis para subir/activar el servidor
// app.listen( Puerto_Donde_Escucha, Callback_opcional );
// La funcionalidad del callback es ejecutar ese código la primera vez que se levanta el servidor
app.listen(PORT, function () {
    console.log("La aplicación es está ejecutando en: https//localhost:" + PORT);
});
