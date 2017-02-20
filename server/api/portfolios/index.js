const express = require('express');
const co = require('co');
const authService = require('../auth/auth.service');

module.exports = function (db) {
  // Get the collection
  const portfolios = db.collection('portfolios');

  const router = express.Router();

  router.get('/', authService.authenticate, function (req, res) {
    co(function*() {
      const docs = yield portfolios.find().toArray();
      res.json({
        'portfolios': docs
      }).end();
    });
  });

  router.post('/', authService.authenticate, function (req, res) {
    co(function*() {
      const response = yield portfolios.insertOne({portfolio: req.body.portfolio});
      res.json({
        _id: response.insertedId,
        inserted: response.insertedCount
      }).end();
    }).catch(function (err) {
      res.status(400)
        .json({
          error: {
            message: err.message
          }
        });
    });
  });

  return router;
};
