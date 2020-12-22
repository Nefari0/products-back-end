module.exports = {
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const {name,description,price,image_url} = req.body
    
        dbInstance.create_product([name,description,price,image_url])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "uh oh"});
            console.log(err)
          } );
      },
    getOne: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const {product_id} = req.params
    
        dbInstance.read_product(product_id)
          .then( product => res.status(200).send( product ) )
          .catch( err => {
            res.status(500).send({errorMessage: "uh oh"});
            console.log(err)
          } );
      },
    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_products()
          .then( product => res.status(200).send( product ) )
          .catch( err => {
            res.status(500).send({errorMessage: "uh oh"});
            console.log(err)
          } );
      },
    update: (req,res,next) => {
        const dbInstance = req.app.get('db')
        const { product_id } = req.params
        const { description } = req.body

        dbInstance.update_product([product_id, description])
        .then((product) => {res.status(200).send(product)})
        .catch( err => {
            res.status(500).send({errorMessage: "uh oh"})
            console.log(err)
        })
    },
    delete: (req,res,next) => {
        const dbInstance = req.app.get('db')
        const { product_id } = req.params

        dbInstance.delete_product([product_id])
        .then(res.status(200) )

        // dbInstance.delete_product()
    }
}