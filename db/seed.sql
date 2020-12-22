CREATE TABLE product (
    product_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    image_url TEXT NOT NULL
);

INSERT INTO product (name, description, price, image_url)

VALUE('NAME','INITIAL',31415,'NO.IMAGE.COM')