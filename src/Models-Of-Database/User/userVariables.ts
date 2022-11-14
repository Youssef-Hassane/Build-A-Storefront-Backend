import envConfiguration from '../../ENV-Configuration/ENV-Configuration';

//========================================================================
// Utilizing the following variables in the passwordHashing.ts

// Getting the salt of the ENV configuration "Configuration/ENV-Configuration"
const theSaltOfTheHashing = envConfiguration.theSalt;
// Getting the salt of the ENV configuration "Configuration/ENV-Configuration" as a string
const theSaltOfTheHashingAsString = theSaltOfTheHashing as string;
// Making the salt number by utilizing parseInt()
const theSaltOfTheHashingAsNumber = parseInt(theSaltOfTheHashingAsString);

//========================================================================

export default {
    theSaltOfTheHashingAsNumber,
};
