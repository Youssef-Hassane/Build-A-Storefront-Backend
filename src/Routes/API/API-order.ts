import theExpressModule from 'express';
import theOrderHandler from '../../Handler-Folder/orderHandler';
import theValidation from '../../Middleware/auth';
import AUTH from '../../Middleware/auth';

// Initialize Express/Router in order to be utilized in the src/api/index.ts file
const routes: theExpressModule.Router = theExpressModule.Router();

routes.post('/', AUTH, theOrderHandler.CREATE_ORDER);
routes.get('/', AUTH, theOrderHandler.SHOW_ALL_ORDER);
routes.get('/:id', AUTH, theOrderHandler.SHOW_SPECIFIC_ORDER_BY_ID);
routes.patch('/:id', AUTH, theOrderHandler.UPDATE_SPECIFIC_ORDER_ID);
routes.delete('/:id', AUTH, theOrderHandler.DELETE_SPECIFIC_ORDER_BY_ID);
routes.post(
    '/:id/insert',
    AUTH,
    theOrderHandler.INSERT_THE_PRODUCT_INTO_THE_USER_ORDER_TABLE
);

export default routes;
