import theExpressModule from 'express';
import theModelOfTheProduct from '../Models-Of-Database/Product/product';
import theJsonwebtokenModule from 'jsonwebtoken';
import envConfiguration from '../ENV-Configuration/ENV-Configuration';

const modelOfTheProduct = new theModelOfTheProduct();

async function CREATE_PRODUCT(
    request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const theRequestThatWithinTheBody = request.body;
        const createTheProduct = await modelOfTheProduct.createProduct(
            theRequestThatWithinTheBody
        );
        console.log('The product was created SUCCESSFULLY.');
        console.log(createTheProduct);
        response.json({
            message: 'The product was created SUCCESSFULLY.',
            response: createTheProduct,
        });
    } catch (error) {
        console.log(error);
    }
}

async function SHOW_ALL_PRODUCT(
    _request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const ShowAllTheProduct = await modelOfTheProduct.showAllProduct();
        console.log('The following are all the products in the database:');
        console.log(ShowAllTheProduct);
        response.json({
            message: 'The following are all the products in the database:',
            response: ShowAllTheProduct,
        });
    } catch (error) {
        console.log(error);
    }
}

async function SHOW_SPECIFIC_PRODUCT_BY_ID(
    request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const theIdOfTheProductAsString: string = String(request.params.ID);
        const showSpecificProductByID =
            await modelOfTheProduct.showSpecificProductByID(
                theIdOfTheProductAsString
            );
        console.log(
            `The requested product that has ID (${theIdOfTheProductAsString}) is:`
        );
        console.log(showSpecificProductByID);
        response.json({
            message: `The requested product that has ID (${theIdOfTheProductAsString}) is:`,
            response: showSpecificProductByID,
        });
    } catch (error) {
        console.log(error);
    }
}

async function UPDATE_SPECIFIC_PRODUCT_ID(
    request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const updateSpecificProduct =
            await modelOfTheProduct.updateSpecificProductByID(request.body);
        console.log('The requested product has been updated SUCCESSFULLY.');
        console.log(updateSpecificProduct);
        response.json({
            message: 'The requested product has been updated SUCCESSFULLY.',
            response: updateSpecificProduct,
        });
    } catch (error) {
        console.log(error);
    }
}

async function DELETE_SPECIFIC_PRODUCT_BY_ID(
    request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const theIdOfTheProductAsString: string = String(request.params.ID);
        const deleteSpecificProductByID =
            await modelOfTheProduct.deleteSpecificProductByID(
                theIdOfTheProductAsString
            );
        console.log(
            `The requested product that has ID (${theIdOfTheProductAsString}) has been deleted SUCCESSFULLY:`
        );
        console.log(deleteSpecificProductByID);
        response.json({
            message: `The requested product that has ID (${theIdOfTheProductAsString}) has been deleted SUCCESSFULLY:`,
            response: deleteSpecificProductByID,
        });
    } catch (error) {
        console.log(error);
    }
}

export default {
    CREATE_PRODUCT,
    SHOW_ALL_PRODUCT,
    SHOW_SPECIFIC_PRODUCT_BY_ID,
    UPDATE_SPECIFIC_PRODUCT_ID,
    DELETE_SPECIFIC_PRODUCT_BY_ID,
};
