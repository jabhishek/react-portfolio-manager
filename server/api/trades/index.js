const express = require('express');
const co = require('co');

module.exports = function (db) {
    // Get the collection
  const trades = db.collection('trades');

  const router = express.Router();
  router.get('/', function (req, res) {
    co(function*() {
      const docs = yield trades.find().toArray();
      res.json({
        'trades': docs
      }).end();
    });
  });

  router.post('/', function (req, res) {
    co(function*() {
            // const response = yield trades.insertOne({user:req.body.user});
      res.json({
        inserted: 0
      }).end();
    });
  });

  return router;
};
