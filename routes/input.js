var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var db = req.db;
	db.class.list()
	.then(function (result) {
		console.log('There are ' + result.length + ' classes in the db:', result);
		res.render('input', {data:result});
	});
});

module.exports = router;
