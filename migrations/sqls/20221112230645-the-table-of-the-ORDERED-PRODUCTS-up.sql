-- #### Orders
-- - id
-- - id of each product in the order
-- - quantity of each product in the order
-- - user_id
-- - status of order (active or complete)
CREATE TABLE user_order(
  id SERIAL PRIMARY KEY,
  quantity INTEGER,
  id_of_the_order BIGINT REFERENCES orders(id),
  id_of_the_product BIGINT REFERENCES products(id)
);