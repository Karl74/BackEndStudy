var http = require("http");
var PORT = 8080;

var server = http.createServer(function(req, res){

  var requestData = "";

  req.on("data", function(data){
    requestData += data;
    console.log("You just push some data to the server!! ");
    console.log("Your data was: " + requestData):;
  });

  req.on ("end", function(){
    res.write("<html> <head> <title>Hello Noder! </title></head><body>");
    res.write("<h1>Thank you!!! </h1>");
    res.write("</body></html>")
  });
})// END OF server

server.listen(PORT, function(){
  console.log("Server listening on: localhost", PORT);
});
