-- TABLE
CREATE TABLE 'customers'(
	id INT, first_name string, last_name string, address string,
  primary key (id)
);
CREATE TABLE 'orders' (
  id int not NULL,
  order_number int,
  customer_id int,
  product_id INT,
  PRIMARY KEY (id), FOREIGN key (customer_id) REFERENCES customers(id),
  FOREIGN key (product_id) REFERENCES products(id)
);
CREATE TABLE products (
	id INT NOT NULL,
    name STRING,
    price MONEY, stock INT,
    PRIMARY KEY (ID)
);
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
