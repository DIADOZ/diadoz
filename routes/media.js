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

router.post('/insert', sessionCheck, function(req, res){
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

router.put('/update', sessionCheck, function(req, res, next){
	var id = req.body.id;

	// maybe change to findByIdAndUpdate once _ids are setup
	media.findOneAndUpdate({'id': id}, {
		title: req.body.title,
		primaryArtist: req.body.primaryArtist,
		primaryType: req.body.primaryType,
		mediaTypes: req.body.mediaTypes,
		body: req.body.body,
		filePath: req.body.filePath,
		url: req.body.url,
		embed: req.body.embed
	}, {new: true}, function(err, doc){
		if(err){
			console.error('error, post not found');
		} else {
			console.log('Document ' + id + ' has been updated successfully');
		}
		
		res.json({message:  'Document ' + id + ' has been updated successfully'});
	});
});

router.delete('/delete', sessionCheck, (req, res, next) => {
	var id = req.body.id;
	media.remove({'id': id},function(err){
		if (err){
			console.error('error deleting document');
		}
		res.json({message: 'Document successfully deleted'});
	});
});

function sessionCheck(req,res,next){
	if(req.session.user) {
		next();
	} else {
		res.send(401,'authorization failed');
	}
}

module.exports = router;