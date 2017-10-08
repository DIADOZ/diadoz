var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../diadoz-UI/homeapp/src/', 'index.html'));
  console.log('get main3.html success');
});

module.exports = router;