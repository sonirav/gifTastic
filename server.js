var express = require("express");
var bodyParser = require("body-parser");
//var mysql = require("mysql");
var path = require("path");
//var fs = require("fs");
//var methodOverride = require("method-override");
// Requiring dependencies
var http = require("http");
var fs = require("fs");
var url = require("url");
var app = express();
var nodemailer = require("nodemailer");
var PORT= process.env.PORT || 3000;
app.use("/assets",express.static("assets"));
app.use("/assets/html",express.static("assets/html"));
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Routes Definaion
// Index.html on loading

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,"index.html"))
});

/*--------------------Routing Over----------------------------*/

app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});


