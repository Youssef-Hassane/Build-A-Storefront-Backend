import thePgModule from 'pg';
import theInformationOfTheENVConfiguration from './databaseVariable';

const thPool = new thePgModule.Pool(theInformationOfTheENVConfiguration);

export default thPool;
