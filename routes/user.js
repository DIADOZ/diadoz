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

module.exports = router;