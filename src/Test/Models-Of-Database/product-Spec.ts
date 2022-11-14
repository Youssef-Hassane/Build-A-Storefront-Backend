import theProduct from '../../Models-Of-Database/Product/product';
import theDatabaseForTest from '../../Database-Of-Project/database';
import { PoolClient } from 'pg';
import theSQL from '../../Models-Of-Database/Product/SQL-OfProduct';
import theTypeOfProduct from '../../Models-Of-Database/Product/typeOfProduct';

const modelOfTheProduct = new theProduct();

const productInformationForTesting = {
    product_name: 'ProductNameTest',
    price: '99.99',
    category: 'categoryTest',
} as theTypeOfProduct;

const productInformationForTestingAfterUpdate = {
    id: 1,
    product_name: 'ProductNameTestAfterUpdate',
    price: '11.11',
    category: 'categoryTestAfterUpdate',
};

describe(
    'Test the user Model Of Database that is in the "src/Models-Of-Database/Product/product.ts" file:',
    callbackFunction
);

function callbackFunction() {
    it(
        'Testing the createProduct function that create product in the database',
        createProductForTesting
    );
    it(
        'Testing the showAllProduct function that show/display all the products in the database',
        showAllProductForTesting
    );
    it(
        'Testing the showSpecificProductByID function that show/display specific product from the database',
        showSpecificProductByIDForTesting
    );
    it(
        'Testing the updateSpecificProduct function that update specific Product in the database',
        updateSpecificProductForTesting
    );
    it(
        'Testing the deleteSpecificProductByID function that delete specific Product from the database',
        deleteSpecificProductByIDForTesting
    );
}
afterAll(afterTesting);

async function createProductForTesting() {
    const createTheProduct = await modelOfTheProduct.createProduct(
        productInformationForTesting
    );
    console.log('The product was created SUCCESSFULLY.');
    console.log(createTheProduct);

    const productInformationForTesting_toEqual = {
        // ...product,
        // id: createdProduct.id,
        // price: createdProduct.price
        product_name: 'ProductNameTest',
        category: 'categoryTest',
        id: createTheProduct.id,
        price: createTheProduct.price,
    };

    expect(createTheProduct).toEqual(productInformationForTesting_toEqual);
}

async function showAllProductForTesting() {
    const showAllTheProductForTesting =
        await modelOfTheProduct.showAllProduct();
    const theLengthOfTheUsers: number = showAllTheProductForTesting.length;
    console.log('The following are all the products in the database:');
    console.log(showAllTheProductForTesting);
    expect(theLengthOfTheUsers).toEqual(1);
    expect(showAllTheProductForTesting[0].product_name).toEqual(
        'ProductNameTest'
    );
    expect(showAllTheProductForTesting[0].price).toEqual('99.99');
    expect(showAllTheProductForTesting[0].category).toEqual('categoryTest');
}

async function showSpecificProductByIDForTesting() {
    const one = '1';
    const showTheSpecificProductByID =
        await modelOfTheProduct.showSpecificProductByID(one);
    console.log(`The requested product that has ID (${one}) is:`);
    console.log(showTheSpecificProductByID);

    const productInformationForTesting_toEqual = {
        // ...product,
        // id: createdProduct.id,
        // price: createdProduct.price
        // product_name: 'ProductNameTest',
        // category: 'categoryTest',
        ...productInformationForTesting,
        id: 1,
        price: showTheSpecificProductByID.price,
    };

    expect(showTheSpecificProductByID).toEqual(
        productInformationForTesting_toEqual
    );
}

async function updateSpecificProductForTesting() {
    const updateSpecificProduct =
        await modelOfTheProduct.updateSpecificProductByID(
            productInformationForTestingAfterUpdate
        );
    console.log('The requested product has been updated SUCCESSFULLY.');
    console.log(updateSpecificProduct);

    const id = updateSpecificProduct.id;
    const price = updateSpecificProduct.price;
    const product_name = updateSpecificProduct.product_name;
    const category = updateSpecificProduct.category;

    expect(id).toEqual(1);
    expect(product_name).toEqual('ProductNameTestAfterUpdate');
    expect(price).toEqual('11.11');
    expect(category).toEqual('categoryTestAfterUpdate');
}

async function deleteSpecificProductByIDForTesting() {
    const one = '1';
    const deleteTheSpecificProductByID =
        await modelOfTheProduct.deleteSpecificProductByID(one);
    console.log(
        `The requested product that has ID (${one}) has been deleted SUCCESSFULLY:`
    );
    console.log(deleteTheSpecificProductByID);
    expect(deleteTheSpecificProductByID.id).toEqual(1);
}

async function afterTesting() {
    const openConnectionWithTheDatabase: PoolClient =
        await theDatabaseForTest.connect();
    await openConnectionWithTheDatabase.query(theSQL.deleteSQL);
    await openConnectionWithTheDatabase.query(theSQL.resetID);
    openConnectionWithTheDatabase.release();
}
