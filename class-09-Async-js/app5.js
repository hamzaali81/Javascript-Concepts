// Issues one memory leaks
// Global variables are bad
// const a = 1;
// const b = 1;
// const c = 1;

// console.log();


// call stack

console.log('1');
console.log('2');
console.log('3');

const one = ()=> {
    const two = ()=> {
        console.log('4');
    };
    two();
};

one();


// Recursion
// Function call itself
// function foo() {
//     foo();
// };

// foo();

// Promises:
// Promise is an object that may produce single value in a future either resolve and reject or pending.

const promise = new Promise((resolve, reject)=> {
    if(true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke');
    }
});

promise
.then((result)=> {
    return result + '!!'
})
.then((result2)=> {
//    throw Error;
   console.log(result2);
})
.catch((err)=> {
    console.log(err);
})
.then((result3)=> {
    // throw Error;
    console.log(result3+ '!');
});


// const promise1 = new Promise((resolve, reject)=> {
//   setTimeout(resolve, 1000, 'HIII')
// });

// const promise2 = new Promise((resolve, reject)=> {
//   setTimeout(resolve, 1000, 'POKIE')
// });

// const promise3 = new Promise((resolve, reject)=> {
//   setTimeout(resolve, 1000, 'ISSS')
// });

// const promise4 = new Promise((resolve, reject)=> {
//   setTimeout(resolve, 1000, 'WHAT!!')
// });


// Promise.all([promise1, promise2, promise3, promise4])
// .then((values)=> {
//     console.log(values);
// }).catch((err)=> {
//     console.log(err);
// })


// ES8 Async/Await
// Async/Await top of js.

// movePlayer(100, 'left')
//   .then(()=> movePlayer(400, 'left')) // all these are promises
//   .then(()=> movePlayer(400, 'right'))
//   .then(()=> movePlayer(400, 'left'))
//   .then(()=> movePlayer(400, 'right'))


// async function playerStart() {
//   const firstMove = await movePlayer(100, 'left') // pause
//   await movePlayer(400, 'Left')
//   await movePlayer(10, 'Right')
//   await movePlayer(300, 'left')
// }

// fetch()
//   .then((resp)=> resp.json()) 
//   .then(console.log)

//   async function fetchUsers() {
//     const resp = await fetch();
//     const data = resp.json();
//     console.log(data);

//   }

// const urls = [
//     '',
//     '',
//     '',
//     ''
// ];


// Promise.all(urls.map(url=> 
//  fetch(url).then(resp=> resp.json())))
//   .then((array)=> {
//       console.log('users', array[0]);
//       console.log('post', array[1]);
//       console.log('albums', array[2]);
//   }).catch('oops')


// const getData = async ()=> {
//     try {
//         const [users, posts, albums] = await Promise.all(urls.map(url=> 
//             fetch(url).then(resp => resp.json())
//         ));
        
        
//             console.log('users', users);
//             console.log('posts', posts);
//             console.log('albums', albums);
//     } catch (err) {
//     console.log(err);
//     }
// };

// ES9


// const animals = {
//     tiger: 23,
//     lion: 5,
//     monkey: 2
// };

// // const { tiger, ...rest } = animals;
// console.log(tiger, rest);


const array = [1,2,3,4,5];
function sum(a,b,c,d,e) {
    return a + b + c + d + e
};

const resultArray = sum(...array);
console.log('resultArray',resultArray);

const animals1 = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
};

function objectSpread1(p1, p2, p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
};


const { tiger,  lion, ...rest} = animals1;
objectSpread1(tiger, lion, rest)

// ES9 (ES2018)

// const urls = [
//     'https://jsonplaceholder.cypress.io/todos',
//     'https://jsonplaceholder.cypress.io/todos',
//     'https://jsonplaceholder.cypress.io/todos',
//     'https://jsonplaceholder.cypress.io/todos'
// ];


// Promise.all(urls.map(url=> 
//  fetch(url).then(people=> people.json())))
//   .then((array)=> {
//     //   throw Error
//       console.log('users', array[0]);
//       console.log('post', array[1]);
//       console.log('albums', array[2]);
//   }).catch('oops')
//     .finally((data)=> console.log('extra', data)) // run piece of code run no matter success or not

// ES9 (ES2018)
// for await of


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
];


// const getData = async function (){
//     try {
//     const [users, posts, albums] = await Promise.all(urls.map(async(url)=> {
      
//         const response = await fetch(url);
//         return response.json();
//     }))

//     console.log('users', users);
//     console.log('users', posts);
//     console.log('users', albums);
//     }
//     catch (error) {
//         console.log('oooooooooooooooops',err);
//     }
// };

// const result = getData();
// console.log(result);


const loopThroughUrls = urls => {
    for(url of urls) {
    console.log(url);
    }
}


loopThroughUrls(urls)



// const getData2 = async function() {
//     const arrayOfPromises = urls.map(url => fetch(url));
//     for await(let request of arrayOfPromises) {
//         const data = await request.json();
//         console.log(data);
//     }

// };

// getData2();

// Jbb Queue

// Event Loop called callback Queue --Task Queue

// 1. Callback Queue - Task Queue
setTimeout(()=> {
    console.log('1', 'is the loneliest');
}, 0);

setTimeout(()=> {
    console.log('1', 'is the loneliest');
}, 0);

setTimeout(()=> {
    console.log('1', 'is the loneliest');
}, 0);


// 2. Job Queue -Microtask Queue
Promise.resolve('hi').then((data)=> console.log('2', data));

// 3
console.log('3', 'is a crowd');


// Parallel, Sequence and Race (More times See videos)
const promisify = (item , delay) =>
    new Promise((resolve) => 
    setTimeout(()=> resolve(item), delay));


const a = ()=> promisify('a',100);
const b = ()=> promisify('b',5000);
const c = ()=> promisify('c',3000);



async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);

    return `parallel is done: ${output1} ${output2} ${output3}`
}

// parallel().then(data => console.log(data))
parallel().then(console.log)

async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race is done ${output1};`
};
race().then(console.log);

async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done ${output1} ${output2} ${output3}`
};

sequence().then(console.log)

// ES2020_allSettled

const promiseOne = new Promise((resolve, reject)=> setTimeout(resolve, 3000));
const promiseTwo = new Promise((resolve, reject)=> setTimeout(reject, 3000));


Promise.all([promiseOne, promiseTwo]).then(data => console.log(data)); // IF only all of promise resolve no through any error
Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log('something failed', data)); // IF both of promise resolve, reject


// Home Works
// Threads , Concurrency and parallelism
var worker = require('worker.js');
console.log(worker);


const { spawn } = require('child_process');

spawn('git', ['stuff'])




















































































































































































































































































































































































