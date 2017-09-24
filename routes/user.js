var express = require('express');
var router = express.Router();

var user = require('../app/models/user');

// get all users
router.get('/', function (req, res){
	//get all Posts
	//need to add limit and stream based get
	var cursor = user.find(function(err, data){
		if (err){
			res.send(err);
		}

        res.json(data);
	});
});

// get user by id
router.get('/:userId', function(req, res){
	var cursor = user.find({
		id: req.params.userId
	}, function(err, data){
		if (err){
			res.send(err);
		}

        res.json(data);
	});
});

module.exports = router;