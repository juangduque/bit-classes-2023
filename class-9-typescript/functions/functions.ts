function add(number1: number, number2: number): number{
  return number1 + number2;
}

add(1, 2);
// add(1, "5"); // Esto es un error

function sayHello(firstname: string | number): string{
  const hello = "hello " + firstname;
  return hello;
};

function thisDoesNotReturnAnything(): void{
  console.log("Hello");
};

sayHello("");
