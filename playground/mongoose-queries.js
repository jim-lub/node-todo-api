/* jshint esversion: 6 */
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// let id = '5bb27f711dc90813b46ead3a11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log(todo);
// }).catch((e) => console.log(e));
