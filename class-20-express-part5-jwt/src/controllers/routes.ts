import express from 'express';

import customersControllers from './customers.controller';
import employeeControllers from './employees.controller';

function routerApi(app: express.Application){
  // const router = express.Router();
  app.use('/customers', customersControllers);
  app.use('/employees', employeeControllers);
}

export { routerApi };