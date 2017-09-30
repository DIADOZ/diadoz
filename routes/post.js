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

router.post('/insert', sessionCheck, function(req, res){
	// parse through data from form
	var postData = {
		id: 1,
		headline: req.body.headline,
		subHeadline: req.body.subHeadline,
		postType: req.body.postType,
		primaryImage: req.body.primaryImage,
		publishDate: new Date(),
		published: req.body.published,
		publishedBy: req.body.publishedBy,
		media: req.body.media,
		body: req.body.body
	};

	console.log(postData);

	var data = new post(postData);
	data.save(function (err, prod) {
		if (err) return console.log(err);
	});

	res.redirect('/');
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

router.put('/update', sessionCheck, function(req, res, next){
	var id = req.body.id;

	// maybe change to findByIdAndUpdate once _ids are setup
	post.findOneAndUpdate({'id': id}, {
		headline: req.body.headline,
		subHeadline: req.body.subHeadline,
		postType: req.body.postType,
		primaryImage: req.body.primaryImage,
		publishDate: new Date(),
		published: req.body.published,
		publishedBy: req.body.publishedBy,
		media: req.body.media,
		body: req.body.body
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
	post.remove({'id': id},function(err){
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