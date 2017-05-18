var tableData = require("../data/tableData.js");
var waitingList = require("../data/waitinglistData.js")

module.exports = function (app){

app.get("/api/tables", function(req, res){
  res.json(tableData);
  console.log(tableData);
});

app.post("/api/new",function(req,res){
  if(tableData.length < 5){
    tableData.push(req.body);
  }else {
    waitingList.push(req.body);
  }
  res.json(tableData);
console.log(waitingList);
});

app.get("/api/waitlist", function(req, res){
  res.json(waitingList);
  console.log(waitingList);
});


  }//end of module,exports

// "api/tables"
// "/api/waitlist"
