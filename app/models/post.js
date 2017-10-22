var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Only for test with created id and relationships

var postSchema = new Schema({
	headline: {required: true, type: String},
	subHeadline: String,
	postType: {required: true, type: String},
	featuredImage: {required: true, type: String}, // will be Media _id
	publishDate: {required: true, type: Date},
	published: {required: true, type: Boolean, default: false},
	publishedBy: {required: true, type: String}, // will be User _id 
	body: []
});

module.exports = mongoose.model('Post', postSchema);