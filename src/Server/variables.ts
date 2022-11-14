// importing all the modules that need to be imported
import theExpressModule from 'express';
import theFunction from './functions';

import envConfiguration from '../ENV-Configuration/ENV-Configuration';

// Configure express so that it can be used in the "server.ts" file
// The type of the variable is Application
const theExpressApplication: theExpressModule.Application = theExpressModule();

// The port number of the express server is 2011
// If you notice the port number "2011" is the year that Udacity was founded
let thePortNumberOfTheServer: string | undefined | number =
    envConfiguration.thePortNumberOfTheServer;

// if the user didn't specify the port number in the '.env' file set the port number as 2011
if (theFunction.checkIfThereIsNoPort(thePortNumberOfTheServer)) {
    thePortNumberOfTheServer = 2011 as number;
}

// The localhost variable as a string
const theLocalHostOfTheServer: string = 'localhost';

// The localhost variable as a number
const theLocalHostOfTheServerAsNumber: string = '127.0.0.1';

// path error messages as string
const pathError: string =
    'Sorry, the path is not available. Please check the path configuration and try again.';

export default {
    theExpressApplication,
    thePortNumberOfTheServer,
    theLocalHostOfTheServer,
    theLocalHostOfTheServerAsNumber,
    pathError,
};
