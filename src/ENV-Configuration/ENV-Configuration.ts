import environmentVariables from 'dotenv';

environmentVariables.config();

const { THE_POSTGRES_PASSWORD_OF_THE_DATABASE } = process.env;
const { THE_POSTGRES_DATABASE_FOR_THE_PROJECT } = process.env;
const { THE_PORT_NUMBER_OF_THE_SERVER_ENV } = process.env;
const { THE_POSTGRES_DATABASE_FOR_TESTING } = process.env;
const { THE_POSTGRES_PORT_NUMBER } = process.env;
const { THE_POSTGRES_HOST_NAME } = process.env;
const { THE_POSTGRES_USER } = process.env;
const { PEPPER_OF_PASSWORD } = process.env;
const { TOKEN } = process.env;
const { SALT } = process.env;
const { ENV } = process.env;

export default {
    thePostgresPasswordOfTheDatabase: THE_POSTGRES_PASSWORD_OF_THE_DATABASE,
    // ++++++++++++++++++++++++++++++++++
    theDatabase:
        ENV === 'development'
            ? THE_POSTGRES_DATABASE_FOR_THE_PROJECT
            : THE_POSTGRES_DATABASE_FOR_TESTING,
    // ++++++++++++++++++++++++++++++++++
    thePortNumberOfTheServer: THE_PORT_NUMBER_OF_THE_SERVER_ENV,
    thePostgresPortNumber: THE_POSTGRES_PORT_NUMBER,
    thePostgresHostName: THE_POSTGRES_HOST_NAME,
    thePostgresUser: THE_POSTGRES_USER,
    PepperOfPassword: PEPPER_OF_PASSWORD,
    theToken: TOKEN,
    theSalt: SALT,
};
