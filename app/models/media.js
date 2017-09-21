var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mediaSchema = new Schema({
	id: {required: true, type: Number},
	mediaName: {required: true, type: String},
	embed: String,
	url: String,
	mediaTypes: [String]
});

module.exports = mongoose.model('Media', mediaSchema);