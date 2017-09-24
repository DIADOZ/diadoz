var express = require('express');
var router = express.Router();

var entity = require('../app/models/entity');

// get all users
router.get('/', function (req, res){
	//get all Posts
	//need to add limit and stream based get
	var cursor = entity.find(function(err, data){
		if (err){
			res.send(err);
		}

        res.json(data);
	});
});

// get user by id
router.get('/:entityId', function(req, res){
	var cursor = entity.find({
		id: req.params.entityId
	}, function(err, data){
		if (err){
			res.send(err);
		}

        res.json(data);
	});
});

module.exports = router;