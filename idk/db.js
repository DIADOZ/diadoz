var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
});

var dbConnect = function (){
	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  console.log("Connected successfully to server");
	});
}

var dbClose = function (db){
	db.close();
}

var insertPost = function (db, data, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  // data must insert many if data.length > 1
  collection.insertMany(data, function(err, result) {
    assert.equal(err, null);
    
    console.log("Inserted documents into the collection");
    callback(result);
  });
}

var updatePost = function(db, callback) {
  // update single post, maybe use db.collection.updateOne()
}

var deletePost = function(db, id, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Use _id to remove specific post
  collection.deleteOne({_id: id});
}

var getAllPosts = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Get posts. Limited to 25
  collection.find({}).limit(25).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

//DANGEROUS ONLY FOR TESTING PURPOSES, COMMENT OUT BEFORE PRODUCTION
var deleteAllPosts = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Get posts. Limited to 25
  collection.deleteMany({});
  console.log('Deleted all documents');
}
