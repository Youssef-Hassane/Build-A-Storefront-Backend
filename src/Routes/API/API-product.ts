import theExpressModule from 'express';
import theProductHandler from '../../Handler-Folder/productHandler';
import theValidation from '../../Middleware/auth';
import AUTH from '../../Middleware/auth';

// Initialize Express/Router in order to be utilized in the src/api/index.ts file
const routes: theExpressModule.Router = theExpressModule.Router();

routes.post('/', AUTH, theProductHandler.CREATE_PRODUCT);
routes.get('/', AUTH, theProductHandler.SHOW_ALL_PRODUCT);
routes.get('/:id', AUTH, theProductHandler.SHOW_SPECIFIC_PRODUCT_BY_ID);
routes.patch('/:id', AUTH, theProductHandler.UPDATE_SPECIFIC_PRODUCT_ID);
routes.delete('/:id', AUTH, theProductHandler.DELETE_SPECIFIC_PRODUCT_BY_ID);

export default routes;
