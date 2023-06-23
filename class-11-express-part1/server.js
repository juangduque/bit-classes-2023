// Este archivo es de ejemplo para la construcción de la api, pero la implementación oficial es el index.ts
const express = require('express');
const app = express(); // Esta es la creación de la instancia.
const PORT = 3000;

app.use(express.json()); //Esto es un middleware. En este caso es necesario para poder user el body que existe dentro de la petición http.

// El arreglo customers va a representar la base de datos.
const customers = [{
        name: "pepito",
        cc: "1234",
        email: "pepito@gmail.com",
        birthDate: "01/01/1990",
        cel: "3001234567",
        address: "cll falsa # 123"
    },
    {
        name: "fulanito",
        cc: "1234",
        email: "fulanito@gmail.com",
        birthDate: "01/01/1989",
        cel: "3001234568",
        address: "cll falsa # 124"
    }
];

app.get('/customers', function (request, response) {
    // response.send('Hola mundo desde get'); // La diferencia entre response.send y response.json es que el primero solo retorna cadenas de caracteres (strings) y el segundo json
    response.json(customers);
});

/*
    El método post utiliza el body del http porque la información que se va a guardar 
    viaja alli. Luego se opera con este. Para este ejemplo se hace push al arreglo 
    customers o su representación es que "se guarda información en la base de datos".
*/
app.post('/customers', function (request, response) {
    const body = request.body;
    customers.push(body);
    response.send('El cliente se ha guardado');
});

app.put('/customers', function (request, response) {
    response.send('Hola mundo desde put');
});

app.delete('/customers', function (request, response) {
    response.send('Hola mundo desde delete');
});

// Esta es la sintaxis para subir/activar el servidor
// app.listen( Puerto_Donde_Escucha, Callback_opcional );
// La funcionalidad del callback es ejecutar ese código la primera vez que se levanta el servidor
app.listen(PORT, function () {
    console.log("La aplicación es está ejecutando en: https//localhost:" + PORT);
});
