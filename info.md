-- CREATE TABLE product (
--     product_id SERIAL PRIMARY KEY NOT NULL,
--     name VARCHAR(50) NOT NULL,
--     description VARCHAR(100) NOT NULL,
--     price INTEGER NOT NULL,
--     image_url TEXT NOT NULL
-- );

    getOne: (req,res,next) => {
        const dbInstance = req.app.get('db')
        // const {product_id} = req.params

        dbInstance.read_product()
        .then(product => res.status(200).send(product))
        .catch( err => {
            res.status(500).send({errorMessage:"uh oh"});
            console.log(err)
        });
    },