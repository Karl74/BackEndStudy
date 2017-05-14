var http = require("http");
var PORT = 8080;

var server = http.createServer(function(req, res){

  var method = req.method.toLowerCase();
  var requestData = "";
  var output = "";

  req.on("data", function(data){
    requestData += data;
  });


  req.on("end", function(){
    output = "You just " + method + "\n";
    output += requestData.toString();
    console.log(output);
    res.end();
  });

});

server.listen(PORT,function(){
  console.log("Server Listening on: http://localhost%s", PORT);
});
