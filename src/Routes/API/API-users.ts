import theExpressModule from 'express';
import theUserHandler from '../../Handler-Folder/userHandler';
import theValidation from '../../Middleware/auth';
import AUTH from '../../Middleware/auth';

// Initialize Express/Router in order to be utilized in the src/api/index.ts file
const routes: theExpressModule.Router = theExpressModule.Router();

routes.post('/', theUserHandler.CREATE_USER);
routes.get('/', AUTH, theUserHandler.SHOW_ALL_USER);
routes.get('/:id', AUTH, theUserHandler.SHOW_SPECIFIC_USER_BY_ID);
routes.patch('/:id', AUTH, theUserHandler.UPDATE_SPECIFIC_USER_ID);
routes.delete('/:id', AUTH, theUserHandler.DELETE_SPECIFIC_USER_BY_ID);

routes.post('/auth', theUserHandler.AUTH);

export default routes;
