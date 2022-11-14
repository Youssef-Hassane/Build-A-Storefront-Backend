-- #### Orders
-- - id
-- - id of each product in the order
-- - user_id
-- - status of order (active or complete)
CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  id_of_user BIGINT REFERENCES users(ID) NOT Null,
  order_status VARCHAR(250)
);