(function(){

	"use stric";
	
	var server_port =3000;
	
	var express = require('express');
	var app = express();

	app.get('/',function(req,res){
		res.send("hello world");
	});

	var server = app.listen(server_port,function(){
		console.log("Server running at localhost:3000");
	});

}());

