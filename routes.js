(function(){
	"use strict";
	
	var db = require('./queries.js');
	var express = require('express');
	var router = express.Router();


	router.get('/stats', db.getAllIps);
	router.get('/stats/:id', db.getSingleIp);

	module.exports = router;
	
	/*
	module.exports = function(app){

		app.post('',function(req,res){

		});

		app.get('/stat',function(req,res){
			console.log(db.getAllIps());

			res.send(db.getAllIps(req,res));
		});

		app.get('/stat/:id',function(req,res){
			res.send("hello");
		});





	};*/


})();