var faker = require('faker');

var entity = require('../app/models/entity');
var media = require('../app/models/media');
var post = require('../app/models/post-test');
var user = require('../app/models/user');

var entityArray = [];
var mediaArray = [];
var postArray = [];
var userArray = [];

function insertTestPosts(num) {
  for (i = 0; i < num; i++) {
    var postInstance = new post({
			id: i,
			
			headline: faker.random.words(),
			subHeadline: faker.random.words(),
			postType: faker.random.word(),
			primaryImage: faker.random.number(mediaArray.length),
			publishDate: faker.date.recent(),
			published: faker.random.boolean(),
			publishedBy: faker.random.number(userArray.length),
			media: [
				faker.random.number(mediaArray.length),
				faker.random.number(mediaArray.length),
				faker.random.number(mediaArray.length)
			],
			body: [
				faker.random.word(),
				faker.random.word(),
				faker.random.word()
			]
    });

    postArray.push(postInstance);

    postInstance.save(function (err, prod) {
			if (err) return console.log(err);
		});
  }
}

function insertTestMedias(num) {
  for (i = 0; i < num; i++) {
    var mediaInstance = new media({
			id: i,
			
			title: faker.random.word(),
			primaryArtist: faker.random.number(entityArray.length),
			primaryType: faker.random.word(),
			mediaTypes: [
				faker.random.word(),
				faker.random.word(),
				faker.random.word()
			],
			body: faker.random.words(),
			filePath: faker.system.filePath(),
			url: faker.internet.url(),
			embed: faker.image.imageUrl()
    });

    mediaArray.push(mediaInstance);

    mediaInstance.save(function (err, prod) {
			if (err) return console.log(err);
		});
  }
}

function insertTestEntities(num) {
  for (i = 0; i < num; i++) {
    var entityInstance = new entity({
			id: i,
			
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
  for (i = 0; i < num; i++) {
    var userInstance = new user({
			id: i,
			
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