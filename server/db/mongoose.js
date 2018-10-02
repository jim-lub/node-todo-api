/* jshint esversion: 6 */

let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://lub-dev:database01@ds219983.mlab.com:19983/node-todo-api' || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {
  mongoose
};
