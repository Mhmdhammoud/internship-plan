// // https://jsonplaceholder.typicode.com

// const axios = require('axios');
const fs = require('fs');

// // pending
// // const firstPromise = () => {
// //   return axios({
// //     method: 'GET',
// //     url: 'https://jsonplaceholder.typicode.com/posts',
// //   })
// //     .then((response) => {
// //       //resolved
// //       return response.data;
// //     })
// //     .catch((err) => {
// //       //rejected
// //       console.log(err);
// //     });
// // };

// // const secondPromise = () => {
// //   return axios({
// //     method: 'GET',
// //     url: 'https://jsonplaceholder.typicode.com/todos',
// //   })
// //     .then((response) => {
// //       //resolved
// //       return response.data;
// //     })
// //     .catch((err) => {
// //       //rejected
// //       console.log(err);
// //     });
// // };

// // const main = () => {
// //   firstPromise()
// //     .then((data) => {
// //       const filteredForUserTen = data.filter((item) => item.userId === 10);
// //       fs.writeFile(
// //         'userTenPosts.json',
// //         JSON.stringify(filteredForUserTen),
// //         (err) => {
// //           if (err) {
// //             console.log(err);
// //           } else {
// //             console.log('File written successfully');
// //           }
// //         }
// //       );
// //       secondPromise()
// //         .then((data) => {
// //           const filteredForUserTen = data.filter((item) => item.userId === 10);
// //           fs.writeFile(
// //             'userTenTodos.json',
// //             JSON.stringify(filteredForUserTen),
// //             (err) => {
// //               if (err) {
// //                 console.log(err);
// //               } else {
// //                 console.log('File written successfully');
// //               }
// //             }
// //           );
// //         })
// //         .catch((err) => {
// //           console.log(err);
// //         });
// //     })
// //     .catch((er) => {
// //       console.log(er);
// //     });
// // };
// const firstPromise = () => {
//   return axios({
//     method: 'GET',
//     url: 'https://jsonplaceholder.typicode.com/posts',
//   });
// };

// const secondPromise = () => {
//   return axios({
//     method: 'GET',
//     url: 'https://jsonplaceholder.typicode.com/todos',
//   });
// };

// const main = async () => {
//   try {
//     const response = await firstPromise();
//     const filteredForUserTen = response.data.filter(
//       (item) => item.userId === 10
//     );
//     fs.writeFile(
//       'userTenPosts.json',
//       JSON.stringify(filteredForUserTen),
//       (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('File written successfully');
//         }
//       }
//     );
//     const response2 = await secondPromise();

//     const filteredForUserTen2 = response2.data.filter(
//       (item) => item.userId === 10
//     );

//     fs.writeFile(
//       'userTenTodos.json',
//       JSON.stringify(filteredForUserTen2),
//       (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('File written successfully');
//         }
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
// main();
//use new Promise to wrap fs.writeFile
const writeFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('File written successfully');
      }
    });
  });
};

const main = async () => {
  const res = await writeFile('userTenPosts.json', 'Hello World');
  console.log(res);
};

main();
