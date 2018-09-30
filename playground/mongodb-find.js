/* jshint esversion: 6 */

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bb0b75b863ddf150cf8a13f')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Jim'}).count().then((count) => {
    console.log(`Total users: ${count}`);
    console.log('--');
  }).catch((err) => {
    console.log('Unable to fetch users', err);
  });

  // db.collection('Users').find({name: 'Jim'}).toArray().then((docs) => {
  //   console.log(docs);
  // }, (err) => {
  //   console.log('Unable to fetch users', err);
  // });

  client.close();
});
