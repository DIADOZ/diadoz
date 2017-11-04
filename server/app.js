var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var	index = require('./routes/index');
var	post = require('./routes/post');
var	media = require('./routes/media');
var	entity = require('./routes/entity');
var	user = require('./routes/user');

var test = require('./test');

var app = express();
var mongoDB = process.env.MONGODB_URI || 'mongodb://root:PkRMwezh6s34@dia.diadoz.com:27017/diadoz';
//connect to db and start server
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(session({
	secret: 'diadoz2017',
	resave: true
}));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });


app.use('/api/post', post);
app.use('/api/media', media);
app.use('/api/entity', entity);
app.use('/api/user', user);
app.use('*', index);

//port goes in config file later
app.listen(3000, () => {
	console.log('listening on 3000');
});

var createTestData = function(){
	test.insertTestUsers(5);
	test.insertTestEntities(5);
	test.insertTestMedias(5);
	test.insertTestPosts(5);
};

//createTestData();
