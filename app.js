var express = require("express");
 var app = express();

 /* serves main page if no specific file is requested*/
 app.get("/", function(req, res) {
    res.sendfile('index.htm')
 });


 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendfile( __dirname + req.params[0]); 
 });

 var port = process.env.PORT || 8080;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });