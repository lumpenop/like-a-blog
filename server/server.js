const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const port = process.env.SERVER_PORT;

app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use('/', '');

app.listen(port, ()=>{
    console.log(`server is starting on ${port}`);
})