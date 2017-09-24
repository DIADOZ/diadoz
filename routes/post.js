var express = require('express');
var router = express.Router();

var post = require('../app/models/post');

// Get Home Page
router.get('/', function (req, res){
	//get all Posts
	//need to add limit and stream based get
	var cursor = post.find(function(err, data){
		if (err){
			res.send(err);
		}

        res.json(data);
	});
});

router.get('/:postId', function(req, res){
	var cursor = post.find({
		id: req.params.postId
	}, function(err, data){
		if (err){
			res.send(err);
		}

        res.json(data);
	});
});

// router.post('/insert', function(req, res){
// 	var postData = {
// 		title: req.body.title,
// 		artist: req.body.artist,
// 		publishDate: Date.now(),
// 		published: req.body.published
// 	};

// 	console.log(postData);

// 	var data = new Post(postData);
// 	data.save();

// 	res.redirect('/post');
// });

module.exports = router;

//Code in later

// router.post('/update', function(req, res, next){
// 	var id = req.body.id;

// 	Post.findById(id, function(err, doc){
// 		if(err){
// 			console.error('error, post not found');
// 		}
// 		doc.title = req.body.title;
// 		doc.artist = req.body.artist;
// 		doc.publishDate = req.body.publishDate;
// 		doc.published = req.body.published;
// 		doc.save();
// 	});

// 	res.redirect('/');
// });

// router.post('/delete', (req, res, next) => {
// 	var id = req.body.id;
// 	Post.findByIdAndRemove(id).exec();
// 	res.redirect('/');
// });