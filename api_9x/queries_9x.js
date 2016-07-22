(function(){
	"use strict";
	
	var connectionString = {
		host: '166.2.126.207',
    	port: 5432,
    	database: 'imagestats',
    	user: 'postgres',
    	password: '@rsac123'
	};

	var promise = require('bluebird');
	var options = {promiseLib:promise};
	var pgp = require('pg-promise')(options);
	var db = pgp(connectionString);


	//query functions
	function getAllIps_9x(req,res,next) {
		
		db.any('select * from logs')
		.then(function (data) {
		  res.status(200)
		    .json({
		      status: 'success',
		      data: data,
		      message: 'Retrieved ALL puppies'
		    });
		})
		.catch(function (err) {
		  return next(err);
		});   
	}


	function getSingleIp_9x(req, res) {
		console.log("Single IP");
	}

	module.exports = {
		getSingleIp_9x:getSingleIp_9x,
		getAllIps_9x:getAllIps_9x
	};

	


}());