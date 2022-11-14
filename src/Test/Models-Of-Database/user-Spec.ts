import theUser from '../../Models-Of-Database/User/user';
import theDatabaseForTest from '../../Database-Of-Project/database';
import { PoolClient } from 'pg';
import theSQL from '../../Models-Of-Database/User/SQL-OfUser';

const modelOfTheUser = new theUser();

const userInformationForTesting = {
    first_name: 'FirstNameTest',
    last_name: 'LastNameTest',
    password: 'PasswordTest',
};

const userInformationForTesting_toEqual = {
    id: 1,
    first_name: 'FirstNameTest',
    last_name: 'LastNameTest',
};

const userInformationForTestingAfterUpdate = {
    id: 1,
    first_name: 'FirstNameTestAfterUpdated',
    last_name: 'LastNameTestAfterUpdated',
    password: 'PasswordTest',
};

describe(
    'Test the user Model Of Database that is in the "src/Models-Of-Database/user.ts" file:',
    callbackFunction
);

function callbackFunction() {
    it(
        'Testing the createUser function that create user in the database',
        createUserForTesting
    );
    it(
        'Testing the showAllUsers function that show/display all the users in the database',
        showAllUsersForTesting
    );
    it(
        'Testing the showSpecificUserByID function that show/display specific user from the database',
        showSpecificUserByIDForTesting
    );
    it(
        'Testing the updateSpecificUser function that update specific user in the database',
        updateSpecificUserForTesting
    );
    it(
        'Testing the authUserByFirstNameLastNamePassword function',
        authUserByFirstNameLastNamePasswordForTesting
    );
    it(
        'Testing the showSpecificUserByID function that show/display specific user from the database',
        updateSpecificUserForTesting
    );
    it(
        'Testing the deleteSpecificUserByID function that delete specific user from the database',
        deleteSpecificUserByIDForTesting
    );
}
afterAll(afterTesting);

async function createUserForTesting() {
    const createTheUserForTesting = await modelOfTheUser.createUser(
        userInformationForTesting
    );
    console.log('The user was created SUCCESSFULLY.');
    console.log(createTheUserForTesting);
    expect(createTheUserForTesting).toEqual(userInformationForTesting_toEqual);
}

async function showAllUsersForTesting() {
    const ShowAllTheUsersForTesting = await modelOfTheUser.showAllUsers();
    const theLengthOfTheUsers: number = ShowAllTheUsersForTesting.length;
    console.log('The following are all the users in the database:');
    console.log(ShowAllTheUsersForTesting);
    expect(theLengthOfTheUsers).toEqual(1);
    expect(ShowAllTheUsersForTesting[0].first_name).toEqual('FirstNameTest');
    expect(ShowAllTheUsersForTesting[0].last_name).toEqual('LastNameTest');
}

async function showSpecificUserByIDForTesting() {
    const showSpecificUserByIDForTesting =
        await modelOfTheUser.showSpecificUserByID('1');
    console.log('The following is the selected user from the database:');
    console.log(showSpecificUserByIDForTesting);
    const ID = showSpecificUserByIDForTesting.id;
    const FirstName = showSpecificUserByIDForTesting.first_name;
    const LastName = showSpecificUserByIDForTesting.last_name;
    expect(ID).toEqual(1);
    expect(FirstName).toEqual('FirstNameTest');
    expect(LastName).toEqual('LastNameTest');
}

async function updateSpecificUserForTesting() {
    const updateSpecificUser = await modelOfTheUser.updateSpecificUser(
        userInformationForTestingAfterUpdate
    );
    console.log('The user has been updated SUCCESSFULLY.');
    console.log(updateSpecificUser);
    const FirstName = updateSpecificUser.first_name;
    const LastName = updateSpecificUser.last_name;
    expect(FirstName).toEqual('FirstNameTestAfterUpdated');
    expect(LastName).toEqual('LastNameTestAfterUpdated');
}

async function authUserByFirstNameLastNamePasswordForTesting() {
    const AuthUserByFirstNameLastNamePassword =
        await modelOfTheUser.authUserByFirstNameLastNamePassword(
            'FirstNameTestAfterUpdated',
            'LastNameTestAfterUpdated',
            'PasswordTest'
        );
    console.log('You are authorized user.');
    if (AuthUserByFirstNameLastNamePassword) {
        const FirstName = AuthUserByFirstNameLastNamePassword.first_name;
        const LastName = AuthUserByFirstNameLastNamePassword.last_name;
        expect(FirstName).toEqual('FirstNameTestAfterUpdated');
        expect(LastName).toEqual('LastNameTestAfterUpdated');
    }
}

async function deleteSpecificUserByIDForTesting() {
    const deleteSpecificUserByID = await modelOfTheUser.deleteSpecificUserByID(
        '1'
    );
    console.log('The user has been deleted SUCCESSFULLY.');
    console.log(deleteSpecificUserByID);
    expect(deleteSpecificUserByID.id).toEqual(1);
}

async function afterTesting() {
    const openConnectionWithTheDatabase: PoolClient =
        await theDatabaseForTest.connect();
    await openConnectionWithTheDatabase.query(theSQL.deleteSQL);
    await openConnectionWithTheDatabase.query(theSQL.resetID);
    openConnectionWithTheDatabase.release();
}
