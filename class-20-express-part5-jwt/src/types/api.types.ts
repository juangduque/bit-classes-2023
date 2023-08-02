// Los datos son devueltos en un objeto que contiene un código de respuesta, un mensaje y el resultado. El unico campo obligatorio es el código de respuesta.
export interface ServiceLayerResponse<T> {
  code: number,
  result?: T | T[],
  message?: string;
  errorMessage?: unknown,
}

// Se declara la interfaz para el formato de los errores personalizados, para que sea más fácil de manejar. 
//Tiene 3 propiedades: code, message y errorMessage, donde code es el código de estado HTTP, message es el mensaje que se devuelve al cliente, y errorMessage es el error que se devuelve en la consola.
export interface CustomErrorFormat {
  code: number,
  message: string,
  errorMessage: unknown
}