import { PoolClient, QueryResult } from 'pg';
import theDatabase from '../../Database-Of-Project/database';
import theTypeOfOrder from './typeOfOrder';
import theSQL from './SQL-OfOrder';

export class modelOfTheProduct {
    // Create new order
    async createOrder(variable: theTypeOfOrder): Promise<theTypeOfOrder> {
        try {
            // Connect to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Array that contains the id of the user and the order status
            const orderArray = [variable.id_of_user, variable.order_status];
            // Sending the SQL and the array to the database
            const result: QueryResult =
                await openConnectionWithTheDatabase.query(
                    theSQL.CREATE_ORDER_SQL,
                    orderArray
                );
            // Close the connection to the database that is in the "Database-Of-Project/database.ts" file
            openConnectionWithTheDatabase.release();
            // Return the result
            const theNewOrder = result.rows[0];
            return theNewOrder;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }
    // Show/Display all orders
    async showAllOrder(): Promise<theTypeOfOrder[]> {
        try {
            // Connect to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Sending the SQL to the database
            const result: QueryResult =
                await openConnectionWithTheDatabase.query(
                    theSQL.SHOW_ALL_ORDER_SQL
                );
            // Close the connection to the database that is in the "Database-Of-Project/database.ts" file
            openConnectionWithTheDatabase.release();
            // Return the result
            const allOrder = result.rows;
            return allOrder;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }
    // Update specific order by ID
    async updateSpecificOrderByID(
        orderVariable: theTypeOfOrder
    ): Promise<theTypeOfOrder> {
        try {
            // Connecting to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Array of contains the id of the user and the order status
            const productArray = [
                orderVariable.id_of_user,
                orderVariable.order_status,
                orderVariable.id,
            ];
            // Sending the SQL to the database
            const result = await openConnectionWithTheDatabase.query(
                theSQL.UPDATE_SPECIFIC_ORDER_BY_ID_SQL,
                productArray
            );
            // release the connection to the database
            openConnectionWithTheDatabase.release();
            // Return the result
            const theNewOrder = result.rows[0];
            return theNewOrder;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }
    // Delete specific order by ID
    async deleteSpecificOrderByID(id: string): Promise<theTypeOfOrder> {
        try {
            // Connecting to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Sending the SQL to the database
            const result = await openConnectionWithTheDatabase.query(
                theSQL.DELETE_SPECIFIC_ORDER_BY_ID_SQL,
                [id]
            );
            // release the connection to the database
            openConnectionWithTheDatabase.release();
            // Return the result
            const theDeletedOrder = result.rows[0];
            return theDeletedOrder;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }
    // Show/Display specific order by ID
    async showSpecificOrderByID(ID: string): Promise<theTypeOfOrder> {
        try {
            // Connecting to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Sending the SQL to the database
            const result = await openConnectionWithTheDatabase.query(
                theSQL.SHOW_SPECIFIC_ORDER_BY_ID_SQL,
                [ID]
            );
            // release the connection to the database
            openConnectionWithTheDatabase.release();
            // Return the result
            const theOrder = result.rows[0];
            return theOrder;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }
    // insert the product into the user_order table
    async insertTheProductIntoTheUserOrderTable(
        theQuantityOfProduct: string,
        theIdOfTheOrder: string,
        theIdOfTheProduct: string
    ): Promise<theTypeOfOrder> {
        try {
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Array of contains the id of the user and the order status
            const productArray = [
                theQuantityOfProduct,
                theIdOfTheOrder,
                theIdOfTheProduct,
            ];
            // Sending the SQL to the database
            const result = await openConnectionWithTheDatabase.query(
                theSQL.INSERT_THE_PRODUCT_INTO_THE_USER_ORDER_TABLE_SQL,
                productArray
            );
            // release the connection to the database
            openConnectionWithTheDatabase.release();
            // Return the result
            const theOrder = result.rows[0];
            return theOrder;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }
}

export default modelOfTheProduct;
