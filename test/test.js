var faker = required('faker');

function insertTestPosts(dbName, colName, num) {

  var col = db.getSiblingDB(dbName).getCollection(colName);

  for (i = 0; i < num; i++) {
    col.insert({
    	id: db.getCollection(colName).count() + 1,
    	title: faker.random.words(),
		primaryArtist: faker.random.number(db.getCollection('entity').count()),
		primaryType: faker.random.word(),
		publishDate: faker.date.recent(),
		published: faker.random.boolean(),
		publishedBy: faker.random.number(db.getCollection('user').count()),
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
		primaryMedia: faker.random.number(db.getCollection('media').count())
    });
  }

  print(col.count());

}

function insertTestEntities(dbName, colName, num) {

  var col = db.getSiblingDB(dbName).getCollection(colName);

  for (i = 0; i < num; i++) {
    col.insert({
    	id: db.getCollection(colName).count() + 1,
    	knowBy: faker.name.findName(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		artistName: faker.name.findName(),
		affilitation: faker.random.word()
    });
  }

  print(col.count());

}

function insertTestMedias(dbName, colName, num) {

  var col = db.getSiblingDB(dbName).getCollection(colName);

  for (i = 0; i < num; i++) {
    col.insert({
    	id: db.getCollection(colName).count() + 1,
    	mediaName: faker.random.word(),
		embed: faker.image.imageURL(),
		url: faker.internet.url(),
		mediaTypes: [
			faker.random.word(),
			faker.random.word(),
			faker.random.word()
		]
    });
  }

  print(col.count());

}

function insertTestUsers(dbName, colName, num) {

  var col = db.getSiblingDB(dbName).getCollection(colName);

  for (i = 0; i < num; i++) {
    col.insert({
    	id: db.getCollection(colName).count() + 1,
    	firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		rank: faker.random.word(),
		email: faker.internet.email(),
		userName: faker.internet.userName(),
		password: faker.internet.password(),
		artistName: faker.name.findName(),
		affilitation: faker.random.word()
    });
  }

  print(col.count());

}