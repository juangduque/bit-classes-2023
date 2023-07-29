// Esta es la interfaz de Customer, la cual especifica los tipos de dato de cada campo de Customer.

export interface Customer {
  _id?: string;
  name: string;
  cc: string;
  email: string;
  birthDate: string;
  cel: string;
  address: string;
}
