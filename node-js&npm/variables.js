// Variables
//  var: function-scoped, can be re-declared and updated, if declared outside of a function is globally scoped
//  let: block-scoped, can be updated but not re-declared, not globally scoped
//  const: block-scoped, cannot be updated or re-declared, not globally scoped

// var a = 10;

// function test() {
//   var a = 20;
//   console.log('from function', a);
// }
// test();
// console.log('global', a);

// let a = 10;

// function test() {
//   let a = 20;
//   console.log('from function', a);
// }
// test();
// console.log('global', a);

// const WIDTH = 10;

// function test2() {
//   b = 20;
//   console.log('from function', b);
// }

// // test2();
// console.log('global', b);

// switch (false) {
//   case true:
//     let a = 10;
//     console.log('a', a);
//     break;
//   case false: {
//     let b = 20;
//     console.log('b', b);
//     break;
//   }
//   default:
//     console.log('default');
// }
// const fs = require('fs');
// fs.writeFile('variables.txt', 'Hello from variables.js', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('file created');
//   }
// });
// console.log(thisVariableDoesNotExist);
