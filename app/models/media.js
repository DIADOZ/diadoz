var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mediaSchema = new Schema({
	id: {required: true, type: Number},


	title: {required: true, type: String},
	primaryArtist: {required: true, type: Number}, // will be Entity _id
	primaryType: {required: true, type: String},
	mediaTypes: [String],
	body: String,
	filePath: String,
	url: String,
	embed: String

	// ability to add additional artist fields
	// based on front end dropdown types
	// (Artist Type): [Entity _id]
});

module.exports = mongoose.model('Media', mediaSchema);