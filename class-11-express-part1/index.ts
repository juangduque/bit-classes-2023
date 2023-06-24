// const express = require('express'); // Esto es un enfoque viejo para importar módulos de js.
import express from 'express';

const app = express(); // Esta es la creación de la instancia.
const PORT = 3000;

app.use(express.json()); //Esto es un middleware. En este caso es necesario para poder user el body que existe dentro de la petición http.

interface Customer {
    id: string;
    name: string;
    cc: string;
    email: string;
    birthDate: string;
    cel: string;
    address: string;
}

// El arreglo customers va a representar la base de datos.
let customersDB: Customer[] = [
    {
        id: "1",
        name: "pepito",
        cc: "1234",
        email: "pepito@gmail.com",
        birthDate: "01/01/1990",
        cel: "3001234567",
        address: "cll falsa # 123"
    },
    {
        id: "2",
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
    response.json(customersDB);
});

app.get('/customers/:id', function (request, response) {
    const id = request.params.id;
    const result = customersDB.filter(item => item.id === id);
    response.json(result);
});

/*
    El método post utiliza el body del http porque la información que se va a guardar 
    viaja alli. Luego se opera con este. Para este ejemplo se hace push al arreglo 
    customers o su representación es que "se guarda información en la base de datos".
*/
app.post('/customers', function (request, response) {
    const body = request.body;
    customersDB.push(body);
    response.send('El cliente se ha guardado');
});

app.put('/customers/:id', function (request, response) {
    // El id y el body para la operación put son requeridas
    const id = request.params.id;
    const body = request.body;
    const customerIndex = customersDB.findIndex(item => item.id === id);
    console.log("customerIndex", customerIndex);
    customersDB[customerIndex] = body;
    response.send('Cliente actualizado correctamente');
});

app.delete('/customers/:id', function (request, response) {
    const id = request.params.id;
    const result = customersDB.filter(item => item.id !== id);
    customersDB = result;
    response.json("Cliente eliminado correctamente");
});

// Esta es la sintaxis para subir/activar el servidor
// app.listen( Puerto_Donde_Escucha, Callback_opcional );
// La funcionalidad del callback es ejecutar ese código la primera vez que se levanta el servidor
app.listen(PORT, function () {
    console.log("La aplicación es está ejecutando en: https//localhost:" + PORT);
});
