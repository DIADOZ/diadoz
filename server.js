var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const path = require('path');

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var	index = require('./server/routes/index');
var	post = require('./server/routes/post');
var	media = require('./server/routes/media');
var	entity = require('./server/routes/entity');
var	user = require('./server/routes/user');

var test = require('./server/test');

var app = express();

const port = process.env.PORT || '3000';
var mongoDB = process.env.MONGODB_URI || 'mongodb://localhost:27017/diadoz';
//connect to db and start server
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(session({
	secret: 'diadoz2017',
	resave: true,
	saveUninitialized: true
}));

// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
//   });

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/post', post);
app.use('/api/media', media);
app.use('/api/entity', entity);
app.use('/api/user', user);
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//port goes in config file later
app.listen(port, () => {
	console.log('listening on ' + port);
}); 

var createTestData = function(){
	test.insertTestUsers(5);
	test.insertTestEntities(5);
	test.insertTestMedias(5);
	test.insertTestPosts(5);
};

//createTestData();
