import ENVConfiguration from '../ENV-Configuration/ENV-Configuration';

const thePostgresPortNumberAsNumber = parseInt(
    ENVConfiguration.thePostgresPortNumber as string
);

const information = {
    host: ENVConfiguration.thePostgresHostName,
    database: ENVConfiguration.theDatabase,
    user: ENVConfiguration.thePostgresUser,
    password: ENVConfiguration.thePostgresPasswordOfTheDatabase,
    port: thePostgresPortNumberAsNumber,
};

export default information;
