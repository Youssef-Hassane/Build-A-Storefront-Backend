import theExpressModule from 'express';
import APIuser from './API/API-users';
import APIproduct from './API/API-product';
import APIorder from './API/API-order';

// Initialize Express/Router in order to be utilized in the src/api/index.ts file
const routes: theExpressModule.Router = theExpressModule.Router();

routes.use('/user', APIuser);
routes.use('/product', APIproduct);
routes.use('/order', APIorder);

export default routes;
