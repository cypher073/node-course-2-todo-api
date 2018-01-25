const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5a6a3c8a70a2a7c77884e363';
//var id = '6a6a3c8a70a2a7c77884e363';
// var id = '5a6a3c8a70a2a7c77884e36311';
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

var id = '5a68d08976e6aa0225ae6f1f';

User.findById(id).then((user) => {
  if(!user) {
    return console.log('Unable to find user');
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));
