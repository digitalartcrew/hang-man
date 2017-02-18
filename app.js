//Express
var express = require('express');
app = express();
methodOverride = require('method-override'),
path = require("path"),
session = require('express-session'),

app.use(express.static(__dirname + '/public'));


app.use(session({
  secret: 'awesome',
  resave: true,
    saveUninitialized: true
}));



//Body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// use method-override
app.use(methodOverride('_method'));



app.listen(process.env.PORT || 3000, function(req,res){
  console.log("App running on localost 3000");
});