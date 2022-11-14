import { PoolClient, QueryResult } from 'pg';
import theDatabase from '../../Database-Of-Project/database';
import envConfiguration from '../../ENV-Configuration/ENV-Configuration';
import bcrypt from 'bcrypt';
import theTypeOfUser from './typeOfUser';
import theHashingThePasswordOfTheUser from './passwordHashing';
import theSQL from './SQL-OfUser';

/**
 * #### Users
 * - Index [token required]
 * - Show [token required]
 * - Create N[token required]
 */

export class modelOfTheUser {
    // Create user
    async createUser(variable: theTypeOfUser): Promise<theTypeOfUser> {
        try {
            // Connecting to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // The password after has been hashed by utilizing the Bcrypt module
            const thePasswordAsHash = theHashingThePasswordOfTheUser(
                String(variable.password)
            );
            // Array that contains the FirstName, LastName, and Password
            const userArray = [
                variable.first_name,
                variable.last_name,
                thePasswordAsHash,
            ];
            // Sending the SQL and the array to the database
            const result: QueryResult =
                await openConnectionWithTheDatabase.query(
                    theSQL.CREATE_USER_SQL,
                    userArray
                );
            // Close the connection to the database that is in the "Database-Of-Project/database.ts" file
            openConnectionWithTheDatabase.release();
            // Return the result
            const theNewUser = result.rows[0];
            return theNewUser;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }
    // Show all users
    async showAllUsers(): Promise<theTypeOfUser[]> {
        try {
            // Connect to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Sending the SQL to the database
            const result: QueryResult =
                await openConnectionWithTheDatabase.query(
                    theSQL.SHOW_ALL_USER_SQL
                );
            // Close the connection to the database that is in the "Database-Of-Project/database.ts" file
            openConnectionWithTheDatabase.release();
            // Return the result
            const allUsers = result.rows;
            return allUsers;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }
    // Show specific user by ID
    async showSpecificUserByID(ID: string): Promise<theTypeOfUser> {
        try {
            // Connect to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Sending the SQL to the database
            const result = await openConnectionWithTheDatabase.query(
                theSQL.SHOW_SPECIFIC_USER_BY_ID_SQL,
                [ID]
            );
            // Close the connection to the database that is in the "Database-Of-Project/database.ts" file
            openConnectionWithTheDatabase.release();
            // Return the result
            const specificUser = result.rows[0];
            return specificUser;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }
    // Update specific user
    async updateSpecificUser(
        userVariable: theTypeOfUser
    ): Promise<theTypeOfUser> {
        try {
            // Connecting to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // The password after has been hashed by utilizing the Bcrypt module
            // as string
            const thePasswordAsHash = theHashingThePasswordOfTheUser(
                String(userVariable.password)
            );
            // Array that contains the ID, FirstName, LastName, and Password
            const userArray = [
                userVariable.first_name,
                userVariable.last_name,
                thePasswordAsHash,
                userVariable.id,
            ];
            // Sending the SQL and the array to the database
            const result = await openConnectionWithTheDatabase.query(
                theSQL.UPDATE_SPECIFIC_USER_BY_ID_SQL,
                userArray
            );
            // Close the connection to the database that is in the "Database-Of-Project/database.ts" file
            openConnectionWithTheDatabase.release();
            // Return the result
            const theNewUserInformation = result.rows[0];
            return theNewUserInformation;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }
    // Delete specific user from the database
    async deleteSpecificUserByID(ID: string): Promise<theTypeOfUser> {
        try {
            // Connecting to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Sending the SQL and the array to the database
            const result = await openConnectionWithTheDatabase.query(
                theSQL.DELETE_SPECIFIC_USER_BY_ID_SQL,
                [ID]
            );
            // Close the connection to the database that is in the "Database-Of-Project/database.ts" file
            openConnectionWithTheDatabase.release();
            // Return the result
            const theDeletedUser = result.rows[0];
            return theDeletedUser;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }
    // Authorization
    async authUserByFirstNameLastNamePassword(
        FirstName: string,
        LastName: string,
        Password: string
    ): Promise<theTypeOfUser | null> {
        try {
            // Connecting to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Array that contains the FirstName and LastName
            const firstAndSecondNameArray = [FirstName, LastName];
            // Sending the SQL and the array to the database
            const result = await openConnectionWithTheDatabase.query(
                theSQL.AUTH_User_By_FirstName_LastName_Password_SQL,
                firstAndSecondNameArray
            );
            // the result should equal the number 1
            const resultLength = result.rows.length;

            switch (true) {
                case resultLength === 1:
                    const { password: passwordAsHash } = result.rows[0];
                    switch (true) {
                        case bcrypt.compareSync(
                            `${Password}${envConfiguration.PepperOfPassword}`,
                            passwordAsHash
                        ):
                            const arrayOfTheFirstNameLastName = [
                                FirstName,
                                LastName,
                            ];
                            const theInformationOfTheUser =
                                await openConnectionWithTheDatabase.query(
                                    theSQL.SELECT_ID_FirstName_LastName_FROM_users_SQL,
                                    arrayOfTheFirstNameLastName
                                );
                            return theInformationOfTheUser.rows[0];
                    }
            }

            // Close the connection to the database that is in the "Database-Of-Project/database.ts" file
            openConnectionWithTheDatabase.release();
            // Return null
            return null;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }
}

export default modelOfTheUser;
