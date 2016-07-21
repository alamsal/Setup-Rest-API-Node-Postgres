(function(){
	"use strict";
	
	var db = require('./queries.js');

	module.exports = function(app){

		app.post('',function(req,res){

		});

		app.get('/stat',function(req,res){
			res.send(db.getSingleIp());
		});

		app.get('/stat/:id',function(req,res){
			res.send("hello");
		});





	};


})();