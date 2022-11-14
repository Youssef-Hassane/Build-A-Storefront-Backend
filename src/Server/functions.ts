// importing all the modules that need to be imported

import theVariable from './variables';
import theExpressModule from 'express';
import envConfiguration from '../ENV-Configuration/ENV-Configuration';

// if th user entered the wrong parameters
// I have used the "_request" with "_" due to the fact that I'm not going to use it.
function ifTheUserEnteredTheWrongPath(
    _request: theExpressModule.Request,
    response: theExpressModule.Response
): void {
    console.log(theVariable.pathError);
    response.status(404).send(theVariable.pathError);
}

/**
 *  I can also utilize the arrow functions instead of the standard function.
 *
 *    const ifTheUserEnteredTheWrongPath = (_request: theExpressModule.Request, response: theExpressModule.Response): void => {
 *          // The same command
 *    };
 */

//=======================================

// if th user entered the right parameters
// I have used the "_request" with "_" due to the fact that I'm not going to use it.
function callbackFunctionOfGetProperty(
    _request: theExpressModule.Request,
    response: theExpressModule.Response
): void {
    //throw new Error('Error exists in the routes configuration file for this application instance');
    console.log('Hello, world!');
    response.status(200).send('Hello, world!');
}

/**
 *  I can also utilize the arrow functions instead of the standard function.
 *
 *    const callbackFunctionOfGetProperty = (_request: theExpressModule.Request, response: theExpressModule.Response): void => {
 *          // The same command
 *    };
 */

//=======================================

function callbackFunctionOfTheListenMethod(): void {
    console.log(
        `=aa=======================================================================================`
    );
    console.log('Hi there,');
    console.log('This project was developed by Youssef Hassane');
    console.log('Right now we are building the server.');
    console.log(
        `The server is currently running on port number: ${theVariable.thePortNumberOfTheServer}`
    );
    console.log(
        `*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*`
    );
    console.log(`Please, follow the following instructions:`);
    console.log(
        `   1. Open your favorite browser. For example, Google Chrome, Firefox, Brave, or Safari.`
    );
    console.log(`   2. Type the following URL into your browser:`);
    console.log(
        `               - http://${theVariable.theLocalHostOfTheServerAsNumber}:${theVariable.thePortNumberOfTheServer}/`
    );
    console.log(
        `               - http://${theVariable.theLocalHostOfTheServer}:${theVariable.thePortNumberOfTheServer}/`
    );
    console.log(
        `   3. Click enter in order to make sure that the server is running.`
    );
    console.log(
        `*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*`
    );
    console.log(
        `You can also utilize postman in order to make sure that the server is running.`
    );
    console.log(
        `========================================================================================`
    );
}

/**
 *  I can also utilize the arrow functions instead of the standard function.
 *
 *    const callbackFunctionOfTheListenMethod = (): void => {
 *          // The same command
 *    };
 */

//=======================================
// check if the there is no port number
function checkIfThereIsNoPort(
    thePortNumberOfTheServer: string | undefined
): boolean {
    if (String(thePortNumberOfTheServer).length === 0) {
        return true;
    } else {
        return false;
    }
}

/**
 *  I can also utilize the arrow functions instead of the standard function.
 *
 *    const checkIfThereIsNoPort = (thePortNumberOfTheServer: string | undefined): boolean => {
 *          // The same command
 *    };
 */

export default {
    ifTheUserEnteredTheWrongPath,
    callbackFunctionOfGetProperty,
    callbackFunctionOfTheListenMethod,
    checkIfThereIsNoPort,
};
