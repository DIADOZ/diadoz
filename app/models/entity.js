var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entitySchema = new Schema({
	id: {required: true, type: Number},

	name: {required: true, type: String},
	firstName: String,
	lastName: String,
	artistName: String,
	affiliation: [String]
});

module.exports = mongoose.model('Entity', entitySchema);