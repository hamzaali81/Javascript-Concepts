// Async JS
// const promise = new Promise((resolve, reject)=> {
//     if(true) {
//         return resolve('Data Mil gya bhai!!!!')
//     } else {
//         reject('Reject')
//     }
// });

// const promise2 = new Promise((resolve, reject)=> {
//     setTimeout(resolve, 1000, 'Hill')
// })
// const promise3 = new Promise((resolve, reject)=> {
//     setTimeout(resolve, 1000, 'POOKIE')
// })
// const promise4 = new Promise((resolve, reject)=> {
//     setTimeout(resolve, 1000, 'It my pleasure')
// });


// Promise.all([promise2, promise3, promise4]) // All promises resolved
// .then((values)=> {
//     console.log(values);  
// })
// promise.then((el)=> {
//     console.log(el);
// }).catch((err)=> {
//     console.log(err);
// });

// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums',
// ];

// Promise.all(urls.map((url)=> {
//     return fetch(url).then((res)=> res.json())
// }))
// .then((results)=> {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
// })

// // finally
// const urls = [
//     'https://swapi.co/api/people/1',
//     'https://swapi.co/api/people/2',
//     'https://swapi.co/api/people/3',
//     'https://swapi.co/api/people/4'
// ];

// Promise.all(urls.map((url)=> {
//     return fetch(url).then((people)=> people.json())
// }))
//   .then(array => {
//       throw Error;
//       console.log('1', array[0]);
//       console.log('2', array[1]);
//       console.log('3', array[2]);
//       console.log('4', array[3]);
//   }).catch(err => console.log('uhhh fix it', err))
//     .finally(() => console.log('finally'));

// // for await of
// // params name should be urls
// const loopThroughUrls = urls => {
//     for(url of urls) {
//         console.log(url);
//     }
// }
// loopThroughUrls(urls);
// // ES 2018
// const getData2 = async function() {
//     const arrayPromises = urls.map((url)=> fetch(url));
//     for(let request of arrayPromises) {
//         const data = await request.json();
//         console.log(data);
//     }
// };

// getData2();

// Challenge
// 01 Callback Queue (Event loop) - Task Queue
// Web Api
// setTimeout(()=> {console.log('1', 'is the loneliest')},0)
// setTimeout(()=> {console.log('2', 'can be as bad as one')},10)

// // 02 Job Queue - Microtask Queue (Event loop check first Job Queue)
// Promise.resolve('hi').then((data)=> console.log('2', data))

// 03
// console.log('3', 'is a crowd');

// Exercise
// const promisify = (item, delay) => {
//     new Promise((resolve)=> setTimeout(
//         ()=> resolve(item), 
//         delay));
// };

// const a = ()=> promisify('a', 100);
// const b = ()=> promisify('b', 5000);
// const c = ()=> promisify('c', 3000);

// async function parallel() {
//     const promises = [a(), b(), c()];
//     const [output1, output2, output3] = await Promise.all(promises);
//     return `parallel is done: ${output1} ${output2} ${output3}`
// };

// async function race() {
//     const promises = [a(), b(), c()];
//     const output1= await Promise.race(promises);
//     return `race is done ${output1}`
// }

// async function sequence() {
//     const output1 = await a();
//     const output2 = await b();
//     const output3 = await c();
//     return `sequence is done ${output1} ${output2} ${output3}`
// }

// parallel().then(console.log)
// sequence().then(console.log)
// race().then(console.log);

// // allSettled()
// const promiseOne = new Promise((resolve, reject)=> setTimeout(resolve, 3000));
// const promiseTwo = new Promise((resolve, reject)=> setTimeout(resolve, 3000));

// // Promise.all([promiseOne, promiseTwo]).then((data)=> console.log(data));
// Promise.allSettled([promiseOne, promiseTwo]).then((data)=> console.log(data)); // return complete promises

// var worker = new Worker('worker.js');
// console.log(worker.postMessage('Hello'));

// const { spawn } = require('child_process')
// spawn('git', ['stuff']);
// Object Spread Operator

// const animals = {
//     tiger: 23,
//     lion: 5,
//     monkey: 2,
//     bird: 'paroot'
// };

// const { tiger, ...rest } = animals;

// console.log(tiger, rest);

// const array =[1,2,3,4,5,6];
// function sum(a,b,c,d,e,f) {
//     return a + b + c + d + e + f;
// }

// // console.log(...array);
// const result = sum(...array);
// // console.log(result);

// function objectSpread(p1, p2, p3) {
//     console.log(p1);    
//     console.log(p2);    
//     console.log(p3);    
// }

// const { tiger,lion, ...rest } = animals;
// objectSpread(tiger, lion, rest)

