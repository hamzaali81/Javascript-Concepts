// Class # 04

//  Define function invoke
// function one() {
//     return 1
// };

// const result1 = one();

// const obj = {
//     two: function() {
//         return 2
//     }
// };
// obj.two();
 
// function three() {
//     return 3
// }

// three.call();

// // const four = new Function('return 4'); // Function Constructor 
// // four();

// const four = new Function('num', 'return num'); // Function Constructor 
// four(4);

// // Functions are objects

// function woohooo() {
//     console.log('woohooo');
// };

// // woohooo.name
// woohooo.yell = 'ahhhaa'
// console.log(woohooo.yell = 'ahhhaa');
// console.log(woohooo.name);

// const specialObj = {
//     yell: 'ahhhhhh',
//     name: 'wohooo',
//     // (): console.log('wohooo')
// };

 
// // 1
// var stuff = function() {};

// // 2

// function name(fn) {
//     fn()
// };
// name(function () {console.log('hi there')})

// // 3
// function b() {
//     return function c() {
//         console.log('bye');
//     }
// };

// var d =  b();
// d();


// // Bit Extra functions
// // Not use 
// for (let i = 0; i < 5; i++) {
//     function j() {}
//     j();
// }


// // Careful
// function ohoo() {};
// for (let i = 0; i < 5; i++) {
//     ohoo();
// }


// // careful
// // Reference Error
// // Undefined
// function a(param) {
    
//     return param
// }

// a()

// High Order Function

// Scenario (1) Two problems repeat code itself.  
// function letAdamLogin() {
//     let array = [];
//     for (let i = 0; i< 10000; i++) {
//         array.push(i);
//     }
//     return 'Adam grant access';
// };


// function letEvaLogin() {
//     let array = [];
//     for (let i = 0; i< 10000; i++) {
//         array.push(i);
//     }
//     return 'Eva grant access';
// };

// const result = letEvaLogin();
// console.log(result);


// Scenario (2) 

// const giveAccessTo = (name) => 'Access Granted to ' +name;

// function letUserLogin(user) {
//     // WHAT DATA to use.
//     let array = [];
//     for (let i = 0; i< 10000; i++) {
//         array.push(i);
//     }
//     return giveAccessTo(user);
// };

// const user = letUserLogin('Gilkerest');
// console.log(user);
// function letAdminLogin(admin) {
//     // WHAT DATA to use.
//     let array = [];
//     for (let i = 0; i< 10000; i++) {
//         array.push(i);
//     }
//     return giveAccessTo(admin);
// };

// const user = letAdminLogin('admin');
// console.log(user);

// HOF

// const giveAccessTo = (name)=> 'Access Granted to ' + name;

// function authenticate(verify) {
//    // WHAT DATA to user + function.
//    let array = [];
//    for (let i = 0; i< verify; i++) {
//        array.push(i);
//    }  
//    return true;
// };


// function lerPerson(person, fn) {
//     if(person.level === 'admin') {
//         fn(500000)
//     } else if(person.level === 'user'){
//         fn(10000000)
//     }
//     return giveAccessTo(person.name)
// };

// const result = lerPerson({ level: 'user', name: 'Time' }, authenticate);
// console.log(result);

// Exercise HOF

// const multiply = (num1)=> {
//     return function(num2) {
//         return num1 * num2
//     }
// };


// const result = multiply(10)(2);
// console.log(result);

// Clousers
// function a() {
//     let grandpa = 'grandpa';

//     return function b() {
//         let father = 'father';
//         return function c() {
//             let son = 'son';
//             return `${grandpa} > ${father} > ${son}`
//         }
        
//     }
// }

// const result = a()()();
// console.log(result);


// function boo(string) {
//     return function(name){
//         return function(name2) {
//             console.log(`hi ${string} ${name} ${name2}`);
//         }
//     }
// };

// boo('hamza')('ali')('ahmed');
// //  console.log(boooo);

// // Exercise clousers

// function callMeMaybe() {
    //     const callMe = 'Hi! I am now here!'; // this is  a clousers

//     setTimeout(() => {
//         console.log(callMe);
//     }, 4000);
//     const callMe = 'Hi! I am now here!'; // this is  a clousers
// };

// callMeMaybe();

// Clousers and memory

// const me = {
//    mood: "happy",

//    checkMood: ()=> {
//        console.log(this.mood);
//    },
//    myMood: function(){
//       console.log(this.mood);
//    }
// };

// me.checkMood();
// me.myMood();

// Clousers have two main benefits.
// 1. Memory Efficient.
// function heavyDuty(index) {
//     const bigArray = new Array(7000).fill('emoji');
//     console.log('created');
//     return bigArray[index];
// }

// const result = heavyDuty(2);
// console.log(result);
// console.log(result);
// console.log(result);
// console.log(result);

// function heavyDuty2() {
//     const bigArray = new Array(7000).fill('emoji');
//     console.log('created Again');
//     return function(index) {
//         return bigArray[index];
//     }
// }

// const result = heavyDuty2();
// console.log(result);
// console.log(result);
// console.log(result);
// console.log(result);

// 2. Encapsulation.
// const makeNuclearButton = ()=> {
//     let timeWithoutDestruction = 0;
//     const passTime = () => timeWithoutDestruction++;
//     const totalPeaceTime = ()=> timeWithoutDestruction;
//     const launch = () =>  {
//         timeWithoutDestruction = -1;
//         return '*';
//     };

