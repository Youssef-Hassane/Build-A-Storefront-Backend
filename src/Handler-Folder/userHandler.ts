import theExpressModule from 'express';
import theModelOfTheUser from '../Models-Of-Database/User/user';
import theJsonwebtokenModule from 'jsonwebtoken';
import envConfiguration from '../ENV-Configuration/ENV-Configuration';

const modelOfTheUser = new theModelOfTheUser();

async function CREATE_USER(
    request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const bodyREQ = request.body;
        const CreateTheUser = await modelOfTheUser.createUser(bodyREQ);
        console.log('The user was created SUCCESSFULLY.');
        console.log(CreateTheUser);
        response.json({
            message: 'The user was created SUCCESSFULLY.',
            response: CreateTheUser,
        });
    } catch (error) {
        console.log(error);
    }
}

async function SHOW_ALL_USER(
    _request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const ShowAllTheUsers = await modelOfTheUser.showAllUsers();
        console.log('The following are all the users in the database:');
        console.log(ShowAllTheUsers);
        response.json({
            message: 'The following are all the users in the database:',
            response: ShowAllTheUsers,
        });
    } catch (error) {
        console.log(error);
    }
}

async function SHOW_SPECIFIC_USER_BY_ID(
    request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const theIdOfTheUserAsString: string = String(request.params.ID);
        const showSpecificUserByID = await modelOfTheUser.showSpecificUserByID(
            theIdOfTheUserAsString
        );
        console.log('The following is the selected user from the database:');
        console.log(showSpecificUserByID);
        response.json({
            message: 'The following is the selected user from the database:',
            response: showSpecificUserByID,
        });
    } catch (error) {
        console.log(error);
    }
}

async function UPDATE_SPECIFIC_USER_ID(
    request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const updateSpecificUser = await modelOfTheUser.updateSpecificUser(
            request.body
        );
        console.log('The user has been updated SUCCESSFULLY.');
        console.log(updateSpecificUser);
        response.json({
            message: 'The user has been updated SUCCESSFULLY.',
            response: updateSpecificUser,
        });
    } catch (error) {
        console.log(error);
    }
}

async function DELETE_SPECIFIC_USER_BY_ID(
    request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const theIdOfTheUserAsString: string = String(request.params.ID);
        const deleteSpecificUserByID =
            await modelOfTheUser.deleteSpecificUserByID(theIdOfTheUserAsString);
        console.log('The user has been deleted SUCCESSFULLY.');
        console.log(deleteSpecificUserByID);
        response.json({
            message: 'The user has been deleted SUCCESSFULLY.',
            response: deleteSpecificUserByID,
        });
    } catch (error) {
        console.log(error);
    }
}

async function AUTH(
    request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const theTokenAsString = envConfiguration.theToken as string;

        const { FirstName, LastName, Password } = request.body;

        const AuthUserByFirstNameLastNamePassword =
            await modelOfTheUser.authUserByFirstNameLastNamePassword(
                FirstName,
                LastName,
                Password
            );

        const theToken = theJsonwebtokenModule.sign(
            { AuthUserByFirstNameLastNamePassword },
            theTokenAsString
        );

        //console.log(!AuthUserByFirstNameLastNamePassword);

        switch (true) {
            case !AuthUserByFirstNameLastNamePassword:
                return response
                    .status(401)
                    .send('Sorry, you are not authorized');
        }

        return response.json({
            message: 'You are authorized user',
            data: { AuthUserByFirstNameLastNamePassword, theToken },
        });
    } catch (error) {
        console.log(error);
    }
}

export default {
    CREATE_USER,
    SHOW_ALL_USER,
    SHOW_SPECIFIC_USER_BY_ID,
    UPDATE_SPECIFIC_USER_ID,
    DELETE_SPECIFIC_USER_BY_ID,
    AUTH,
};
