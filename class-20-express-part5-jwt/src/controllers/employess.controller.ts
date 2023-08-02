import express from 'express';

import { getEmployeeById, postEmployee } from '../services/employee.service';

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

export default router;