import express from 'express'; 

import { customersDB, Customer } from './customersDB';

const app = express(); // Esta es la creación de la instancia.
const PORT = 3000; // Se declara una variable para el puerto. Es una buena práctica que sea una constante.

let localCustomersDB = customersDB;

app.use(express.json()); //Esto es un middleware. En este caso es necesario para poder user el body que existe dentro de la petición http.

app.get('/customers', (req, res) => {
  const limit = req.query.limit;

  if(limit){
    localCustomersDB = [];
    for (let index = 0; index < parseInt(limit as string); index++) {
      if(index < customersDB.length){
        localCustomersDB.push(customersDB[index]);
      }
    }
  }

  res.status(200).json(localCustomersDB);
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
    // customersDB = result;
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

app.patch('/customers/:id', (req, res) =>{
  const id = req.params.id;
  const key = req.query.key;
  const value = req.query.value;
  if(key && value){
    const customerIndex = customersDB.findIndex(item => item.id === id);
    if(customerIndex === -1){
      res.status(404).send("El cliente no existe");
    }else{
      localCustomersDB[customerIndex][key as keyof Customer] = value as string;
      res.status(200).json('Cliente actualizado correctamente'); 
    }
  }else{
    res.status(400).json({message: "No se han enviado los queries necesarios"})
  }
});

app.listen(PORT, function () {
    console.log("La aplicación es está ejecutando en: http://localhost:" + PORT);
});
