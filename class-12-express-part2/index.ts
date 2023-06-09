import express from 'express'; 

import { customersDB, Customer } from './customersDB'; // Importamos la "base de datos" de clientes y su interfaz.

const app = express(); // Esta es la creación de la instancia.
const PORT = 3000; // Se declara una variable para el puerto. Es una buena práctica que sea una constante.

let localCustomersDB = customersDB; // Se crea una variable local para poder hacer cambios en el arreglo de clientes.

app.use(express.json()); //Esto es un middleware. En este caso es necesario para poder usar el body que existe dentro de la petición http.

// Esta petición de tipo get maneja un query para poner un límite a la cantidad de clientes que se devuelven.
app.get('/customers', (req, res) => {
  try{
    const limit = req.query.limit; // Se obtiene el query de límite y se guarda en una variable.

    if(limit !== undefined){ // Si el query existe, se genera un arreglo de clientes sobre localCustomersDB para devolver solo la cantidad que se pide.
      localCustomersDB = []; // Se reinicia el arreglo local de clientes.
      for (let index = 0; index < parseInt(limit as string); index++) { // Se itera sobre el arreglo de clientes original donde el límite superior es el query.
        if(index < customersDB.length){ // Se valida que el index no sea mayor a la cantidad de clientes que existen.
          localCustomersDB.push(customersDB[index]); // Se agrega el cliente al arreglo local.
        }
      }
    }

    res.status(200).json({ result: localCustomersDB }); // Se devuelve el arreglo de clientes.
  }catch(error){
    console.log(error);
    res.status(500).json({ message: "Error inesperado"});
  }
});

// Esta petición de tipo get obtiene un cliente por su id.
app.get('/customers/id/:id', (req,res) => {
  try{
    const id = req.params.id; // Se obtiene el id del parámetro de la petición y se guarda en una variable.
    const result = localCustomersDB.filter(item => item.id === id); // Se filtra el arreglo de clientes para obtener el cliente con el id solicitado.
  
    if(result.length === 0){ // Si el arreglo resultante está vacío, significa que no existe un cliente con ese id.
      res.status(404).json({ message: "El cliente solicitado no existe" }); // Se devuelve un error 404.
    }else{
      res.status(200).json({ result: result }); // Si el arreglo resultante tiene el cliente, se devuelve el cliente.
    }
  }catch(error){
    console.log(error);
    res.status(500).json({ message: "Error inesperado"});
  }
});

// Esta petición de tipo get obtiene un cliente por su nombre.
app.get('/customers/name/:name', (req,res) => {
  try{
    const name = req.params.name; // Se obtiene el nombre del parámetro de la petición y se guarda en una variable.
    const result = localCustomersDB.filter(item => item.name === name); // Se filtra el arreglo de clientes para obtener el cliente con el nombre solicitado.
    if(result.length === 0){ // Si el arreglo resultante está vacío, significa que no existe un cliente con ese nombre.
      res.status(404).json({ message: "El cliente solicitado no existe" }); // Se devuelve un error 404.
    }else{
      res.status(200).json({ result: result }); // Si el arreglo resultante tiene el cliente, se devuelve el cliente.
    }
  }catch(error){
    console.log(error);
    res.status(500).json({ message: "Error inesperado"});
  }
});

// Esta petición de tipo post crea un nuevo cliente.
app.post('/customers', function (request, response) {
  try{
    const body = request.body; // Se obtiene el body de la petición y se guarda en una variable.
    console.log(body); // Se imprime el body en consola.
    localCustomersDB.push(body);  // Se agrega el cliente al arreglo local.
    response.status(201).json({ message: 'El cliente se ha guardado' }); // Se devuelve un mensaje de éxito.
  }catch(error){
    console.log(error);
    response.status(500).json({ message: "Error inesperado"});
  }
});

