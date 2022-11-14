import theExpressModule from 'express';
import theJsonwebtokenModule from 'jsonwebtoken';
import envConfiguration from '../ENV-Configuration/ENV-Configuration';

let theToken: string = '';
let theBearerAsLowerCase: string = '';
let theDecodedAsString: string = '';

function theVariableHasValue(variable: string): boolean {
    switch (true) {
        case variable.length > 0:
            return true;
    }
    return false;
}

const validateTheToken = (
    request: theExpressModule.Request,
    _response: theExpressModule.Response,
    next: theExpressModule.NextFunction
) => {
    try {
        const theAuthorizationFromHeaderAsString: string = String(
            request.get('Authorization')
        );

        switch (true) {
            case theVariableHasValue(theAuthorizationFromHeaderAsString):
                const theBearer =
                    theAuthorizationFromHeaderAsString.split(' ')[0];
                theBearerAsLowerCase = theBearer.toLowerCase();
                theToken = theAuthorizationFromHeaderAsString.split(' ')[1];
            case theToken && theBearerAsLowerCase === 'bearer':
                const decoded = theJsonwebtokenModule.verify(
                    theToken,
                    envConfiguration.theToken as string
                );
                theDecodedAsString = String(decoded);
            case theVariableHasValue(theDecodedAsString):
                next();
        }
    } catch (error) {
        throw new Error(`${error}`);
    }
};

export default validateTheToken;
