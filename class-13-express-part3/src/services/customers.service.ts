/*
En la capa de servicio o gestión de lógica de negocio se hacen validaciones, cálculos y en general la gestión de los algoritmos que se requieran para el funcionamiento de la aplicación. 
*/
import { Customer } from '../../customersDB';
import { readCustomers, readCustomerById } from '../data/customers.data';
// import type { Customer } from '../../customersDB';

// Esta función se encarga de obtener los clientes. Puede recibir un límite para la cantidad de clientes que se devuelven.
const getCustomers = (limit: string | undefined) => {
  // Se devuelve una promesa para manejar el asincronismo.
  return new Promise((resolve, reject) => {
    /* "readCustomers" llama a la función que obtiene los clientes. Esta función devuelve una promesa.

    Por lo tanto, se puede usar el método "then" para obtener la respuesta de la promesa.
    */
    readCustomers(limit as string) // La función readCustomers recibe el límite como parámetro. Se usa "as" para indicar que el tipo de dato es string.
      .then((response: Customer[]) => { 

        const localCustomersDB = response;
        resolve(localCustomersDB); // Se devuelve el arreglo de clientes.
      })
      .catch((error: Error) => { // Si hay un error, se devuelve el error. El tipo de dato es Error.
        reject(error); 
      });
  });
};

const getCustomerById = (id: string): Promise<{ code: number, message: string | Customer }> => {
  return new Promise((resolve, reject) => {
    readCustomerById(id)
      .then(response => {
        if((response as Customer[]).length === 0){
          resolve({ code: 404 , message: 'Cliente no existe' });
        }else{
          resolve({ code: 200, message: response as Customer });
        }
      })
      .catch(error => reject(error));
  });
};

// const getCustomerByName

// const postCustomer

// const putCustomer

// const deleteCustomer

// const patchCustomer

export { getCustomers, getCustomerById }; // Se exporta la función para que pueda ser usada en otros archivos.