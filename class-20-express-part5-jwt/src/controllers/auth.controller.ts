import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { Employee } from '../types/employee.types';

import { getEmployeeByEmail } from '../services/employee.service';

const router = express.Router();

router.get('/login', async (req, res) =>{
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
      const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '30s'}); // Se genera el token con el email y la contraseña del body de la petición como payload, el secreto y un parámetro que indica que el token expira en 30 días.
      res.status(200).json({token}); // Se devuelve el token y el código de estado 200.
    }else{
      res.status(403).json({message: "Usuario o contraseña incorrectos"}); // Si la validación no es correcta, se devuelve un mensaje de error y el código de estado 403 (Forbidden) que significa que el usuario no permisos.
    }
  }
});

export default router;