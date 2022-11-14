import envConfiguration from '../../ENV-Configuration/ENV-Configuration';
import theBcryptModule from 'bcrypt';
import theUserVariable from './userVariables';

function HashingThePasswordOfTheUser(password: string) {
    // Making the the hash by utilizing hashSync() from the bcrypt module
    return theBcryptModule.hashSync(
        `${password}${envConfiguration.PepperOfPassword}`,
        theUserVariable.theSaltOfTheHashingAsNumber
    );
}

export default HashingThePasswordOfTheUser;
