var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId; 

var post = require('../models/post');

// Get Home Page
router.get('/', function (req, res){
	var pageNumber = parseInt(req.query.pageNumber);
	//get all Posts
	//need to add limit and stream based get
	var cursor = post.paginate({published: true}, {page: pageNumber, limit: 3, sort: { publishDate: -1 }})
	.then(function(result){
		res.json(result.docs);
	});
});

//get post by id
// router.get('/:postId', function(req, res){
// 	var cursor = post.findOne({
// 		_id: req.params.postId
// 	}, function(err, data){
// 		if (err){
// 			res.send(err);
// 		}

//         res.json(data);
// 	});
// });

function slugify(text) {
	return text.toString().toLowerCase()
		.replace(/\s+/g, '-')        // Replace spaces with -
		.replace(/[^\w\-]+/g, '')   // Remove all non-word chars
		.replace(/\-\-+/g, '-')      // Replace multiple - with single -
		.replace(/^-+/, '')          // Trim - from start of text
		.replace(/-+$/, '');         // Trim - from end of text
}

//get post by URL
router.get('/:customURL', function(req, res){
	var cursor = post.findOne({
		customURL: req.params.customURL
	}, function(err, data){
		if (err){
			res.send(err);
		}

        res.json(data);
	});
});

router.get('/all', function (req, res){
	//get all Posts
	//need to add limit and stream based get
	var cursor = post.find(function(err, data){
		if (err){
			res.send(err);
		}

        res.json(data);
	});
});

//insert session once done testing
router.post('/insert', function(req, res){
	// parse through data from form
	var postData = {
		headline: req.body.headline,
		subHeadline: req.body.subHeadline,
		postType: req.body.postType,
		featuredImage: req.body.featuredImage,
		customURL: req.body.customURL,
		publishDate: new Date(),
		published: req.body.published,
		publishedBy: req.body.publishedBy,
		body: req.body.body
	};

	postData.customURL = slugify(postData.customURL);

	console.log(postData);

	var data = new post(postData);
	data.save(function (err, prod) {
		if (err) return console.log(err);
	});

	res.send('');
});

router.put('/update', function(req, res, next){
	var id = req.body._id;
	var updateData = {};
	var fields = {};

	for (var prop in req.body) {
		if (req.body.hasOwnProperty(prop)) {
			updateData[prop] = req.body[prop];
			fields[prop] = 1;
		}
	}

	// maybe change to findByIdAndUpdate once _ids are setup
	post.findOneAndUpdate({'_id': id}, 
	updateData, {new: true, fields: fields}, function(err, doc){
		if(err){
			console.error('error, post not found');
		} else {
			console.log('Document ' + id + ' has been updated successfully');
		}
		
		res.json({message:  'Document ' + id + ' has been updated successfully'});
	});
});

router.delete('/delete', (req, res, next) => {
	var id = req.body.id;
	post.remove({'id': id},function(err){
		if (err){
			console.error('error deleting document');
		}
		res.json({message: 'Document successfully deleted'});
	});
});

function sessionCheck(req,res,next){
	req.sessionStore.get(req.sessionID, function(err, session){
		if(err){
			return res.send(401, 'authorization failed');
		}

		next();
	});
	// if(req.session.user) {
	// 	next();
	// } else {
	// 	res.send(401,'authorization failed');
	// }
}

module.exports = router;