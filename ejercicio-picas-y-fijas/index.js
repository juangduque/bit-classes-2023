// Generate a random 4-digit number
function generateRandomNumber() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let randomNumber = '';

  while (randomNumber.length < 4) {
    const randomIndex = Math.floor(Math.random() * digits.length); // Aqui se genera un número entre 0 y 9 (debido a la longitud del arreglo).
    const randomDigit = digits[randomIndex]; // Se lee dentro del arreglo la posición especificada por el número generado aleatoriamente en la linea anterior.

    if (!randomNumber.includes(randomDigit)) { // Esta validación me asegura que no existan números repetidos
      randomNumber += randomDigit;
    }
  }

  return randomNumber;
};

// Compare the numberGuess with the secret number
function compareNumbers(secret, numberGuess) {
  let picas = 0;
  let fijas = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === numberGuess[i]) {
      fijas++; 
    } else if (secret.includes(numberGuess[i])) {
      picas++;
    };
  };

  return { picas, fijas };
};

// Game logic
function playGame() {
  const secretNumber = generateRandomNumber();
  const attempsNumber = 10;
  let attempts = 0;


  console.log('¡Bienvenido/a a Picas y Fijas! Adivina el número de 4 dígitos.');

  while (true) {
    const numberGuess = prompt('Ingresa tu número');
    attempts++; // Se suma uno a la variable que controla los intentos

    if (numberGuess.length !== 4 || !/^\d+$/.test(numberGuess)) { // Esto valida que el número ingresado esté en un formato válido
      console.log('Suposición no válida. Por favor ingrese un número de 4 dígitos.');
      continue;
    };

    const result = compareNumbers(secretNumber, numberGuess);

    if (result.fijas === 4) {
      console.log(`¡Felicitaciones! Adivinaste el número en ${attempts} intentos.`);
      break;
    } else {
      console.log(`Número ingresado: ${numberGuess}. Picas: ${result.picas}, Fijas: ${result.fijas}, Intento N° ${attempts}`)
      // console.log("Número ingresado: " + numberGuess + ". Picas: "+ result.picas + ", Fijas: " + result.fijas + ", Intento N°" + attempts); // Esta linea es equivalente a la de arriba (linea 58)
    };

    if(attempts === attempsNumber){
      console.log(`Has agotado todos los intentos (${attempsNumber}), el número era ${secretNumber}. Mejor suerte para la próxima `);
      break;
    };
  };
};

// Start the game
playGame();