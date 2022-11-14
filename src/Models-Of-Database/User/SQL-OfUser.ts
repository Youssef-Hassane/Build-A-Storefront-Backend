// Writing the Structured Query Language (SQL) in order to create new user
// Using the key word INSERT in order to create a new user
const CREATE_USER_SQL: string = `INSERT INTO users (first_name, last_name, password) VALUES($1, $2, $3) RETURNING id, first_name, last_name`;

// Writing the Structured Query Language (SQL) in order to select all user
// Using the key word SELECT in order to select all user
const SHOW_ALL_USER_SQL: string = `SELECT id, first_name, last_name FROM users`;

// Writing the Structured Query Language (SQL) in order to UPDATE a specific user
// Using the key word UPDATE in order to UPDATE a specific user
const UPDATE_SPECIFIC_USER_BY_ID_SQL: string = `UPDATE users SET first_name=$1, last_name=$2, Password=$3 WHERE id=$4 RETURNING ID, first_name, last_name`;

// Writing the Structured Query Language (SQL) in order to delete a specific user
// Using the key word DELETE in order to delete a specific user
const DELETE_SPECIFIC_USER_BY_ID_SQL: string = `DELETE FROM users WHERE id=($1) RETURNING id, first_name, last_name`;

// Writing the Structured Query Language (SQL) in order to select a specific user
// Using the key word SELECT in order to select a specific user
const SHOW_SPECIFIC_USER_BY_ID_SQL: string = `SELECT id, first_name, last_name FROM users WHERE id=($1)`;

// Writing the Structured Query Language (SQL) in order to select the password
// Using the key word SELECT in order to select the password
const AUTH_User_By_FirstName_LastName_Password_SQL: string = `SELECT Password FROM users WHERE first_name=($1) AND last_name=($2)`;

// Writing the Structured Query Language (SQL) in order to select the ID, first_name, and last_name
// Using the key word SELECT in order to select the ID, first_name, and last_name
const SELECT_ID_FirstName_LastName_FROM_users_SQL: string = `SELECT id, first_name, last_name FROM users WHERE first_name=($1) AND last_name=($2)`;

const deleteSQL = 'DELETE FROM users;';
const resetID = 'ALTER SEQUENCE users_id_seq RESTART WITH 1;';

export default {
    CREATE_USER_SQL,
    SHOW_ALL_USER_SQL,
    UPDATE_SPECIFIC_USER_BY_ID_SQL,
    DELETE_SPECIFIC_USER_BY_ID_SQL,
    SHOW_SPECIFIC_USER_BY_ID_SQL,
    AUTH_User_By_FirstName_LastName_Password_SQL,
    SELECT_ID_FirstName_LastName_FROM_users_SQL,
    deleteSQL,
    resetID,
};
