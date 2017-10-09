var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Only for test with created id and relationships

var postSchema = new Schema({
	headline: {required: true, type: String},
	subHeadline: String,
	postType: {required: true, type: String},
	primaryImage: {required: true, type: Schema.Types.ObjectId, ref: 'Media'}, // will be Media _id
	publishDate: {required: true, type: Date},
	published: {required: true, type: Boolean, default: false},
	publishedBy: {required: true, type: Schema.Types.ObjectId, ref: 'User'}, // will be User _id
	media: [{type: Schema.Types.ObjectId, ref: 'Media'}], // will be array of Media _id
	body: [String]
});

module.exports = mongoose.model('Post', postSchema);