const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://admin-daniel:B9jrB3NuzjGQzx9x@cluster0.8gxvz.azure.mongodb.net/pixeldb";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use(express.static('./frontend/build'));

const imagesRouter = require('./routes/images');
app.use('/api', imagesRouter);

app.use(express.static(path.join(__dirname, './frontend/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/build'))
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});