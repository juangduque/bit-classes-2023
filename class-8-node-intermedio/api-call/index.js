const axios = require('axios');

const API = "https://swapi.dev/api/people"

axios.get(API)
  .then( response => console.log(response.data) )
  .catch( error => console.log("hubo un error: ", error.message))