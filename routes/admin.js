var express = require('express');
var path = require('path');
var router = express.Router();

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

function sessionCheck(req,res,next){
	if(req.session.user) {
		next();
	} else {
		res.send(401,'authorization failed');
	}
}

module.exports = router;