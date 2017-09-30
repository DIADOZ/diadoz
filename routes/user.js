var express = require('express');
var router = express.Router();

var bcrypt = require('bcrypt-nodejs');

var user = require('../app/models/user');

router.post('/login', function(req, res) {
	var userName = req.body.userName;
	var password = req.body.password;
  
	user.findOne({
		userName: userName
	}, function(err, data) {
		if (err | data === null) {
			return res.send(401, "User Doesn't exist");
		} else {
			var usr = data;
	
			if (userName === usr.userName && bcrypt.compareSync(password, usr.password)) {
				req.session.regenerate(function() {
					req.session.user = userName;
					return res.send(userName);
				});
			} else {
				return res.send(401, "Bad Username or Password");
			}
		}
	});
});

router.get('/logout', function(req, res) {
    req.session.destroy(function() {
        return res.send(401, 'User logged out');
    });
});

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

router.post('/insert', sessionCheck, function(req, res){
	var salt, hash, password;
    password = req.body.password;
    salt = bcrypt.genSaltSync(10);
	hash = bcrypt.hashSync(password, salt);
	
	var userData = {
		id: 1,
		email: req.body.email,
		userName: req.body.userName,
		password: hash,
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

router.put('/update', sessionCheck, function(req, res, next){
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

router.delete('/delete', sessionCheck, (req, res, next) => {
	var id = req.body.id;
	user.remove({'id': id},function(err){
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