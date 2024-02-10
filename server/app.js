const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const express = require('express');
const cors= require('cors');

const app = express();
const router = require('./router/auth'); 

dotenv.config({ path: './config.env' });

const corsOption ={
    origin: '',
    method: ["GET", "POST"],
    Credential: true,
}

require('./db/conn');

app.use(cors(corsOption));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser())
app.use(express.json());

const PORT = process.env.PORT;

// Routes
app.use(router);

app.listen(PORT, () => {
    console.log(`Sever running `);
});