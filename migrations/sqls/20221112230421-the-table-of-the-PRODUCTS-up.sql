-- #### Product
-- -  id
-- - name
-- - price
-- - [OPTIONAL] category
CREATE TABLE products(
  id SERIAL PRIMARY KEY NOT NULL,
  product_name VARCHAR(250) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  category VARCHAR(250) NOT NULL
);