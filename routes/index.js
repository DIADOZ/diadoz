var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });

  res.sendFile(__dirname + '/diadoz-UI/main/html/main3.html');
  console.log('get main3.html success');
});

module.exports = router;