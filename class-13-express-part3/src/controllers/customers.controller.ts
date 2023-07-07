/*
Esta capa se encarga de gestionar la petición hecha por el cliente, sea de tipo HTTP, o eventos de la aplicación.

Para este caso puntual, se encarga de gestionar las peticiones de tipo GET, POST, PUT, DELETE y PATCH para la entidad de clientes. Y la gestión de los código de estado HTTP.

Para esto, se usa el módulo "express" que se instaló previamente. Este módulo permite gestionar las rutas de la aplicación, y las peticiones que se hacen a cada ruta.
*/
import express from 'express'; // Se importa el módulo express.

import {
  getCustomers,
  getCustomerById,
  getCustomerByName,
  postCustomer,
  putCustomer,
  deleteCustomer
} from '../services/customers.service'; // Se importa la función que obtiene los clientes. Especificando el path relativo al archivo, es hacia la capa de servicios (Lógica de negocio).

const router = express.Router(); // El modulo router de express sirve para gestionar las rutas de la aplicación.

// Esta petición de tipo get maneja un query para poner un límite a la cantidad de clientes que se devuelven.
router.get('', async (req, res) => {
  try{
    const response = await getCustomers(); // Se llama a la función de la capa de servicios que se encarga específicamente de traer los usuarios (getCustomers)

    res.status(response.code).json({ result: response.result }); // Se devuelve el arreglo de clientes. Se devuelve un objeto con la propiedad result, para que sea más fácil de manejar en el cliente.
  }catch(error){ // Si hay un error, se devuelve el error.
    console.log(error);
    const customError = error as {code: number, message: string};
    res.status(customError.code ).json(customError.message );
  }
});

// Esta petición de tipo get obtiene un cliente por su id.
router.get('/id/:id', async (req,res) => {
  try{
    const id = req.params.id; // Se obtiene el id del parámetro de la petición y se guarda en una variable.

    const response = await getCustomerById(id);    
    res.status(response.code).json(response.message);
  }catch(error){
    console.log(error);
    const customError = error as {code: number, message: string};
    res.status(customError.code ).json(customError.message );
  }
});

// Esta petición de tipo get obtiene un cliente por su nombre.
router.get('/name/:name', async (req,res) => {
  try{
    const name = req.params.name; // Se obtiene el nombre del parámetro de la petición y se guarda en una variable.

    const response = await getCustomerByName(name);
    res.status(response.code).json(response.message);
  }catch(error){
    console.log(error);
    const customError = error as {code: number, message: string};
    res.status(customError.code ).json(customError.message );
  }
});

// Esta petición de tipo post crea un nuevo cliente.
router.post('', async function(req, res) {
  try{
    const body = req.body; // Se obtiene el body de la petición y se guarda en una variable.

    const response = await postCustomer(body);
    res.status(response.code).json(response.message);
  }catch(error){
    console.log(error);
    const customError = error as {code: number, message: string};
    res.status(customError.code ).json(customError.message );
  }
});

// Esta petición de tipo put actualiza un cliente, pasándole todo el recurso a editar por el body de la petición.
router.put('/:id', async function (req, res) {
  try{
    const id = req.params.id; // Se obtiene el id del parámetro de la petición y se guarda en una variable.
    const body = req.body; // Se obtiene el body de la petición y se guarda en una variable.

    const response = await putCustomer(id, body);
    res.status(response.code).json(response.message);
  }catch(error){
    console.log(error);
    const customError = error as {code: number, message: string};
    res.status(customError.code ).json(customError.message );
  }
});

// Esta petición de tipo delete elimina un cliente con base en el id pasado por parámetro.
router.delete('/:id', async function (req, res) {
  try{
    const id = req.params.id;

    const response = await deleteCustomer(id);

    res.status(response.code).json(response.message);
  }catch(error){
    console.log(error);
    const customError = error as {code: number, message: string};
    res.status(customError.code ).json(customError.message );
  }
});

export default router;