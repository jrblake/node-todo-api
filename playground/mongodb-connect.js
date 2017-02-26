// var MongoClient = require('mongodb').MongoClient;
//Setting Variable = to the MongoClient method
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log('Unable to Connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to Do',
  //   completed: false
  // }, (error, result) => {
  //   if(error) {
  //     return console.log('Unable to Insert Todo', error);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Jared Blake',
  //   age: 23,
  //   location: 'San Francisco'
  // }, (error, result) => {
  //   if(error) {
  //     return console.log('Unable to Insert User', error);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });



  db.close();
});