import { customersDB, Customer } from '../../customersDB'; 


let localCustomersDB = customersDB;

// Esta función se encarga de obtener los clientes.
const getCustomers = (limit: string) => {
  return new Promise((resolve, reject) => {

    if(limit !== undefined){ // Si el query existe, se genera un arreglo de clientes sobre localCustomersDB para devolver solo la cantidad que se pide.
      localCustomersDB = []; // Se reinicia el arreglo local de clientes.
      for (let index = 0; index < parseInt(limit as string); index++) { // Se itera sobre el arreglo de clientes original donde el límite superior es el query.
        if(index < customersDB.length){ // Se valida que el index no sea mayor a la cantidad de clientes que existen.
          localCustomersDB.push(customersDB[index]); // Se agrega el cliente al arreglo local.
        }
      }
    }

    resolve(localCustomersDB);
  });
};


const getCustomerById = () => {
  return new Promise((resolve, reject) => {

  });
};

// const getCustomerByName

// const postCustomer

// const putCustomer

// const deleteCustomer

// const patchCustomer

export { getCustomers, getCustomerById }