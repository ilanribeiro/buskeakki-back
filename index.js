require('dotenv').config();
const express = require("express");
const productRoute = require('./routes/productRoute');

const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));
app.use('/product', productRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
