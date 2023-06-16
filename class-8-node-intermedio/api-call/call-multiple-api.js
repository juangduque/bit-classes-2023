const fetchData = require('./my-fetch-data');

const API = "https://swapi.dev/api/people/1"; // Se Define una variable con el url de la primera api.

fetchData(API) // Se hace el llamado inicial de la función personalizada para hacer el fetch de datos
  .then(response => { 
    console.log(response);
    return fetchData("https://rickandmortyapi.com/api/character/69"); // Si el llamado es exitoso se encadena a un nuevo llamado de la función personalizada
  })
  .then(response => {
    console.log(response); // Aqui se resulve el llamado a la segunda api
  })
  .catch( error => console.log(error));