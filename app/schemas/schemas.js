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

var entitySchema = new Schema({
	id: {required: true, type: Number},
	knowBy: {required: true, type: String},
	firstName: String,
	lastName: String,
	artistName: String,
	affilitation: String
});

var mediaSchema = new Schema({
	id: {required: true, type: Number},
	mediaName: {required: true, type: String},
	embed: String,
	url: String,
	mediaTypes: [String]
});

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

var Post = mongoose.model('Post', postSchema);
var Entity = mongoose.model('Entity', entitySchema);
var Media = mongoose.model('Media', mediaSchema);
var User = mongoose.model('User', userDocument);



module.exports = {
	Post: Post,
	Entity: Entity,
	Media: Media,
	User: User
};