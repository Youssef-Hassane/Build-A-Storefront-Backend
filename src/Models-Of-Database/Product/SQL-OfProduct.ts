// Writing the Structured Query Language (SQL) in order to create new product
// Using the key word INSERT in order to create a new product
const CREATE_PRODUCT_SQL: string = `INSERT INTO products (product_name, price, category) VALUES($1, $2, $3) RETURNING id, product_name, price, category`;

// Writing the Structured Query Language (SQL) in order to select all product
// Using the key word SELECT in order to select all product
const SHOW_ALL_PRODUCT_SQL: string = `SELECT id, product_name, price, category FROM products`;

// Writing the Structured Query Language (SQL) in order to update a specific product
// Using the key word UPDATE in order to update a specific product
const UPDATE_SPECIFIC_PRODUCT_BY_ID_SQL: string = `UPDATE products SET product_name=$1, price=$2, category=$3 WHERE id=$4 RETURNING id, product_name, price, category`;

// Writing the Structured Query Language (SQL) in order to delete a specific product
// Using the key word DELETE in order to delete a specific product
const DELETE_SPECIFIC_PRODUCT_BY_ID_SQL: string = `DELETE FROM products WHERE id=($1) RETURNING id, product_name, price, category`;

// Writing the Structured Query Language (SQL) in order to select a specific product
// Using the key word SELECT in order to select a specific product
const SHOW_SPECIFIC_PRODUCT_BY_ID_SQL: string = `SELECT id, product_name, price, category FROM products WHERE id=($1)`;

const deleteSQL = 'DELETE FROM products;';
const resetID = 'ALTER SEQUENCE products_id_seq RESTART WITH 1;';

export default {
    CREATE_PRODUCT_SQL,
    SHOW_ALL_PRODUCT_SQL,
    UPDATE_SPECIFIC_PRODUCT_BY_ID_SQL,
    DELETE_SPECIFIC_PRODUCT_BY_ID_SQL,
    SHOW_SPECIFIC_PRODUCT_BY_ID_SQL,
    deleteSQL,
    resetID,
};
