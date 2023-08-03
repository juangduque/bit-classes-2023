/* eslint-disable no-async-promise-executor */

import { Employee } from "../types/employee.types";
import { EmployeeSchema } from "../schemas/employee.schema";


export const readEmployeeById = (id: string) =>{
  return new Promise( async (resolve, reject) => {
    try {
      const mongoResponse = await EmployeeSchema.findById(id); // Usando mongoose se obtiene el cliente por su id.

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

export const readEmployeeByEmail = (email: string): Promise<Employee[]> => {
  return new Promise( async (resolve, reject) => {
    try {
      const mongoResponse = await EmployeeSchema.find({ email: email }); // Usando mongoose se obtiene el cliente por su email.

      if(mongoResponse === null){ // Si el cliente no existe, se devuelve un error 404.
        reject(404); // Se devuelve el código de error.
      }else{
        resolve(mongoResponse); // Si el cliente existe, se devuelve el cliente. En caso de haber varios clientes con el mismo email, se devuelve un arreglo.
      }
    }catch(error){
      reject(error); // En caso de error se devuelve el error.
    }
  });
};

export const createEmployee = (body: Employee) => {
  return new Promise(async (resolve, reject) => {
    try {
      const customer = new EmployeeSchema(body); // Se crea una instancia del esquema de mongoose, pasándole el body de la petición.
      await customer.save(); // Se guarda el cliente en la base de datos.
      resolve('Se ha agregado empleado'); // Se devuelve un mensaje de éxito.
    } catch (error) { // Si hay un error, se devuelve el error. Sin importar cual sea.
      reject(error); // Se devuelve el error.
    }
  });
};