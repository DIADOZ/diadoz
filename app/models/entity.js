var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entitySchema = new Schema({
	id: {required: true, type: Number},
	knowBy: {required: true, type: String},
	firstName: String,
	lastName: String,
	artistName: String,
	affilitation: String
});

module.exports = mongoose.model('Entity', entitySchema);