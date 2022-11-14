import theExpressModule from 'express';
import theMorganModule from 'morgan';
import theHelmetModule from 'helmet';
import theVariable from './variables';
import theFunction from './functions';
//import theErrorMiddleware   from '../Middleware/error-middleware';
import theRoutesModule from '../Routes/index';

/** Middleware */
// Using the morgan middleware
theVariable.theExpressApplication.use(theMorganModule('common'));
// Using the helmet middleware
theVariable.theExpressApplication.use(theHelmetModule());
// Using the bodyParser middleware (handles the body parsing)
theVariable.theExpressApplication.use(theExpressModule.json());

theVariable.theExpressApplication.use('/api', theRoutesModule);

theVariable.theExpressApplication.get(
    '/',
    theFunction.callbackFunctionOfGetProperty
);

// Listening for the port number and the callback function
theVariable.theExpressApplication.listen(
    theVariable.thePortNumberOfTheServer,
    theFunction.callbackFunctionOfTheListenMethod
);

// Exporting the application
export default theVariable.theExpressApplication;
