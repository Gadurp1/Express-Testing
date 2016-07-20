var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var
    craigslist = require('node-craigslist');
    client = craigslist({
      city : 'chicago'
    }),
    options = {
    category : 'sss',
    maxAsk : '4000',
    minAsk : '100'
  };

  client.search(options,'lolla vip', function (err, listings) {

    var sort=listings.sort(function(a,b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });

    res.render('index', {results: sort, title: 'Test'});
  });
});

module.exports = router;
