import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { getEmployeeById, getEmployeeByEmail, postEmployee } from '../services/employee.service';
import { Employee } from '../types/employee.types';

const router = express.Router();

interface CustomErrorFormat {
  code: number,
  message: string,
  errorMessage: unknown
}

router.get('/:id', async (req, res) => {
  try{
    const id = req.params.id;

    const serviceLayerResponse = await getEmployeeById(id);
    res.status(serviceLayerResponse.code).json(serviceLayerResponse.result);
  }catch(error){
    const customError = error as CustomErrorFormat;
    console.log(customError.errorMessage);
    res.status(customError.code ).json(customError.message );
  }
});

router.post('', async function(req, res) {
  try{
    const body = req.body;

    const serviceLayerResponse = await postEmployee(body);
    res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
  }catch(error){
    const customError = error as CustomErrorFormat;
    console.log(customError.errorMessage);
    res.status(customError.code ).json(customError.message );
  }
});

const secret = "esto es un secreto";

router.post('/login', async (req, res) =>{
  const email = req.body.email; // Se guarda el email del body de la petición en una variable.
  const serviceLayerResponse = await getEmployeeByEmail(email); //Se llama a la función de la capa de servicios pasandole el email del body de la petición, debe retornar los datos del empleado.
  
  if(serviceLayerResponse.code === 404){ // Si el código de respuesta es 404, significa que no se encontró el empleado en la BD.
    res.json(serviceLayerResponse).status(serviceLayerResponse.code); // Se devuelve el código de error y el mensaje de error.
  }else{
    const user  = serviceLayerResponse.result; // Se guarda los datos del empleado en una variable.

    const bcryptComparationResult: boolean = bcrypt.compareSync(req.body.password, (user as Employee).password); // Se compara la contraseña del body de la petición con la contraseña del empleado de la BD. Cabe recordar que la contraseña de la BD está encriptada.

    // En la siguiente validación se verifica que el email del body de la petición sea igual al email del empleado de la BD y que la contraseña del body de la petición sea igual a la contraseña del empleado de la BD.
    if(email === (user as Employee).email && bcryptComparationResult){ // Si la validación es correcta, se procede a generar el token.
      const payload = {email: (user as Employee).email}; // Se crea el payload con el email y la contraseña del body de la petición.
      const token = jwt.sign(payload, secret, { expiresIn: '1m'}); // Se genera el token con el email y la contraseña del body de la petición como payload, el secreto y un parámetro que indica que el token expira en 30 días.
      res.status(200).json({token}); // Se devuelve el token y el código de estado 200.
    }else{
      res.status(403).json({message: "Usuario o contraseña incorrectos"}); // Si la validación no es correcta, se devuelve un mensaje de error y el código de estado 403 (Forbidden) que significa que el usuario no permisos.
    }
  }
});

router.post('/verify', (req, res) => {
  const token = req.body.token;

  jwt.verify(token, secret, (error: jwt.VerifyErrors | null, user: string | jwt.JwtPayload | undefined ) => {
    if(error){
      res.json(error).status(403);
    }

    res.json(user).status(200);
  });
});

export default router;