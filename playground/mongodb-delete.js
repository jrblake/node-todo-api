// var MongoClient = require('mongodb').MongoClient;
//Setting Variable = to the MongoClient method
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log('Unable to Connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

db.collection('Users').deleteMany({name: 'Jared Blake'});

db.collection('Users').findOneAndDelete({
  _id: new ObjectID('58b339304293dc17cba4e666')
}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
});

  // db.close();
});