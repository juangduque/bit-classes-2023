import mongoose from "mongoose"; // Se importa mongoose para poder usarlo en la creación del schema
import { Customer } from "../types/customers.types"; // Se importa la interfaz de Customer para especificar el tipo de dato que se va a guardar en la base de datos


// A continuación se crea el schema de Customer, el cual va a tener los mismos campos que la interfaz de Customer
const customerSchema = new mongoose.Schema<Customer>({
  name: {type: String, required: true}, // Se especifica el tipo de dato, String porque es el tipo de dato que se va a guardar en la base de datos y además se especifica que es requerido. 
  cc: { type: String, required: true },
  email: { type: String, required: true },
  birthDate: { type: String, required: true },
  cel: { type: String, required: true },
  address: { type: String, required: true }
});

export const CustomerSchema = mongoose.model("Customers", customerSchema); // Se crea el modelo de Customer, el cual va a tener el nombre de Customers y va a tener el schema de customerSchema, creao anteriormente.
