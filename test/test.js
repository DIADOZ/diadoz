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
    	title: faker.random.words(),
		primaryArtist: faker.random.number(entityArray.length),
		primaryType: faker.random.word(),
		publishDate: faker.date.recent(),
		published: faker.random.boolean(),
		publishedBy: faker.random.number(userArray.length),
		postTypes: [
			faker.random.word(),
			faker.random.word(),
			faker.random.word()
		],
		source: [
			faker.random.word(),
			faker.random.word(),
			faker.random.word()
		],
		primaryMedia: faker.random.number(mediaArray.length)
    });

    postArray.push(postInstance);

    postInstance.save(function (err, prod) {
		if (err) return console.log(err);
	});
  }
}

function insertTestEntities(num) {
  for (i = 0; i < num; i++) {
    var entityInstance = new entity({
    	id: i,
    	knowBy: faker.name.findName(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		artistName: faker.name.findName(),
		affilitation: faker.random.word()
    });

    entityArray.push(entityInstance);

    entityInstance.save(function (err, prod) {
		if (err) return console.log(err);
	});
  }
}

function insertTestMedias(num) {
  for (i = 0; i < num; i++) {
    var mediaInstance = new media({
    	id: i,
    	mediaName: faker.random.word(),
		embed: faker.image.imageUrl(),
		url: faker.internet.url(),
		mediaTypes: [
			faker.random.word(),
			faker.random.word(),
			faker.random.word()
		]
    });

    mediaArray.push(mediaInstance);

    mediaInstance.save(function (err, prod) {
		if (err) return console.log(err);
	});
  }
}

function insertTestUsers(num) {
  for (i = 0; i < num; i++) {
    var userInstance = new user({
    	id: i,
    	firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		rank: faker.random.word(),
		email: faker.internet.email(),
		userName: faker.internet.userName(),
		password: faker.internet.password(),
		artistName: faker.name.findName(),
		affilitation: faker.random.word()
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