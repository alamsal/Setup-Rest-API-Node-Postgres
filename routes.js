(function(){
	"use strict";
	
	module.exports = function(app){

		app.post('',function(req,res){

		});

		app.get('/stat',function(req,res){
			res.send("hi");
		});

		app.get('/stat/:id',function(req,res){
			res.send("hello");
		});

		



	};


})();