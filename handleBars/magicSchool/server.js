var express = require("express");
var mysql = require('mysql');

var app = express();
var PORT = 3000;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Apestosa19!',
  database : "seinfeld"
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

app.get("/", function(req, res){
  res.send("Hello!! :)");
});

app.get("/cast", function(req, res){
  connection.query("SELECT * FROM actors ORDER BY id", function (err, result){
    if(err){
      throw err;
    }
    html = "<h1> Seinfeld  Cast</h1>";
    html +="<ul>";
    for(var i = 0; i < result.length; i ++ ){
      html += "<li><p>"+result[i].id+"</p><p>"+result[i].name+"</p><p>"+result[i].coolness_points+"</p><p>"+result[i].attitude+"</p></li>";
    }
    html += "</ul>";
    res.send(html);
  });
});

app.get("/coolness", function(req,res){
    connection.query("SELECT * FROM actors ORDER BY coolness_points", function(err, result){
      if(err){
        throw err;
      }
      html = "<h1> Seinfeld  Cast</h1><h2> Order by Coolness</h2>";
      html +="<ul>";
      for(var i = 0; i < result.length; i ++ ){
        html += "<li><p>"+result[i].id+"</p><p>"+result[i].name+"</p><p>"+result[i].coolness_points+"</p><p>"+result[i].attitude+"</p></li>";
      }
      html += "</ul>";
      res.send(html);
    });
});

app.get("/attitude", function(req, res){
  var query = "SELECT * FROM actors ORDER BY attitude"
  connection.query(query,function (err, result){
    if(err){
      throw err;
    }
    html = "<h1> Seinfeld  Cast</h1><h2> Order by Attitude</h2>";
    html +="<ul>";
    for(var i = 0; i < result.length; i ++ ){
      html += "<li><p>"+result[i].id+"</p><p>"+result[i].name+"</p><p>"+result[i].coolness_points+"</p><p>"+result[i].attitude+"</p></li>";
    }
    html += "</ul>";
    res.send(html);
  });
})






app.listen(PORT);
