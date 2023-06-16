const fs = require('fs'); // importo el módulo precargado de node para leer archivos

//fs.readFile(nombreDelArchivo, formatoDeCodificadion, (error,data)=>{}); //Sintaxis de la función readFile
fs.readFile('modules/descarga.png', 'utf-8', (error, data) => {
  if(error){
    console.log("Hubo un error al leer el archivo", error);
    return;
  }

  console.log('contenido del archivo: ', data);
});
