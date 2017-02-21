const express = require('express');
const co = require('co');
const authService = require('../auth/auth.service');

module.exports = function (db) {
  // Get the collection
  const portfolios = db.collection('portfolios');

  const router = express.Router();

  router.get('/', authService.authenticate, function (req, res) {
    co(function*() {
      const docs = yield portfolios.find({ userName: req.user.id }).toArray();
      res.json({
        'portfolios': docs
      }).end();
    });
  });

  router.post('/', authService.authenticate, function (req, res) {
    co(function*() {
      const response = yield portfolios.insertOne({portfolio: req.body.portfolio, userName: req.user.id});
      res.json({
        _id: response.insertedId,
        inserted: response.insertedCount
      }).end();
    }).catch(function (err) {
      console.log(err);
      let message = '';
      switch (err.code) {
        case '11000': {
          message = 'Portfolio already exists. Please choose another portfolio name';
          break;
        }
        default: {
          message = 'Error creating portfolio. Please try again.';
          break;
        }
      }
      res.status(400)
        .send({
          message: message
        });
    });
  });

  return router;
};
