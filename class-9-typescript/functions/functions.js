function add(number1, number2) {
    return number1 + number2;
}
const result = add(1, 2);
console.log(result);

// add(1, "5"); // Esto es un error
function sayHello(firstname) {
    var hello = "hello " + firstname;
    return hello;
};

const result2 = sayHello("goku");

function thisDoesNotReturnAnything() {
    console.log("Hello");
};
const result3 = thisDoesNotReturnAnything();

console.log(result3);
