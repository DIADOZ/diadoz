var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDocument = new Schema({
	userName: {required: true, type: String},
	password: {required: true, type: String},
	email: {required: true, type: String},
	firstName: {required: true, type: String},
	lastName: {required: true, type: String},
	artistName: String,
	affiliation: [String],
});

module.exports = mongoose.model('User', userDocument);