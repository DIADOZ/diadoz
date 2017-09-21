var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	id: {required: true, type: Number},
	title: {required: true, type: String},
	primaryArtist: {
		required: true,
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	primaryType: {required: true, type: String},
	publishDate: {required: true, type: Date},
	published: {required: true, type: Boolean, default: false},
	postTypes: [String],
	source: [String],
	artists: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	directors: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	visualArtists: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	audioEngineers: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	creativeDirectors: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	actors: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	producers: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	photographers: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	composers: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	artistsAndRepertoires: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	painters: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	graphicDesigners: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	videographers: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	videoEditors: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	executiveProducers: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	},
	assistants: {
		type: Schema.Types.ObjectId,
		ref: 'Person'
	}
});

module.exports = mongoose.model('Post', postSchema);