var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

var mongoose   = require('mongoose');

//connect to db and start server
mongoose.connect('mongodb://localhost:27017/myproject');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var	posts      = require('./app/routes/post');
var test       = require('./test/test');

app.use(bodyParser.json());
app.use('/api', posts);

//port goes in config file later
app.listen(3000, () => {
	console.log('listening on 3000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/diadoz-UI/main/html/main3.html');
  console.log('get main3.html success');
});

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/public0/admin/html/admin.html');
  console.log('get admin.html success');
});

var createTestData = function(){
	test.insertTestUsers(5);
	test.insertTestEntities(5);
	test.insertTestMedias(5);
	test.insertTestPosts(5);
}

createTestData();