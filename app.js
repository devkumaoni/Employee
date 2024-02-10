const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const {router, static_path} = require('./router/auth'); 

dotenv.config({ path: './config.env' });

require('./db/conn');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser())
app.use(express.json());

const PORT = process.env.PORT;

app.use(express.static(static_path));

// Routes
app.use(router);

app.listen(PORT, () => {
    console.log(`Sever running `);
});