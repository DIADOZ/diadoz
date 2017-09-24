var express = require('express');
var router = express.Router();

var media = require('../app/models/media');

// get all users
router.get('/', function (req, res){
	//get all Posts
	//need to add limit and stream based get
	var cursor = media.find(function(err, data){
		if (err){
			res.send(err);
		}

        res.json(data);
	});
});

// get user by id
router.get('/:mediaId', function(req, res){
	var cursor = media.find({
		id: req.params.mediaId
	}, function(err, data){
		if (err){
			res.send(err);
		}

        res.json(data);
	});
});

module.exports = router;