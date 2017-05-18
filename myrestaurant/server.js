var express = require("express");
var app = express()

var PORT = 3000;

var bodyParser = require('body-parser')
var path = require("path")

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function(){
  console.log("App listening on port: " + PORT);
});
