const doRequest = require('superagent');

const MongoClient = require('mongodb').MongoClient;
const co = require('co');

const trades = require('./api/trades');
const portfolios = require('./api/portfolios');
const users = require('./api/user');

// Connection URL
const url = require('./config/config').mongoUrl;

module.exports = function (app) {
  co(function*() {
    // Connection URL
    const db = yield MongoClient.connect(url);

    // api routes
    app.use('/api/trades', trades(db));
    app.use('/api/portfolios', portfolios(db));
    app.use('/api/user', users(db));

    app.use('/auth', require('./api/auth')(db));

    app.get('/api/quote', function (request, response) {
      if (request.query.symbol && request.query.symbol.length > 0) {
        doRequest
          .get(`https://www.nseindia.com/live_market/dynaContent/live_watch/get_quote/ajaxGetQuoteJSON.jsp?symbol=${request.query.symbol}`)
          .set('Accept', 'application/json')
          .end(function (err, res) {
            if (err) {
              console.log(err);
              return;
            }
            const d = JSON.parse(res.text);
            response.json(d);
          });
      }
    });

    // All other routes should redirect to the index.html
    app.route('/*')
      .get(function (req, res) {
        res.sendFile(app.get('appPath') + '/index.html');
      });
  }).catch(function (err) {
    console.log(err.stack);
  });
};
