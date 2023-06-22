const axios = require('axios');

// La siguiente función retorna una función (esa función es del tipo promesa)
function fetchData(api){
  return new Promise((resolve, reject) =>{
    axios.get(api)
      .then( response => resolve(response.data) )
      .catch( error => reject("hubo un error: ", error.message) )
  });
};

module.exports = fetchData;
