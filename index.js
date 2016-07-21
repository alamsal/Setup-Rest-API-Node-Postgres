(function(){

	"use stric";
	
	var server_port =3000;
	
	var express = require('express');
	var app = express();

	//will let pull POST contents from HTTP requests
	var bodyParser = require('body-parser');
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ 
		extended:true
	}));





	var router = require("./routes.js")(app);

	var server = app.listen(server_port,function(){
		console.log("Server running at localhost:3000");
	});

}());

