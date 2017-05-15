// A. DEPENDENCIES================================================>
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


// B. DATA ==============================================>
var characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "lea",
    name: "Princess Lea",
    role: "Sex simbol",
    age: 17,
    forcePoints: 1900
  }
];

// C. ROUTES.   ===========================================>

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res){
  res.sendFile(path.join(__dirname, "add.html"));
});
// app.get("/yoda", function(req, res){
//   res.json(characters[0]);
// });
//
// app.get("/darhmaul", function(re, res){
//   res.json(characters[1]);
// });
//
// app.get("/lea", function(req, res){
//   res.json(characters[2]);
// });

app.get("/api/:characters?", function(req, res){
  var chosen = req.params.characters;

  if (chosen){// sin cerrar
    console.log(chosen);

  for(i = 0; i < characters.length; i++){
    if(chosen === characters[i].routeName){
      res.json(characters[i]);
      return;
    }
  }//end of the loop
    res.send("This character is not found");
  } else {
    res.json(characters);
    }
});


// D. SERVER LISTNER FUNCTION ++++++++++++++++++++++++++++++>
app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
});
