var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer');
var postModule = require('./src/postModule');

var app = express();
app.use(cors());


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-

app.use("/post", postModule);

app.listen(3010, function() {
    console.log("Server started");
});