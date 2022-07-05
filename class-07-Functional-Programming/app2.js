// Exercise
// Amazon shopping
// Immutable 
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
};

let amazonHistory = [];
// Implement a cart features
// 1. Add items to cart.
// 2. Add 3% tax to item in cart.
// 3. Buy item: cart --> purchases
// 4. Empty cart
// var p1 = purchaseItem(user,{name: 'laptop', price: 344})
// console.log(p1);
// function purchaseItem(user, item) {
//     return Object.assign({}, user, {purchases: item}); 
// }

// Implement this functionality in compose

// const compose = (f, g) => (data)=> f(g(data))
const compose = (f, g) => (...args) => f(g(...args));


var p1 = purchaseItem(
    emptyCart,
    butItem,
    applyTaxItems,
    addItemToCart
) (user, {name: 'laptop', price: 244} )
console.log(p1);


function purchaseItem(...fns) {
    return fns.reduce(compose);
} 


function addItemToCart(user, item) {
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart});
}

function applyTaxItems(user) {
     const {cart} = user;
     const taxRate = 1.3;
     const updatedCart = cart.map(item => {
         return {
             name: item.name,
             price: item.price * taxRate
         }
     })

     return Object.assign({}, user, {cart: updatedCart})
}

function butItem(user) {
    amazonHistory.push(user);
    return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
    amazonHistory.push(user);
    return Object.assign({}, user, { purchases: [] });
}

// function refundIten() {
    
// }

// function getUserState() { }
// function getForward() { }

console.log(amazonHistory);
// Bonus:
// accept refunds.
// Track user history.

// Pure functions
// Procedural vs fP

// no side efects
// same input --> same output

// Side effect and mutatte and outside global object
// const array = [1,2,3];
// function a(arr) {
//     arr.pop()
// };
// function removeLastItem(arr) {
//     const newArray = [].concat(arr);
//     newArray.pop();
//     return newArray;
// };
// function b(arr) {
//     arr.forEach((el)=> {
//         arr.push('1');
//     })
// };
// a(array);
// const arr1 = removeLastItem(array);
// console.log(arr1);
// b(array)
// a(array);
// a(array);

// console.log(array);

// no side effects
// input --> output

// Interview question
// function c() {
//     // It's not pure function output the proper
//     // Outside the world e.g browser
//     console.log('hi');
// }

// c();

// // Goal of functional programming not everything no-side effects. But minimize side effects
// function d(num1, num2) {
//     // It's not pure function output the proper
//     // Outside the world e.g browser
//     return num1 + num2 // refrential transparency
// };

// function e(num) {
//   return num*2    
// }
// Refrential Transparency:
// If i completely change this function to the number seven 
// will effect any part of my program 

// const e1 = d(2, 5);
// const e2 = e(2, 5);

// console.log(e1);
// console.log(e2);

// Can Everything Be pure
// Not program not exists without side effects.


// // Indempotence (given same input)
// function notGood1(num) {
//     // Not indepodnece
//     return Math.random(num); 
// }
// function notGood2(num) {
//     console.log(num);
// }

// const eg1 = notGood1(5);
// console.log(eg1);
// notGood2(5);

// const eg3 =Math.abs(Math.abs(-90));
// console.log(eg3);

// Imperative vs Declerative

// Imperative
// for (let i = 0; i < 10; i++) {
//     console.log(i);  
// }

// // Much closet to declerative
// [1,2,3].forEach((item)=> {
//   console.log(item);
// });


// Immutability (Not changing the data) (e.g kinder joy)
// In fp idea is immutability not changing state but instead making copies of the state.
// const obj = { name: 'Andrei' };

// function clone(obj) {
//     return {...obj}; // this is a pure (Mutability)
// };

// function updateName(obj) {
//     const obj2 = clone(obj);
//     obj2.name = 'Nana';
//     return obj2;
// }
// // This is functional sharing in comes to fp
// updateName(obj);
// console.log(obj);
// obj.name = 'Nana';
// console.log(obj);


// // HOF
// // function does one of two thin. either one or more 
// // function arguments or returns a function as result, often called a callback

// // In js function are first class citizen 
// // which means we can have high order functions

// const hof = (fn)=>  fn(5);
// const r1 = hof(function(x) {return x});
// console.log(r1);

// Closures
// Clousers in javascript are a mechanism for containing some sort of state.
// The variable used by or declared in the outer
// // Closures only function impure if it is modified the close of a variable
// const clouser = function() {
//   let count = 0;
//   return function inner() {
//       count++;
//       return count;
//   }  
// };

// const c1 = clouser()();
// console.log(c1);


// Currying
// Currying is the technique of translating the evaluation of a function that
// takes multiple arguments into eveluating a sequence of functions, each with a single
// argument.
// Currying almost reminds you of those methods, 
// right on prototypes that were shared among objects
// One argument at a time
// const multiply = (a, b) => a*b;
// multiply(3,4);
// const curriedMultiply = (a) => (b)=> a*b;
// curriedMultiply(2)(3);

// // Partial Aopplication (Slightly different currying)
// // It's a process of producing a function with a smaller number of parameter.
// // Second call except argument
// const multiply2 = (a, b, c) => a*b;
// const partialMultiply5 = multiply2.bind(null, 5);
// partialMultiply5(4, 10); 

// Memorization and Caching
// function addTo80(n) {
//     console.log('Long time');
//     return n+ 80
// };

// addTo80(5);

// Ideally not use in global object
// On the language in javascript, we use comething callled clousers
// let cache = {};

// Big companies love this pattern
// function memorizedAddTo80() {
//     let cache = {}; // avoid global scope
//     return function(n) {
//         if (n in cache) { // cache.n
//         return cache[n]; // cache.n
//         } else {
//             console.log('Long time');
//             return cache[n] =n + 80;
//         }
//     }
// };

// // Memorization is simply a way to remember a solution to solve problem,
// // so you dont have to calculate it again
// const m1 = memorizedAddTo80()(6);
// console.log('1 ', m1);
// console.log('2 ',m1);
// console.log(cache);

// Compose and pipe

// Compose
// Is the idea that any sort of data transformation that we do should be obvious
// It's kind od like a conveyor belt, right in a factory.

// Data that gets processed by a function that outputs some sort of
// data and that data get processed

// Left to right
// data --> fn --> data --> fn -->
// -50 * 3
// Ramda.js
// const compose = (f, g) => (data)=> f(g(data));
// const multiplyBy3 = (num) => num * 3;
// const takeAbsolute = (num) => Math.abs(num);
// const multiplyBy3AndAbsolute = compose(multiplyBy3, takeAbsolute);

// const mu1 =multiplyBy3AndAbsolute(-50);
// console.log(mu1);


// Pipe (Right to left);
// fn(fn2(fn3(50)));
// Compose (fn1, fn2, fn3) (50)
// pipe (fn3, fn3, fn1) (50)
// const pipe = (f, g) => (data)=> g(f(data));
// const multiplyBy3 = (num) => num * 3;
// const takeAbsolute = (num) => Math.abs(num);
// const multiplyBy3AndAbsolute = compose(multiplyBy3, takeAbsolute);

// const mu1 =multiplyBy3AndAbsolute(-50);
// console.log(mu1);


// Arity
// Number of arguments function takes
// function(n1, n2,n3) 3 Arity














