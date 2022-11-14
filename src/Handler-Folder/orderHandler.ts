import theExpressModule from 'express';
import theModelOfTheOrder from '../Models-Of-Database/Order/order';
import theJsonwebtokenModule from 'jsonwebtoken';
import envConfiguration from '../ENV-Configuration/ENV-Configuration';

const modelOfTheOrder = new theModelOfTheOrder();

async function CREATE_ORDER(
    request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const theRequestThatWithinTheBody = request.body;
        const createTheOrder = await modelOfTheOrder.createOrder(
            theRequestThatWithinTheBody
        );
        console.log('The order was created SUCCESSFULLY.');
        console.log(createTheOrder);
        response.json({
            message: 'The order was created SUCCESSFULLY.',
            response: createTheOrder,
        });
    } catch (error) {
        console.log(error);
    }
}

async function SHOW_ALL_ORDER(
    _request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const ShowAllTheOrder = await modelOfTheOrder.showAllOrder();
        console.log('The following are all the order in the database:');
        console.log(ShowAllTheOrder);
        response.json({
            message: 'The following are all the order in the database:',
            response: ShowAllTheOrder,
        });
    } catch (error) {
        console.log(error);
    }
}

async function SHOW_SPECIFIC_ORDER_BY_ID(
    request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const theIdOfTheOrderAsString: string = String(request.params.ID);
        const showSpecificOrderByID =
            await modelOfTheOrder.showSpecificOrderByID(
                theIdOfTheOrderAsString
            );
        console.log(
            `The requested order that has ID (${theIdOfTheOrderAsString}) is:`
        );
        console.log(showSpecificOrderByID);
        response.json({
            message: `The requested order that has ID (${theIdOfTheOrderAsString}) is:`,
            response: showSpecificOrderByID,
        });
    } catch (error) {
        console.log(error);
    }
}

async function UPDATE_SPECIFIC_ORDER_ID(
    request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const updateSpecificOrder =
            await modelOfTheOrder.updateSpecificOrderByID(request.body);
        console.log('The requested order has been updated SUCCESSFULLY.');
        console.log(updateSpecificOrder);
        response.json({
            message: 'The requested order has been updated SUCCESSFULLY.',
            response: updateSpecificOrder,
        });
    } catch (error) {
        console.log(error);
    }
}

async function DELETE_SPECIFIC_ORDER_BY_ID(
    request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const theIdOfTheOrderAsString: string = String(request.params.ID);
        const deleteSpecificOrderByID =
            await modelOfTheOrder.deleteSpecificOrderByID(
                theIdOfTheOrderAsString
            );
        console.log(
            `The requested order that has ID (${theIdOfTheOrderAsString}) has been deleted SUCCESSFULLY:`
        );
        console.log(deleteSpecificOrderByID);
        response.json({
            message: `The requested order that has ID (${theIdOfTheOrderAsString}) has been deleted SUCCESSFULLY:`,
            response: deleteSpecificOrderByID,
        });
    } catch (error) {
        console.log(error);
    }
}

async function INSERT_THE_PRODUCT_INTO_THE_USER_ORDER_TABLE(
    request: theExpressModule.Request,
    response: theExpressModule.Response
) {
    try {
        const theIdOfTheOrder = request.params.ID;

        const theQuantity = request.body.Quantity;

        const theIdOfTheProduct = request.body.ID_Of_The_Product;

        const insertTheProductIntoTheUserOrderTable =
            await modelOfTheOrder.insertTheProductIntoTheUserOrderTable(
                theQuantity,
                theIdOfTheOrder,
                theIdOfTheProduct
            );
        console.log(
            `The requested order that has ID (${theIdOfTheOrder}) has been inserted SUCCESSFULLY:`
        );
        console.log(insertTheProductIntoTheUserOrderTable);
        response.json({
            message: `The requested order that has ID (${theIdOfTheOrder}) has been inserted SUCCESSFULLY:`,
            response: insertTheProductIntoTheUserOrderTable,
        });
    } catch (error) {
        console.log(error);
    }
}

export default {
    CREATE_ORDER,
    SHOW_ALL_ORDER,
    SHOW_SPECIFIC_ORDER_BY_ID,
    UPDATE_SPECIFIC_ORDER_ID,
    DELETE_SPECIFIC_ORDER_BY_ID,
    INSERT_THE_PRODUCT_INTO_THE_USER_ORDER_TABLE,
};
