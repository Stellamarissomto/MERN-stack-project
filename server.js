const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./config/db');




// server setup
const app = express();
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`) 
});


//load env files
dotenv.config({ path: './config/config.env'});

app.use(cors());
app.use(express.json());

// connect the database
connectDb();