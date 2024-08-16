// Functions
// Definition of functions
// 1- Reusable code
// 2- Functions are the main “building blocks” of the program
// 3- Functions allow us to create more readable code
const fs = require('fs');

// types of functions
// 1- Function Declaration
// 2- Function Expression
// 3- Arrow Function

// Function Declaration
function functionName() {
  console.log('Function Declaration');
  console.log('this', this);
  return 'Function Declaration';
}

// Function Expression (Anonymous Function)
const functionExpression = function () {
  console.log('Function Expression');
  console.log('this', this);
  return 'Function Expression';
};

// Arrow Function
const arrowFunction = () => {
  console.log('Arrow Function');
  console.log('this', this);
  return 'Arrow Function';
};

// const add = (x, y) => x + y;

// const Text = () => (
//   <div>
//     <p>functions</p>
//   </div>
// );
// const someValue = 'some value';
// fs.writeFile('function.txt', someValue, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('file created');
//   }
//   fs.readFile('function.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//       fs.unlink('function.txt', (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('file deleted');
//         }
//       });
//     }
//   });
// });

const names = [
  'ahmed',
  'ali',
  'Abed',
  'Haitham',
  'Mohammed',
  'Hassan',
  'Hussein',
];

const nameKey = 'Hussein';

const isMousaExist = names.find((element) => element == nameKey);

const filtered = names.filter((item) => item == nameKey);
// let mapped = [];

// for (let i = 0; i < names.length; i++) {
//   mapped.push({
//     name: names[i],
//     seatNumber: i + 1,
//   });
// }

// const mapped = names.map((item, index) => {
//   return {
//     name: item,
//     seatNumber: index + 1,
//   };
// });
const products = [
  {
    name: 'product 1',
    price: 100,
    discount: 10,
  },
  {
    name: 'product 2',
    price: 200,
    discount: 20,
  },
  {
    name: 'product 3',
    price: 300,
    discount: 0,
  },
  {
    name: 'product 4',
    price: 400,
    discount: 0,
  },
  {
    name: 'product 5',
    price: 500,
    discount: 50,
  },
  {
    name: 'product 6',
    price: '600',
    discount: 60,
  },
];

const totalPrice = products.reduce((acc, currVal) => {
  return acc + (currVal.price - (currVal.price * currVal.discount) / 100);
}, 0);
console.log('totalPrice', totalPrice);
// let counter = 0;
// for (let i = 0; i < products.length; i++) {
//   counter += products[i].price;
// }

// console.log('totalPrice', totalPrice);
