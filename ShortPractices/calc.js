var express = require("express");
var app = express();

var PORT = 5000;

app.get("/", function(req, res){
  res.send("Hello");
});

app.get("/:operation/:firstNum/:secondNum", function(req,res){
  var operation = req.params.operation;
  var first = parseInt(req.params.firstNum);
  var second = parseInt(req.params.secondNum);
  var result;

  switch (operation) {
    case "add":
    result = first + second;
    break;
    case "subtract":
    result = first - second;
    break;
    case "multiply":
    result = first * second;
    break;
    case "divide":
    result = first / second;
    break;
    default:
    result =
    "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  };
  res.send(result.toString());
});

app.listen(PORT, function(){
  console.log("Listen at "+ PORT);
});
