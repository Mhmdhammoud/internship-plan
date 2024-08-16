// Data Types
// JavaScript is a loosely typed or a dynamic language. This means you don't have to declare the type of a variable ahead of time. The type will get determined automatically while the program is being processed. This also means that you can have the same variable as different types:

const x = 5; // number

const y = '6.0'; //string

const z = false; // boolean

const t = true; // boolean

const a = undefined;

const b = null;

const c = NaN;

const d = Infinity;

const e = -Infinity;

const array = [1, 2, 'b', 4, true, undefined, null, NaN, Infinity, -Infinity];
const array2 = ['a', 'b', 'c', 'd', 'e'];

// console.log(parseFloat(x + y).toFixed(3));

const obj = {
  name: 'John',
  age: 30,
  isMarried: false,
  children: ['Alice', 'Bob'],
  greet: function () {
    console.log('Hello');
  },
};

const { age } = obj;

const user = {
  name: 'John',
  age: 30,
  isMarried: false,
  children: ['Alice', 'Bob'],
  gender: 'Male',
  greet: function () {
    console.log('Hello');
  },
  password: '123123123123123',
};
const { password, ...rest } = user;

const newUser = {
  ...rest,
  password: '4xxasdnasd',
};
// const { gender, ...rest } = user;
// const newUser = {
//   gender,
//   ...rest,
// };
// console.log(newUser);

// const person = obj;
// const person2 = { ...obj };
// obj.greet = 'Hello';

// console.log(person2);
