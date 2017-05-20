var express = require("express");
var mysql = require('mysql');

var app = express();
var PORT = 3000;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Apestosa19!',
  database : "wizard_schools_db"
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

app.get("/", function(req, res){
    connection.query("SELECT * FROM schools", function(err, result){
      if(err){
        throw err;
      };
      console.log(result);

      html = "<h1> Magical Schools </h1>";
      html += "<ul>";

      for(var i = 0; i < result.length; i++){
          html += "<li><p>"+result[i].id+"</p><p>"+result[i].name+"</p></li>";
      };

      html += "</ul>";
      res.send(html);
  });// == END OF connection.query ==
}); //END OF ROUTE "/"


app.listen(PORT);
