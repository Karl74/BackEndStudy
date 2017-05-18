var tableData = require("../data/tableData.js");

module.exports = function (app){
app.get("/api/tables", function(req, res){
  res.json(tableData);
  console.log(tableData);
});



  }//end of module,exports

// "api/tables"
// "/api/waitlist"
