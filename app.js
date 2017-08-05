var express = require('express'),
	posts   = require('./app/routes/post');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use('/post', posts);

//connect to db and start server
mongoose.connect('mongodb://localhost:27017/myproject');

//port goes in config file later
app.listen(3000, () => {
	console.log('listening on 3000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/main/html/main3.html');
  console.log('get test.html success');
});

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/public/admin/html/admin.html');
  console.log('get test.html success');
});