// var MongoClient = require('mongodb').MongoClient;
//Setting Variable = to the MongoClient method
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log('Unable to Connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');


//{_id: new ObjectID('58b3382e302bd7179a3ecfcb')
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos Count: ${count}`);
  //   // console.log(JSON.stringify(documents, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to Fetch Todos', error);
  // });


  db.collection('Users').find({name: "Jared Blake"}).toArray().then((documents) => {
    console.log(`Users Count: ${documents.length}`)
    console.log(JSON.stringify(documents, undefined, 2));
  }, (error) => {
    console.log('Unable to Fetch Users', error);
  });


  // db.close();
});