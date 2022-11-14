import theDatabaseForTest from '../../Database-Of-Project/database';
import { PoolClient } from 'pg';
import theOrderSQL from '../../Models-Of-Database/Order/SQL-OfOrder';
import theUserSQL from '../../Models-Of-Database/User/SQL-OfUser';
import theProductSQL from '../../Models-Of-Database/Product/SQL-OfProduct';
import theTypeOfProduct from '../../Models-Of-Database/Product/typeOfProduct';
import theTypeOfOrder from '../../Models-Of-Database/Order/typeOfOrder';
import theUserModel from '../../Models-Of-Database/User/user';
import theProductModel from '../../Models-Of-Database/Product/product';
import theOrderModel from '../../Models-Of-Database/Order/order';

const theModelOfTheUser = new theUserModel();
const theModelOfTheProduct = new theProductModel();
const theModelOfTheOrder = new theOrderModel();

const userInformationForTesting = {
    first_name: 'FirstNameTest',
    last_name: 'LastNameTest',
    password: 'PasswordTest',
};

const productInformationForTesting = {
    product_name: 'ProductNameTest',
    price: '99.99',
    category: 'categoryTest',
} as theTypeOfProduct;

const orderInformationForTesting = {
    id_of_user: '1',
    order_status: 'active',
} as theTypeOfOrder;

const orderInformationForTestingAfterUpdated = {
    id: 1,
    id_of_user: '1',
    order_status: 'complete',
} as theTypeOfOrder;

async function beforeTesting() {
    await theModelOfTheUser.createUser(userInformationForTesting);
    await theModelOfTheProduct.createProduct(productInformationForTesting);
}
beforeAll(beforeTesting);

describe(
    'Test the user Model Of Database that is in the "src/Models-Of-Database/Product/product.ts" file:',
    callbackFunction
);

function callbackFunction() {
    it(
        'Testing the createOrder function that create Order in the database',
        createOrderForTesting
    );
    it(
        'Testing the showAllOrder function that show/display all the Order in the database',
        showAllOrderForTesting
    );
    it(
        'Testing the showSpecificOrderByID function that show/display specific Order from the database',
        showSpecificOrderByIDForTesting
    );
    it(
        'Testing the updateSpecificOrderByID function that update specific Order in the database',
        updateSpecificOrderByIDForTesting
    );
    it(
        'Testing the deleteSpecificOrderByID function that delete specific Order from the database',
        deleteSpecificOrderByIDForTesting
    );
}

afterAll(afterTesting);

async function createOrderForTesting() {
    const createTheOrder = await theModelOfTheOrder.createOrder(
        orderInformationForTesting
    );
    console.log('The order was created SUCCESSFULLY.');
    console.log(createTheOrder);

    const orderID = createTheOrder.id;
    const idOfUserThatOrdered = createTheOrder.id_of_user;
    const orderStatus = createTheOrder.order_status;

    expect(orderID).toBe(1);
    expect(idOfUserThatOrdered).toBe('1');
    expect(orderStatus).toBe('active');
}

async function showAllOrderForTesting() {
    const showAllTheOrder = await theModelOfTheOrder.showAllOrder();
    const theLengthOfTheOrders: number = showAllTheOrder.length;

    console.log('The following are all the order in the database:');
    console.log(showAllTheOrder);

    expect(theLengthOfTheOrders).toEqual(1);
    expect(showAllTheOrder[0].id).toEqual(1);
    expect(showAllTheOrder[0].id_of_user).toEqual('1');
    expect(showAllTheOrder[0].order_status).toEqual('active');
}

async function showSpecificOrderByIDForTesting() {
    const one = '1';
    const showTheSpecificOrderByID =
        await theModelOfTheOrder.showSpecificOrderByID(one);
    console.log(`The requested order that has ID (${one}) is:`);
    console.log(showTheSpecificOrderByID);
    expect(showTheSpecificOrderByID.id).toEqual(1);
    expect(showTheSpecificOrderByID.id_of_user).toEqual('1');
    expect(showTheSpecificOrderByID.order_status).toEqual('active');
}

async function updateSpecificOrderByIDForTesting() {
    const updateSpecificOrder =
        await theModelOfTheOrder.updateSpecificOrderByID(
            orderInformationForTestingAfterUpdated
        );
    console.log('The requested order has been updated SUCCESSFULLY.');
    console.log(updateSpecificOrder);

    const id = updateSpecificOrder.id;
    const price = updateSpecificOrder.id_of_user;
    const product_name = updateSpecificOrder.order_status;

    expect(id).toEqual(1);
    expect(product_name).toEqual('ProductNameTestAfterUpdate');
    expect(price).toEqual('11.11');
}

async function deleteSpecificOrderByIDForTesting() {
    const one = '1';
    const deleteTheSpecificOrderByID =
        await theModelOfTheOrder.deleteSpecificOrderByID(one);
    console.log(
        `The requested Order that has ID (${one}) has been deleted SUCCESSFULLY:`
    );
    console.log(deleteTheSpecificOrderByID);
    expect(deleteTheSpecificOrderByID.id).toEqual(1);
    expect(deleteTheSpecificOrderByID.id_of_user).toEqual('1');
    expect(deleteTheSpecificOrderByID.order_status).toEqual('complete');
}

async function afterTesting() {
    const openConnectionWithTheDatabase: PoolClient =
        await theDatabaseForTest.connect();
    // users
    await openConnectionWithTheDatabase.query(theUserSQL.deleteSQL);
    await openConnectionWithTheDatabase.query(theUserSQL.resetID);
    // products
    await openConnectionWithTheDatabase.query(theProductSQL.deleteSQL);
    await openConnectionWithTheDatabase.query(theProductSQL.resetID);
    // orders
    await openConnectionWithTheDatabase.query(theOrderSQL.deleteSQL);
    await openConnectionWithTheDatabase.query(theOrderSQL.resetID);

    openConnectionWithTheDatabase.release();
}
