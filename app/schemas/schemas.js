var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	id: Number,
	title: {required: true, type: String},
	artist: String,
	publishDate: Date,
	published: Boolean 
});

var artistSchema = new Schema({
	id: Number,
	firstName: String,
	lastName: String,
	artistName: String
});

var Post = mongoose.model('Post', postSchema);



module.exports = Post;