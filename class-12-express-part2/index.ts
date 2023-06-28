// const express = require('express'); // Esto es un enfoque viejo para importar módulos de js.
import express from 'express'; // Esta es la forma de importar módulos de js en typescript. Es una buena práctica que el nombre de la constante sea igual al nombre del módulo que se está importando.

const app = express(); // Esta es la creación de la instancia.
const PORT = 3000; // Se declara una variable para el puerto. Es una buena práctica que sea una constante.

app.use(express.json()); //Esto es un middleware. En este caso es necesario para poder user el body que existe dentro de la petición http.

// Se crea una interfaz para definir el tipo de dato que va a tener el arreglo customers.
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


app.get('/customers', (req, res) => {
  res.status(200).json(customersDB);
});

app.get('/customers/id/:id', (req,res) => {
  const id = req.params.id;
  const result = customersDB.filter(item => item.id === id);
  if(result.length === 0){
    res.status(404).send("El cliente solicitado no existe")
  }else{
    res.status(200).send(result)
  }
});

app.get('/customers/name/:name', (req,res) => {
  const name = req.params.name;
  const result = customersDB.filter(item => item.name === name);
  if(result.length === 0){
    res.status(404).send("El cliente solicitado no existe")
  }else{
    res.status(200).send(result)
  }
});

app.post('/customers', function (request, response) {
  const body = request.body;
  customersDB.push(body); 
  response.status(201).send('El cliente se ha guardado');
});

app.put('/customers/:id', function (request, response) {
  const id = request.params.id; 
  const body = request.body; 
  const customerIndex = customersDB.findIndex(item => item.id === id);
  if(customerIndex === -1){
    response.status(404).send("El cliente no existe");
  }else{
    customersDB[customerIndex] = body; 
    response.status(200).json('Cliente actualizado correctamente'); 
  }
});

app.delete('/customers/:id', function (request, response) {
  const id = request.params.id;
  const result = customersDB.filter(item => item.id !== id);
  if(result.length === customersDB.length){
    response.status(404).send("El cliente no existe");
  }else{
    customersDB = result; 
    response.status(200).json("Cliente eliminado correctamente");
  }

  // const index = result.findIndex(item => item.id === id)
  // if(index === -1){
  //   response.status(404).send("El cliente no existe");
  // }else{
  //   customersDB = result; 
  //   response.json("Cliente eliminado correctamente");
  // }
});


app.listen(PORT, function () {
    console.log("La aplicación es está ejecutando en: http://localhost:" + PORT);
});
