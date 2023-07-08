/*
En la capa de servicio o gestión de lógica de negocio se hacen validaciones, cálculos y en general la gestión de los algoritmos que se requieran para el funcionamiento de la aplicación. 
*/
import { Customer } from '../types/customers.types';
import {
  readCustomers,
  readCustomerById,
  readCustomerByName,
  createCustomer,
  updateCustomer,
  deleteCustomerById
} from '../data/customers.data';
// import type { Customer } from '../../customersDB';

interface ServiceLayerResponse {
  code: number,
  result?: Customer | Customer[],
  message?: string;
  errorMessage?: unknown,
}

// Esta función se encarga de obtener los clientes. Puede recibir un límite para la cantidad de clientes que se devuelven.
const getCustomers = (): Promise<ServiceLayerResponse> => {
  // Se devuelve una promesa para manejar el asincronismo.
  return new Promise((resolve, reject) => {
    readCustomers() // La función readCustomers recibe el límite como parámetro. Se usa "as" para indicar que el tipo de dato es string.
      .then((dataLayerResponse: Customer[]) => { 

        const localCustomersDB = dataLayerResponse;
        resolve({ code: 200, result: localCustomersDB}); // Se devuelve el arreglo de clientes.
      })
      .catch((error) => { // Si hay un error, se devuelve el error. El tipo de dato es Error.
        reject({code: 500, message: "Error inesperado ", errorMessage: error }); 
      });
  });
};

const getCustomerById = (id: string): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    readCustomerById(id)
      .then((dataLayerResponse) => {
        if((dataLayerResponse as Customer[]).length === 0){
          resolve({ code: 404 , message: 'Cliente no existe' });
        }else{
          resolve({ code: 200, result: dataLayerResponse as Customer });
        }
      })
      .catch(error => {
        reject({code: 500, message: "Error inesperado", errorMessage: error});
      });
  });
};

const getCustomerByName = (name: string): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    readCustomerByName(name)
      .then((dataLayerResponse) => {
        if((dataLayerResponse as Customer[]).length === 0){
          resolve({ code: 404 , message: 'Cliente no existe' });
        }else{
          resolve({ code: 200, result: dataLayerResponse as Customer });
        }
      })
      .catch(error => {
        reject({code: 500, message: "Error inesperado", errorMessage: error}); 
      });
  });
};

const postCustomer = (body: Customer): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    createCustomer(body)
      .then((dataLayerResponse) => {
        resolve({code: 201, message: dataLayerResponse as string });
      })
      .catch(error => {
        reject({code: 500, message: "Error inesperado", errorMessage: error }); 
      });
  });
};

const putCustomer = (id: string, body: Customer): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    updateCustomer(id, body)
      .then((dataLayerResponse) => {
        if(dataLayerResponse === 200)(
          resolve({code: 200, message: 'Cliente actualizado exitosamente' as string })
        );
      })
      .catch(error =>{
        if(error === 404){
          reject({ code: 404, message: 'Cliente no encontrado'});
        }else{
          reject({ code: 500, message: 'Unexpected error', errorMessage: error});
        }
      });
  });
};

const deleteCustomer = (id: string): Promise<ServiceLayerResponse>  => {
  return new Promise((resolve, reject) => {
    deleteCustomerById(id)
      .then((dataLayerResponse) => {
        if(dataLayerResponse === 200){
          resolve({ code: 200, message: "Cliente borrado"});
        }
      })
      .catch((error) => {
        if(error === 404){
          reject({code: 404, message: "Cliente no existe"});
        }else{
          reject({ code: 500, message: "Error inesperado", errorMessage: error });
        }
      });
  });
};

export {
  getCustomers,
  getCustomerById,
  getCustomerByName,
  postCustomer,
  putCustomer,
  deleteCustomer
}; // Se exporta la función para que pueda ser usada en otros archivos.