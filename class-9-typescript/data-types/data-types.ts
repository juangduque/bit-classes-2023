//Tipos de datos primarios o más usados
let firstName: string = "";
let isValid: boolean = true;
let age: number = 10;

// Usando varios tipos de dato
let size: number | string = "1.7";

// size = true; // Esto es un error

// Otros tipos de datos
let operation: null = null;
let operation2: undefined  = undefined;
let symbol: symbol; // Es muy rara la vez que se usa este tipo de dato

// any es como no tener ningun tipado fuerte.
let lastname: any = 0;

lastname = "";
lastname = false;
