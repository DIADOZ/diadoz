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

router.post('/insert', function(req, res){
	// parse through data from form
	var mediaData = {
		id: 1,
		title: req.body.title,
		primaryArtist: req.body.primaryArtist,
		primaryType: req.body.primaryType,
		mediaTypes: req.body.mediaTypes,
		body: req.body.body,
		filePath: req.body.filePath,
		url: req.body.url,
		embed: req.body.embed
	};

	console.log(mediaData);

	var data = new media(mediaData);
	data.save(function (err, prod) {
		if (err) return console.log(err);
	});

	res.redirect('/');
});

module.exports = router;