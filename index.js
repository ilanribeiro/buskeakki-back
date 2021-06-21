require('dotenv').config();
const express = require("express");
const cors = require('cors');
const productRoute = require('./routes/productRoute');

const port = process.env.PORT;
const app = express();

app.use(express.json({ limit:'50mb' }));
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.use('/produtos', productRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
