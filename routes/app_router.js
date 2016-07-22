(function(){
	"use strict";
	
	var express = require('express');
	var router = express.Router();

	var db_10x = require('../api_10x/queries_10x.js');
	var db_9x = require('../api_9x/queries_9x.js');

	//Api endpoints for 9x servers stats
	router.get('/api/9x/stats', db_9x.getAllIps_9x);
	router.get('/api/9x/stats/:id', db_9x.getSingleIp_9x);

	//Api endpoints for 10x server stats
	router.get('/api/10x/stats',db_10x.getAllIps_10x);
	router.get('/api/10x/stats/:id',db_10x.getSingleIp_10x);

	module.exports = router;

})();