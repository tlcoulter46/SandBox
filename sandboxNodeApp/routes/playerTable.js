var playerList = require('../data/Player.json');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('playerTable', {title: 'Players', playerList});
});

module.exports = router;
