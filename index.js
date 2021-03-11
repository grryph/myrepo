
const bodyParser = require('body-parser');
const mongoose = require('mongoose');const express = require('express');

const app = new express();

const Post = require('./database/models/Post');
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))

// app.use(express.static('public'));

app.get("/");
app.post("/posts/store", storePostController);
app.post("/posts/get", getPostController);


app.listen(4000, () => {
    console.log('App listening on port 4000')
});