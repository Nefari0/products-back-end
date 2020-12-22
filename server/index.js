require("dotenv").config();
const express = require("express");
const massive = require("massive");
const prodCtrl = require("./productController");
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

app.get("/api/product", prodCtrl.getAll);
app.get("/api/product/:product_id", prodCtrl.getOne);
app.post("/api/product", prodCtrl.create);
app.put("/api/product/:product_id", prodCtrl.update);
app.delete("/api/product/:product_id", prodCtrl.delete);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
    app.listen(SERVER_PORT, () => {
      console.log(`Server throwin out vibes on ${SERVER_PORT}.`);
    });
  })
  .catch((err) => console.log(err));