// Esta petición de tipo put actualiza un cliente, pasándole todo el recurso a editar por el body de la petición.
app.put('/customers/:id', function (request, response) {
  try{
    const id = request.params.id; // Se obtiene el id del parámetro de la petición y se guarda en una variable.
    const body = request.body; // Se obtiene el body de la petición y se guarda en una variable.
    const customerIndex = localCustomersDB.findIndex(item => item.id === id); // Se busca el índice del cliente a actualizar dentro del arreglo.
    if(customerIndex === -1){ // Si el índice es -1, significa que no existe un cliente con ese id.
      response.status(404).json({ message: "El cliente no existe" }); // Se devuelve un error 404.
    }else{
      localCustomersDB[customerIndex] = body; // Si el índice es diferente a -1, se actualiza el cliente en el arreglo local.
      response.status(200).json({ message: 'Cliente actualizado correctamente' }); // Se devuelve un mensaje de éxito.
    }
  }catch(error){
    console.log(error);
    response.status(500).json({ message: "Error inesperado"});
  }
});

// Esta petición de tipo delete elimina un cliente con base en el id pasado por parámetro.
app.delete('/customers/:id', function (request, response) {
  try{
    const id = request.params.id; // Se obtiene el id del parámetro de la petición y se guarda en una variable.
    const result = localCustomersDB.filter(item => item.id !== id); // Se filtra el arreglo de clientes para obtener todos los clientes que no tengan el id solicitado.
    if(result.length === localCustomersDB.length){ // Si el arreglo resultante tiene la misma cantidad de clientes que el arreglo original, significa que no se eliminó ningún cliente.
      response.status(404).json({ message: "El cliente no existe" }); // Se devuelve un error 404.
    }else{
      localCustomersDB = result; // Si el arreglo resultante tiene menos clientes que el arreglo original, significa que se eliminó un cliente y se reasigna el arreglo resultante al arreglo "base de datos".
      response.status(200).json({ message: "Cliente eliminado correctamente" });
    }
  
    // // Otra forma de hacer la eliminación de un cliente.
    // const index = result.findIndex(item => item.id === id)
    // if(index === -1){
    //   response.status(404).json({ message: "El cliente no existe" });
    // }else{
    //   localCustomersDB = result; 
    //   response.json({ message: "Cliente eliminado correctamente" });
    // }    
  }catch(error){
    console.log(error);
    response.status(500).json({ message: "Error inesperado"});
  }
});

// Esta petición de tipo patch actualiza un cliente, pasándole solo el campo a editar por query. El endpoint luce asi: /customers/1?key=name&value=perengano donde key es el campo a editar y value es el valor a actualizar.
app.patch('/customers/:id', (req, res) =>{
  try{
    const id = req.params.id; // Se obtiene el id del parámetro de la petición y se guarda en una variable.
    const key = req.query.key; // Se obtiene el key del query de la petición y se guarda en una variable.
    const value = req.query.value; // Se obtiene el value del query de la petición y se guarda en una variable.
  
    if(key && value){ // Si el key y el value existen, se actualiza el cliente.
      const customerIndex = customersDB.findIndex(item => item.id === id); // Se busca el índice del cliente a actualizar dentro del arreglo.
  
      console.log(customerIndex);
  
      if(customerIndex === -1){ // Si el índice es -1, significa que no existe un cliente con ese id.
        res.status(404).json({ message: "El cliente no existe" }); // Se devuelve un error 404.
      }else{
        localCustomersDB[customerIndex][key as keyof Customer] = value as string; // Si el índice es diferente a -1, se actualiza el campo del cliente en el arreglo local.
        res.status(200).json({ message: 'Cliente actualizado correctamente' });  // Se devuelve un mensaje de éxito.
      }
    }else{ // Si el key y el value no existen, se devuelve un error.
      res.status(400).json({message: "No se han enviado los queries necesarios"}); // Se devuelve un error 400.
    }
  }catch(error){
    console.log(error);
    res.status(500).json({ message: "Error inesperado"});
  }
});

app.listen(PORT, function () {
    console.log("La aplicación es está ejecutando en: http://localhost:" + PORT);
});
