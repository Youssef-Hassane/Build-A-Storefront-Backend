// Writing the Structured Query Language (SQL) in order to create new order
// Using the key word INSERT in order to create a new order
const CREATE_ORDER_SQL: string =
    'INSERT INTO orders (id_of_user, order_status) VALUES($1, $2) RETURNING ID, id_of_user, order_status';

// Writing the Structured Query Language (SQL) in order to select all order
// Using the key word SELECT in order to select all order
const SHOW_ALL_ORDER_SQL: string =
    'SELECT orders.*, array_agg(row_to_json(user_order)) AS products FROM orders FULL JOIN user_order ON orders.id = user_order.id_of_the_order GROUP BY orders.id';

// Writing the Structured Query Language (SQL) in order to select a specific order
// Using the key word SELECT in order to select a specific order
const UPDATE_SPECIFIC_ORDER_BY_ID_SQL: string =
    'UPDATE orders SET id_of_user=$1, order_status=$2 WHERE ID=$3 RETURNING id, id_of_user, order_status, products';

// Writing the Structured Query Language (SQL) in order to delete a specific order
// Using the key word DELETE in order to delete a specific order
const DELETE_SPECIFIC_ORDER_BY_ID_SQL: string =
    'DELETE FROM orders WHERE ID=($1) RETURNING id, id_of_user, order_status, products';

// Writing the Structured Query Language (SQL) in order to select a specific user
// Using the key word SELECT in order to select a specific user
const SHOW_SPECIFIC_ORDER_BY_ID_SQL: string =
    'SELECT ID, id_of_user, order_status, products FROM orders WHERE id=($1)';

// Writing the Structured Query Language (SQL) in order to create new user order in the user_order table
// Using the key word INSERT in order to create new user order in the user_order table
const INSERT_THE_PRODUCT_INTO_THE_USER_ORDER_TABLE_SQL: string =
    'INSERT INTO user_order (quantity, id_of_the_order, id_of_the_product) VALUES($1, $2, $3) RETURNING *';

const deleteSQL = 'DELETE FROM orders;';
const resetID = 'ALTER SEQUENCE orders_id_seq RESTART WITH 1;';

export default {
    CREATE_ORDER_SQL,
    SHOW_ALL_ORDER_SQL,
    UPDATE_SPECIFIC_ORDER_BY_ID_SQL,
    DELETE_SPECIFIC_ORDER_BY_ID_SQL,
    SHOW_SPECIFIC_ORDER_BY_ID_SQL,
    INSERT_THE_PRODUCT_INTO_THE_USER_ORDER_TABLE_SQL,
    deleteSQL,
    resetID,
};
