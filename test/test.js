var faker = require('faker');

var entity = require('../app/models/entity');
var media = require('../app/models/media');
var post = require('../app/models/post');
var user = require('../app/models/user');

var entityArray = [];
var mediaArray = [];
var postArray = [];
var userArray = [];

function insertTestPosts(num) {
	for (var i = 0; i < num; i++) {
		var postInstance = new post({
			headline: faker.random.words(),
			subHeadline: faker.random.words(),
			postType: faker.random.word(),
			primaryImage: mediaArray[faker.random.number(mediaArray.length - 1)]._id,
			publishDate: faker.date.recent(),
			published: faker.random.boolean(),
			publishedBy: userArray[faker.random.number(userArray.length - 1)]._id,
			body: [
				'<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>',
				'<img src =' + mediaArray[faker.random.number(mediaArray.length - 1)].filePath + '>',
				'<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>',
				'<img src =' + mediaArray[faker.random.number(mediaArray.length - 1)].filePath + '>',
				'<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>'
			]
		});

		postArray.push(postInstance);

		postInstance.save(function (err, prod) {
			if (err) return console.log(err);
		});
	}
}

function insertTestMedias(num) {
	var imagePathArray = []
	for(var x = 1; x < 13; x++){
		imagePathArray.push('/test/images/' + x + '.jpg');
	}
	
  	for (var i = 0; i < num; i++) {
		var artistID = entityArray[faker.random.number(entityArray.length - 1)]._id;
		var mediaData = {
			title: faker.random.word(),
			primaryArtist: artistID,
			primaryType: faker.random.word(),
			mediaTypes: [],
			body: faker.random.words(),
			filePath: imagePathArray[faker.random.number(imagePathArray.length - 1)],
			url: faker.internet.url(),
			embed: faker.image.imageUrl()
		};
    
		for (var x = 0; x < 4; x++) {
			mediaData.mediaTypes.push(faker.random.word());
		}
		var mediaInstance = new media(mediaData);
		mediaArray.push(mediaInstance);

		mediaInstance.save(function (err, prod) {
			if (err) return console.log(err);
		});
  	}
}

function insertTestEntities(num) {
	for (var i = 0; i < num; i++) {
		var entityInstance = new entity({
			name: faker.name.findName(),
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			artistName: faker.name.findName(),
			affilitation: [faker.random.word()]
		});

		entityArray.push(entityInstance);

		entityInstance.save(function (err, prod) {
			if (err) return console.log(err);
		});
	}
}

function insertTestUsers(num) {
  	for (var i = 0; i < num; i++) {
		var userInstance = new user({
			email: faker.internet.email(),
			userName: faker.internet.userName(),
			password: faker.internet.password(),
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			artistName: faker.name.findName(),
			affilitation: [faker.random.word()]
		});

		userArray.push(userInstance);

		userInstance.save(function (err, prod) {
			if (err) return console.log(err);
		});
  	}
}

module.exports = {
	insertTestUsers,
	insertTestMedias,
	insertTestEntities,
	insertTestPosts
}