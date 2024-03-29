/* eslint-disable no-async-promise-executor */
import { Employee } from "../types/employee.types";
import { ServiceLayerResponse } from "../types/api.types";
import bcryptjs from 'bcryptjs';

import { readEmployeeById, readEmployeeByEmail, createEmployee } from "../data/employee.data";


export const getEmployeeById = (id: string): Promise<ServiceLayerResponse<Employee>> => {
  return new Promise((resolve, reject) => {
    readEmployeeById(id)
      .then((dataLayerResponse) => { // Se accede a la respuesta de la capa de datos.
        if((dataLayerResponse as Employee[]).length === 0){ // Se valida si la respuesta es un arreglo vacío.
          resolve({ code: 404 , message: 'Empleado no existe' }); // Se devuelve un código de respuesta 404 y un mensaje.
        }else{
          resolve({ code: 200, result: dataLayerResponse as Employee }); // Se devuelve un código de respuesta 200 y el cliente.
        }
      })
      .catch(error => {
        reject({code: 500, message: "Error inesperado", errorMessage: error}); // Se devuelve un código de respuesta 500 y el error.
      });
  });
};

export const getEmployeeByEmail = (email: string): Promise<ServiceLayerResponse<Employee>> => {
  return new Promise((resolve, reject) => {
    readEmployeeByEmail(email)
      .then((dataLayerResponse) => { // dataLayerResponse es un arreglo de clientes.
        if((dataLayerResponse as Employee[]).length === 0){ // Se valida si la respuesta es un arreglo vacío.
          resolve({ code: 404 , message: 'Empleado no existe' }); // Se devuelve un código de respuesta 404 y un mensaje.
        }else{
          resolve({ code: 200, result: dataLayerResponse[0] as Employee }); // En caso de haber varios clientes con el mismo email, se devuelve el primero.
        }
      })
      .catch(error => {
        reject({code: 500, message: "Error inesperado", errorMessage: error}); // Se devuelve un código de respuesta 500 y el error.
      });
  });
};


// Esta función se encarga de crear un cliente. Es una función asíncrona que retorna una promesa y recibe como parámetro el cliente a guardar.
export const postEmployee = (body: Employee): Promise<ServiceLayerResponse<Employee>> => {
  return new Promise( async (resolve, reject) => {
    const hashedPassword = await bcryptjs.hash(body.password, 10);
    body.password = hashedPassword;

    createEmployee(body) // Se llama la función de la capa de datos.
      .then((dataLayerResponse) => { // Se accede a la respuesta de la capa de datos.
        resolve({code: 201, message: dataLayerResponse as string }); // Se devuelve un código de respuesta 201 y un mensaje.
      })
      .catch(error => {
        reject({code: 500, message: "Error inesperado", errorMessage: error }); // Se devuelve un código de respuesta 500 y el error.
      });
  });
};