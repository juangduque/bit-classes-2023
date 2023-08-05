import express from 'express';

import customersControllers from './customers.controller';
import employeeControllers from './employees.controller';
import authControllers from './auth.controller';

function routerApi(app: express.Application){
  app.use('/customers', customersControllers);
  app.use('/employees', employeeControllers);
  app.use('/auth', authControllers);
}

export { routerApi };