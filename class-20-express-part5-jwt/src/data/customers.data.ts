/* eslint-disable no-async-promise-executor */

/*
  En este archivo se definen las funciones que se encargan de interactuar con la base de datos.}
  Se usa mongoose para interactuar con la base de datos.
*/
import { Customer } from '../types/customers.types';
import { CustomerSchema } from '../schemas/customers.schema';

// Se define la función que obtiene los clientes. Puede recibir un límite para la cantidad de clientes que se devuelven.
export const readCustomers = (): Promise<Customer[]> => { // Se define el tipo de dato que devuelve la función, en este caso una promesa que devuelve un arreglo de clientes.
  return new Promise( async (resolve, reject) => { // Se devuelve una promesa para manejar el asincronismo.
    try {
      const mongoResponse = await CustomerSchema.find(); // Usando mongoose se obtienen todos los datos de la colección de clientes.
      resolve(mongoResponse); // Se devuelve el arreglo de clientes.
    } catch (error) { // Si hay un error, se devuelve el error.
      reject(error); // Se devuelve el error.
    }
  });
};

// Esta función se encarga de obtener un cliente por su id. Es una función asíncrona que retorna una promesa y recibe como parámetro el id del cliente.
export const readCustomerById = (id: string) =>{
  return new Promise( async (resolve, reject) => {
    try {
      const mongoResponse = await CustomerSchema.findById(id); // Usando mongoose se obtiene el cliente por su id.

      if(mongoResponse === null){ // Si el cliente no existe, se devuelve un error 404.
        reject(404); // Se devuelve el código de error.
      }else{
        resolve(mongoResponse); // Si el cliente existe, se devuelve el cliente.
      }
    } catch (error) {
      reject(error);
    }
  });
};

// Esta función se encarga de obtener un cliente por su nombre. Es una función asíncrona que retorna una promesa y recibe como parámetro el nombre del cliente.
export const readCustomerByName = (name: string) =>{
  return new Promise( async (resolve, reject)=> {
    try {
      const mongoResult = await CustomerSchema.findOne({ name: name }); // Usando mongoose se obtiene el cliente por su nombre.

      if(mongoResult === null){ // Si el cliente no existe, se devuelve un error 404.
        reject(404); // Se devuelve el código de error.
      } else {
        resolve(mongoResult); // Si el cliente existe, se devuelve el cliente.
      }
    } catch (error) { // Si hay un error, se devuelve el error. Sin importar cual sea.
      reject(error);  // Se devuelve el error.
    }
  });
};

// Esta función se encarga de crear un cliente. Es una función asíncrona que retorna una promesa y recibe como parámetro el cliente a crear.
export const createCustomer = (body: Customer) => {
  return new Promise(async (resolve, reject) => {
    try {
      const customer = new CustomerSchema(body); // Se crea una instancia del esquema de mongoose, pasándole el body de la petición.
      await customer.save(); // Se guarda el cliente en la base de datos.
      resolve('Se ha agregado cliente'); // Se devuelve un mensaje de éxito.
    } catch (error) { // Si hay un error, se devuelve el error. Sin importar cual sea.
      reject(error); // Se devuelve el error.
    }
  });
};

// Esta función se encarga de actualizar un cliente. Es una función asíncrona que retorna una promesa y recibe como parámetro el id del cliente a actualizar y el cliente con los datos a actualizar.
export const updateCustomer = (id: string, body: Customer) => {
  return new Promise( async (resolve, reject) => {
    try {
      const updatedEntity = await CustomerSchema.findByIdAndUpdate( id, body, { new: true} ); // Se actualiza el cliente en la base de datos.

      if(updatedEntity === null){ // Si el cliente no existe, se devuelve un error 404.
        reject(404); // Se devuelve el código de error.
      }else{
        resolve(200); // Si el cliente existe, se devuelve un mensaje de éxito.
      }
    } catch (error) { // Si hay un error, se devuelve el error. Sin importar cual sea.
      reject(error); // Se devuelve el error.
    }
  });
};

// Esta función se encarga de eliminar un cliente. Es una función asíncrona que retorna una promesa y recibe como parámetro el id del cliente a eliminar.
export const deleteCustomerById = (id: string) => {
  return new Promise( async (resolve, reject) => {
    try {
      const deletedEntity = await CustomerSchema.findByIdAndRemove(id); // Se elimina el cliente de la base de datos.

      if(deletedEntity === null){ // Si el cliente no existe, se devuelve un error 404.
        reject(404); // Se devuelve el código de error.
      }else{
        resolve(200); // Si el cliente existe, se devuelve un mensaje de éxito.
      }
    } catch (error) { // Si hay un error, se devuelve el error. Sin importar cual sea.
      reject(error); // Se devuelve el error.
    }
  });
};
