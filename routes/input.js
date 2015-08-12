var express = require('express');
var router = express.Router();
var util = require('util');

router.get('/', function(req, res, next) {
	var db = req.db;
	db.class.list()
	.then(function (result) {
		//console.log(result);
		var temp = [];
		for (var i = 0; i < result.length; i++) {
			temp[i] = {};
			temp[i].name = result[i].name;
			temp[i].properties = [];
			for (var j = 0; j < result[i].properties.length; j++) {
				temp[i].properties[j] = result[i].properties[j].name;
			}
		}
		res.render('input', {data: temp});
	});
});

module.exports = router;