//     setInterval(passTime, 1000);

//     return {
//         launch,
//         totalPeaceTime: totalPeaceTime
//     }
// };

// const ohno = makeNuclearButton();
// console.log(ohno.launch());
// console.log(ohno.totalPeaceTime());

// Exercise Clouser 02

// let view;

// function initialize() {
//     view = 'cake';
//     console.log('view has been set!');
// };

// initialize();
// initialize();
// initialize();
// console.log(view);

// Solution
let view;

// function initialize() {
//     let called = 0;

//     return function() {
//         if(called > 0) {
//             return ;
//         } else {
//             view = 'cake';
//             called++;
//             console.log('view has been set!',called);
//         }
//     }
// };

// const startOnce = initialize()();
// console.log(view);
// console.log(startOnce);
// console.log(startOnce);
// console.log(startOnce);
// console.log(startOnce);


// Exercise clousers
// const array = [1,2,3,4];
// for (let i = 0; i < array.length; i++) { // let allow us to block scoping
// // for (var i = 0; i < array.length; i++) {
//     setTimeout(() => {
//         console.log('I am at index '+i);
//     }, 3000);
// }

// Solution
// const array = [1,2,3,4];
// for (var i = 0; i < array.length; i++) { // let allow us to block scoping
// // for (var i = 0; i < array.length; i++) {
// (function(clouserI) {
//         setTimeout(() => {
//                 console.log('I am at index '+array[clouserI]);
//             }, 3000);
//         })(i)
//     }


// Prototypes
// Javascript is also Prototypal Inheritance.
// e.g Object---> Array + Function.

// const array = [];
// console.log(array.__proto__.__proto__);
// console.log(array.toString());

// function a() {}
// console.log(a.__proto__.__proto__);

// const obj1 = {};
// console.log(obj1.__proto__);

// let dragon = {
//     name: 'Tanya', 
//     fire: true,
//     fight() {
//         return 5
//     },
//     sing() {
//         if(this.fire) {
//             return `I am ${this.name}, the breather of fire`
//         }
//     }
// };

// let lizard = {
//   name: 'Kiki',
//   fight() {
//       return 1
//   }
// };

// console.log(lizard);
// console.log(dragon.sing());
// console.log(dragon.__proto__);

// Method Borrowing
// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());

// console.log(dragon.sing());

// Big Object Borrowing or complete method borrowing
// lizard.__proto__ = dragon;
// console.log(lizard.__proto__);
// console.log(lizard.sing());
// console.log(dragon.__proto__); // base object
// console.log(dragon.isPrototypeOf(lizard));
// console.log(lizard.isPrototypeOf(dragon));


// for(let prop in lizard) {
//     if(lizard.hasOwnProperty(prop)) {
//         console.log(prop);

//     }
// }


// console.log(lizard.ahha());
// console.log(lizard.ahha);

// const obj = {};
// console.log(obj.__proto__.__proto__);


// Some More Assumptions
// const obj = {name: 'Sally'};
// console.log(obj.hasOwnProperty('name')); // true
// console.log(obj.hasOwnProperty('hasOwnProperty')); // this is proptotype chain

// function a() {};

// // apply properties
// console.log(a.hasOwnProperty('call'));
// console.log(a.hasOwnProperty('apply'));
// console.log(a.hasOwnProperty('bind'));
// console.log(a.hasOwnProperty('name')); // is an optional fields. functions are objects

// // Scenario
// function multiplyBy5(num) {
//     return num * 5;
//     // console.log(); 
// };

// console.log(multiplyBy5.__proto__.__proto__);


// console.log(multiplyBy5.__proto__);
// console.log(Function.prototype); // base function
// console.log(Object.prototype); // provide base object
// console.log(Object.prototype.__proto__);

// const array = [];
// console.log(array.hasOwnProperty('map')); // this only one location in memory 
// console.log(array.__proto__.hasOwnProperty('map'));


// console.log(Array.prototype); // Base Array
// console.log(array.__proto__); // Base Array

// Arrays and functions are object in js
// Proto actuallay lives in prototype

// let human = {
//     mortal: true,
// };

// let socrates = Object.create(human);
// socrates.age = 56;
// console.log(socrates.mortal);
// console.log(human.isPrototypeOf(socrates));


// Prototypal Inheritance

function multiplyBy5(num) {
    return num * 5;
};

console.log(multiplyBy5.prototype);
console.log(Function.prototype);
console.log(multiplyBy5.__proto__);
console.log(multiplyBy5.__proto__.__proto__);
console.log(Object.prototype);
console.log(typeof Object); // prototype property
// The Object constructor creates an object wrapper.
const obj = {}
console.log(typeof obj);
console.log(typeof Object);
console.log(typeof Object.prototype);

console.log(obj.prototype);

const arr = [];
console.log(arr.prototype);

console.log('string'.prototype);

console.log(String.prototype);
// const result = multiplyBy5(2);
// console.log(result.__proto__);
// console.log(result.prototype);



// Exercise - extend the functionality of a build in object

// #1
// Date object => to have new method .lastYear()
// Which shows you last year 'YYYY' format.

new Date('1900-10-10').lastYear();
// '1899'

//#Bonus
// Modify .map() to print 'cake' at thee end.
// each ite

console.log([1,2,3].map()); // 1cake, 2cake, 3cake


































