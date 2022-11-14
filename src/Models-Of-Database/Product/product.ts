import { PoolClient, QueryResult } from 'pg';
import theDatabase from '../../Database-Of-Project/database';
import theTypeOfUser from './typeOfProduct';
import theSQL from './SQL-OfProduct';

export class modelOfTheProduct {
    // Create a new product
    async createProduct(variable: theTypeOfUser): Promise<theTypeOfUser> {
        try {
            // Connect to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Array that contains the product_name, price, category
            const productArray = [
                variable.product_name,
                variable.price,
                variable.category,
            ];
            // Sending the SQL and the array to the database
            const result: QueryResult =
                await openConnectionWithTheDatabase.query(
                    theSQL.CREATE_PRODUCT_SQL,
                    productArray
                );
            // Close the connection to the database that is in the "Database-Of-Project/database.ts" file
            openConnectionWithTheDatabase.release();
            // Return the result
            const product = result.rows[0];
            return product;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }

    // Show all the products in the database
    async showAllProduct(): Promise<theTypeOfUser[]> {
        try {
            // Connect to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Sending the SQL and the array to the database
            const result: QueryResult =
                await openConnectionWithTheDatabase.query(
                    theSQL.SHOW_ALL_PRODUCT_SQL
                );
            // Close the connection to the database that is in the "Database-Of-Project/database.ts" file
            openConnectionWithTheDatabase.release();
            // Return the result
            const product = result.rows;
            return product;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }

    // Update specific product by ID from the database
    async updateSpecificProductByID(
        productVariable: theTypeOfUser
    ): Promise<theTypeOfUser> {
        try {
            // Connect to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Array that contains the product_name, price, category, and id
            const productArray = [
                productVariable.product_name,
                productVariable.price,
                productVariable.category,
                productVariable.id,
            ];
            // Sending the SQL and the array to the database
            const result = await openConnectionWithTheDatabase.query(
                theSQL.UPDATE_SPECIFIC_PRODUCT_BY_ID_SQL,
                productArray
            );
            // Close the connection to the database that is in the "Database-Of-Project/database.ts" file
            openConnectionWithTheDatabase.release();
            // Return the result
            const product = result.rows[0];
            return product;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }

    // Delete specific Product by ID from the database
    async deleteSpecificProductByID(ID: string): Promise<theTypeOfUser> {
        try {
            // Connect to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Sending the SQL and the array to the database
            const result = await openConnectionWithTheDatabase.query(
                theSQL.DELETE_SPECIFIC_PRODUCT_BY_ID_SQL,
                [ID]
            );
            // Close the connection to the database that is in the "Database-Of-Project/database.ts" file
            openConnectionWithTheDatabase.release();
            // Return the result
            const product = result.rows[0];
            return product;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }

    // Show/Display specific product by ID from the database
    async showSpecificProductByID(ID: string): Promise<theTypeOfUser> {
        try {
            // Connect to the database that is in the "Database-Of-Project/database.ts" file
            const openConnectionWithTheDatabase: PoolClient =
                await theDatabase.connect();
            // Sending the SQL and the array to the database
            const result = await openConnectionWithTheDatabase.query(
                theSQL.SHOW_SPECIFIC_PRODUCT_BY_ID_SQL,
                [ID]
            );
            // Close the connection to the database that is in the "Database-Of-Project/database.ts" file
            openConnectionWithTheDatabase.release();
            // Return the result
            const product = result.rows[0];
            return product;
        } catch (error) {
            // handle error
            throw new Error(`${error}`);
        }
    }
}

export default modelOfTheProduct;
