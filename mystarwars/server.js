// A. DEPENDENCIES================================================>
var express = require("express");

var app = express();

var PORT = 3000;

// B. DATA ==============================================>
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

// C. ROUTES.   ===========================================>

app.get("/", function(req, res){
  res.send("Welcome to the SRAW RATS Page");
});

// D. SERVER LISTNER FUNCTION ++++++++++++++++++++++++++++++>
app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
});
