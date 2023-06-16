const axios = require('axios');

function fetchData(api){
  return new Promise((resolve, reject) =>{
    axios.get(api)
      .then( response => resolve(response.data) )
      .catch( error => reject("hubo un error: ", error.message) )
  });
};

module.exports = fetchData;
