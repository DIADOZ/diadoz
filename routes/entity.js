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

router.post('/insert', sessionCheck, function(req, res){
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

router.put('/update', sessionCheck, function(req, res, next){
	var id = req.body.id;

	// maybe change to findByIdAndUpdate once _ids are setup
	entity.findOneAndUpdate({'id': id}, {
		name: req.body.name,
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

router.delete('/delete', sessionCheck, (req, res, next) => {
	var id = req.body.id;
	entity.remove({'id': id},function(err){
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