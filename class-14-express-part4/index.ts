import express from 'express';
import mongoose from 'mongoose';

import { routerApi } from './src/controllers/routes';

const app = express(); // Esta es la creación de la instancia.
const PORT = 3000; // Se declara una variable para el puerto. Es una buena práctica que sea una constante.

app.use(express.json()); //Esto es un middleware. En este caso es necesario para poder usar el body que existe dentro de la petición http.

// Se establece la conexión a mongodb
mongoose.connect('mongodb+srv://admin:123abc@cluster0.8ja1awy.mongodb.net/')
    .then(() =>{
        console.log("Conexión a mongo establecida");
    })
    .catch(() => {
        console.log("Error de conexión con mongo");
    });

routerApi(app);

app.listen(PORT, function () {
    console.log("La aplicación es está ejecutando en: http://localhost:" + PORT);
});
