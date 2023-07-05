import { Customer, customersDB } from '../../customersDB'; // Se importa el arreglo de clientes, especificando el path relativo al archivo donde se encuentra el arreglo.


const localCustomersDB = customersDB; // Se guarda el arreglo de clientes en una variable local.


// Se define la función que obtiene los clientes. Puede recibir un límite para la cantidad de clientes que se devuelven.
const readCustomers = (limit: string): Promise<Customer[]> => { // Se define el tipo de dato que devuelve la función, en este caso una promesa que devuelve un arreglo de clientes.
  return new Promise((resolve, reject) => { // Se devuelve una promesa para manejar el asincronismo.
    try {
      setTimeout(() =>{ // Se simula un retardo de 2 segundos.
        resolve(localCustomersDB); // Se devuelve el arreglo de clientes.
      }, 2000 );
    } catch (error) { // Si hay un error, se devuelve el error.
      reject(error); // Se devuelve el error.
    }
  });
};

const readCustomerById = (id: string) =>{
  return new Promise((resolve, reject) => {
    try {
      const result = localCustomersDB.filter(item => item.id === id); // Se filtra el arreglo de clientes para obtener el cliente con el id solicitado.
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export { readCustomers, readCustomerById }; // Se exporta la función para que pueda ser usada en otros archivos.
