// Node Base Modules

// fs module is used to deal with file systems

const fs = require('fs');

// To write a file  we use fs.writeFile() method

// fs.writeFile(
//   '../invoices/Invoice001.txt',
//   'This is an example, for the second time',
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('File successfully created');
//     }
//   }
// );
// Global Variables

// __dirname: It is a global variable that gives the directory name of the current module.
// console.log(__dirname);
// __filename: It is a global variable that gives the file name of the current module.
// console.log(__filename);
// Current working directory
// console.log(process.cwd());

// Path Module

const path = require('path');

// console.log(path.join(__dirname, '../', 'invoices', 'Invoice001.txt'));

// OS Module

const os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// convert it to GB
//round it to 2 decimal places
// console.log((os.freemem() / 1024 / 1024 / 1024).toFixed(2));

// get used % of memory

// setInterval(() => {
//   console.log(
//     (((os.totalmem() - os.freemem()) / os.totalmem()) * 100).toFixed(2)
//   );
//   // in ms
// }, 2000);

// console.log(os.userInfo());

// Template Literals

const name = 'John';

const greet = (name) => {
  console.log(`Hello ${name} ${os.userInfo().username} Welcome to Node.js`);
};

greet(name);
