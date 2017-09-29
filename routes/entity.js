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

router.post('/insert', function(req, res){
	// parse through data from form
	var entityData = {
		id: 1,
		name: req.body.name,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		artistName: req.body.artistName,
		affilitation: req.body.affilitation
	};

	console.log(entityData);

	var data = new entity(entityData);
	data.save(function (err, prod) {
		if (err) return console.log(err);
	});

	res.redirect('/');
});

module.exports = router;