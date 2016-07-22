(function(){
	"use strict";
	
	var connectionString = {
		host: '166.2.126.207',
    	port: 5432,
    	database: 'imagestats_10',
    	user: 'postgres',
    	password: '@rsac123'
	};

	var promise = require('bluebird');
	var options = {promiseLib:promise};
	var pgp = require('pg-promise')(options);
	var db = pgp(connectionString);


	//query functions
	function getAllIps_10x(req,res,next) {		
		db.any('select * from logs')
		.then(function (data) {
		  res.status(200)
		    .json({
		      status: 'success',
		      data: data,
		      message: 'Retrieved log 10x'
		    });
		})
		.catch(function (err) {
		  return next(err);
		});   
	}


	function getSingleIp_10x(req, res) {
		console.log("Single IP");
	}

	module.exports = {
		getSingleIp_10x:getSingleIp_10x,
		getAllIps_10x:getAllIps_10x
	};

	


}());