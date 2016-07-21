(function(){
	"use strict";
	
	var promise = require ('bluebird');
	var promiseOptions = {promiseLib:promise};

	var pgPromise = require('pg-promise')(promiseOptions);
	
	var connectionString = {
		host: '166.2.126.207',
    	port: 5432,
    	database: 'imagestats',
    	user: 'postgres',
    	password: '@rsac123'
	};

	
	var database = pgPromise(connectionString);


	//query functions
	function getAllIps(req, res) {
	  database.any('SELECT logs."timestamp", logs.ip, logs.hostname, logs.status, logs.service, logs.type, logs."time" FROM public.logs ORDER BY logs."timestamp" DESC LIMIT 100 ')
	    .then(function (data) {
	      res.status(200)
	        .json({
	          status: 'success',
	          data: 45,
	          message: 'Retrieved ALL logs'
	        });
	    })
	    .catch(function (err) {
	      console.log(err);
	    });
	}

	function getSingleIp(req, res) {
	  //var ipId = parseInt(req.params.Ip);
	  database.one('select * from logs LIMIT 100')
	    .then(function (data) {
	      res.status(200)
	        .json({
	          status: 'success',
	          data: data,
	          message: 'Retrieved ONE Ip from Logs'
	        });
	    })
	    .catch(function (err) {
	      return (err);
	    });
	}

	module.exports = {
		getSingleIp:getSingleIp,
		getAllIps:getAllIps
	};


}());