/* jshint esversion: 6 */
let env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if(env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoAppTest';
} else {
  process.env.MONGODB_URI = 'mongodb://lub-dev:database01@ds219983.mlab.com:19983/node-todo-api';
}
