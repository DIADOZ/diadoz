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

router.post('/insert', function(req, res){
	// parse through data from form
	var userData = {
		id: 1,
		email: req.body.email,
		userName: req.body.userName,
		password: req.body.password,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		artistName: req.body.artistName,
		affilitation: req.body.affilitation
	};

	console.log(userData);

	var data = new user(userData);
	data.save(function (err, prod) {
		if (err) return console.log(err);
	});

	res.redirect('/');
});

router.put('/update', function(req, res, next){
	var id = req.body.id;

	// maybe change to findByIdAndUpdate once _ids are setup
	user.findOneAndUpdate({'id': id}, {
		email: req.body.email,
		userName: req.body.userName,
		password: req.body.password,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		artistName: req.body.artistName,
		affilitation: req.body.affilitation
	}, {new: true}, function(err, doc){
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
	user.remove({'id': id},function(err){
		if (err){
			console.error('error deleting document');
		}
		res.json({message: 'Document successfully deleted'});
	});
});

module.exports = router;