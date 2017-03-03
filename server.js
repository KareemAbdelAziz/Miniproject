//require depenciess
var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/portfolio";

var app = express();
//app.use(require("./Routes/PagesRoutes"));

app.set('view engine', 'ejs');

// configuring app
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));

mongoose.connect(DB_URI);
app.use(router);


// starting the server
app.listen(2008, function(){
    console.log("server is listening on port 2008");
})
