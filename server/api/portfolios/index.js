var express = require('express');
var co = require('co');

module.exports = function (db) {
	// Get the collection
	var portfolios = db.collection('portfolios');

	var router = express.Router();
	router.get('/', function (req, res) {
		co(function*() {
			var docs = yield portfolios.find().toArray();
			res.json({
				'portfolios': docs
			}).end()
		});
	});

	router.post('/', function (req, res) {
		co(function*() {
			console.log(req.body.portfolio);
			const response = yield portfolios.insertOne({portfolio:req.body.portfolio});
			console.log(response.result);
			res.json({
				inserted: 0
			}).end();
		}).catch(function(err) {
			console.log(err);
			res.status(400)
				.json({
				error: err
			});
		});
	});

	return router;
};