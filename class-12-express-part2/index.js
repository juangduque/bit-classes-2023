"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express'); // Esto es un enfoque viejo para importar módulos de js.
const express_1 = __importDefault(require("express")); // Esta es la forma de importar módulos de js en typescript. Es una buena práctica que el nombre de la constante sea igual al nombre del módulo que se está importando.
const app = (0, express_1.default)(); // Esta es la creación de la instancia.
const PORT = 3000; // Se declara una variable para el puerto. Es una buena práctica que sea una constante.
app.use(express_1.default.json()); //Esto es un middleware. En este caso es necesario para poder user el body que existe dentro de la petición http.
// El arreglo customers va a representar la base de datos.
let customersDB = [
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
    response.json(customersDB); // Se retorna el arreglo customersDB
});
app.get('/customers/:id', function (request, response) {
    const id = request.params.id; // Esta es la forma de obtener el parámetro id que viene en la url
    const result = customersDB.filter(item => item.id === id); // Esta es la forma de filtrar un arreglo. En este caso se filtra por el id. Aquel item que cumpla con la condición se va a quedar en el arreglo result.
    response.json(result); // Se retorna el resultado de la operación anterior.
});
/*
    El método post utiliza el body del http porque la información que se va a guardar
    viaja alli. Luego se opera con este. Para este ejemplo se hace push al arreglo
    customers o su representación es que "se guarda información en la base de datos".
*/
app.post('/customers', function (request, response) {
    const body = request.body; // Esta es la forma de obtener el body de la petición http
    customersDB.push(body); // Se hace push al arreglo customersDB
    response.send('El cliente se ha guardado'); // Se retorna un mensaje
});
// El método put es similar al post, pero en este caso se actualiza la información.
app.put('/customers/:id', function (request, response) {
    // El id y el body para la operación put son requeridas
    const id = request.params.id; // Esta es la forma de obtener el parámetro id que viene en la url
    const body = request.body; // Esta es la forma de obtener el body de la petición http
    const customerIndex = customersDB.findIndex(item => item.id === id); // Esta es la forma de obtener el índice del elemento que se quiere actualizar.
    customersDB[customerIndex] = body; // Se actualiza la información en el arreglo customersDB
    response.send('Cliente actualizado correctamente'); // Se retorna un mensaje
});
// El método delete es similar al put, pero en este caso se elimina la información.
app.delete('/customers/:id', function (request, response) {
    const id = request.params.id; // Esta es la forma de obtener el parámetro id que viene en la url
    const result = customersDB.filter(item => item.id !== id); // Esta es la forma de filtrar un arreglo. En este caso se filtra por el id. Aquel item que cumpla con la condición se va a quedar en el arreglo result.
    customersDB = result; // Se actualiza la información en el arreglo customersDB
    response.json("Cliente eliminado correctamente"); // Se retorna un mensaje
});
// Esta es la sintaxis para subir/activar el servidor
// app.listen( Puerto_Donde_Escucha, Callback_opcional );
// La funcionalidad del callback es ejecutar ese código la primera vez que se levanta el servidor
app.listen(PORT, function () {
    console.log("La aplicación es está ejecutando en: http://localhost:" + PORT); // Se imprime en consola la confirmación de que el servidor está activo
});
