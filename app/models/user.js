var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDocument = new Schema({
	id: {required: true, type: Number},
	firstName: {required: true, type: String},
	lastName: {required: true, type: String},
	rank: {required: true, type: String},
	email: {required: true, type: String},
	userName: {required: true, type: String},
	password: {required: true, type: String},
	artistName: String,
	affilitation: String,
});

module.exports = mongoose.model('User', userDocument);