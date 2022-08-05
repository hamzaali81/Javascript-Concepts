// // Clousers

// // 
// function one() {
//      return 1
// }

// one()

// // Method (Function inside of an object)
// const obj = {
//     two() {
//         return 2
//     }
// };

// obj.two();

// function three() {
//     return 3
// };

// three.call(); 


// // function constructor
// // const four = new Function('return 4');
// const four = new Function('num','return num');
// four(2);


// function woohooo() {
//     console.log('woohooo');
// }

// // This is special objects called callable objects. But functions are objects
// console.log(woohooo.yell = 'ahhhhhhh');

// // Underneath the hood, how function call.
// // const specialObj = {
// //     yell: 'ahhhhhhh',
// //     name: 'woohooo',
// //     (): console.log('woohooo'); 
// // }

// // function properties 
// // 1. Call 
// // 2. Apply
// // 3. Bind 



// // const obj1 = {

// // };

// // obj.call
// // obj.bind
// // obj.apply


// // Functions are first class citizen.
// // 1. Functions assign variable and props

// var stuff = function() {}

// // 2. Function pass function as a arguments
// function a(fn) {
//     fn()
// };

// // a('function() {console.log('hi')}')


// // 3. 
// // functions are data
// function b() {
//     return function c() {
//         console.log('bye');
//     }
// };

// var d = b()();

// // JS first class citizen

// function a() {
        
// }

// for (let i = 0; i < array.length; i++) {
//     // Not used
//     // function a() {
        
//     // }    
//     a();
// }


// function b() {
//     // Keep Locking up the scope chain
//     return param
// }

// b()


// High Order Function
// Function as an argument or a functions return another function.

// Scenario
// function letAdminLogin() {
//     let array = [];

//     for (let index = 0; index < 1000; index++) {
//         const element = array.push(index);
//         // console.log(element);
//     }

//     return 'Access Granted to Adam'
// }
// var resultFun1 = letAdminLogin();
// console.log(resultFun1);

// // In programming don't repeat youself
// function letEvaLogin() {
//     let array = [];

//     for (let index = 0; index < 1000; index++) {
//         const element = array.push(index);
//         // console.log(element);
//     }

//     return 'Access Granted to Adam'
// }
// var resultFun2 = letEvaLogin();
// console.log(resultFun2);

// // Generic Function
// function letUserLogin(user) {
//     let array = [];
//     for (let i = 0; i < 1000; i++) {
//         const element = array.push(i);
//         console.log(element);
//     }

//     return `Access Granted to ${user}`
// // };

// let resultFun3 = letUserLogin('Eva');
// console.log(resultFun3);

// // Improve Code

// const giveAccessTo = (user) =>  
//      'Access Granted to ' + user;

// function letUserLogin(user) {
//     // we now tell the function what data
//     let array = [];
//     for (let i = 0; i < 1000; i++) {
//         const element = array.push(i);
//     }
//     return giveAccessTo(user);
// };

// letUserLogin('Eva');


// function letAdminLogin(admin) {
//     // we now tell the function what data
//     let array = [];
//     for (let i = 0; i < 1000; i++) {
//         const element = array.push(i);
//     }
//     return giveAccessTo(admin);
// };

// letUserLogin('Eva');


// HOF

// function authenticate(verify) {
//     let array = [];
//     for (let i = 0; i < verify; i++) {
//         const element = array.push(i);
//     }

//     // return true;
//     return giveAccessTo(person.name);
// };

// function sing(person) {
//     return 'la la la my name is ' +person.name; 
// }

// function letPerson(person, fn) {
//     if(person.level === 'admin') {
//         // fn(500)
//         fn(person)
//         return fn(person)
//     } else if(person.level === 'user') {
//         // fn(30000)
//         return fn(person)
//     } 
//     return giveAccessTo(person.name)
// };

// const resultFun4 = letPerson({level: 'user', name: 'Tim'}, authenticate, sing);
// console.log(resultFun4);

// Code Exercise
// One Generic function , MultiplyByTen and MultiplyByTwo

// const MultiplyBy = function(num1) {
//     return function(num2) {
//         return num1 * num2 
//     }
// };

// const highOrder = MultiplyBy(2)(10);
// console.log(highOrder);


// Clousers
// function + lexical scope

// Lexical Scope:
// That is the javascript engine known based on where our 
// code is written before we even run the code.
// What variables each function has access to.

// Clousers allow a function to access variables from an enclosing scope or environment, even after it
// leaves the scope in which it was declared


// Function invoke but variables remain 
// variables store in memory heap this process called clousers
// The javascript engine will make sure that the function has access to all of the variables outside ofthe function with is clousers.
// Clousers are also called lexical scoping.
// Lexical scoping, lexical means where it is written.
// Scoping is what variable we have access to.
// lexical environment === [[scope]]
// When we write the functions.

// function a() {
//     let grandpa = 'grandpa';
//     return function b() {
//         let father = 'father';
//         return function c() {
//             let son = 'son';
//             return `${grandpa} > ${father} > ${son}`;
//         }
//     }
// }
// // We remove the variable environment.
// const resultFun4 = a()()();
// console.log(resultFun4);

// function boo(str) {
//     return function(name2) {
//       console.log(`${str} ${name2}`);
//     }
// }
 
// const clouserFun1 = boo('Hello')('hamza');
// console.log(clouserFun1);


// Clouser Exercise

// function callMeMaybe() {
//     // const callMe = 'Hi!, I am now here';

//     setTimeout(() => {
//         console.log(callMe);
//     }, 4000);

//     const callMe = 'Hi!, I am now here';
// }


// callMeMaybe();

// Clouser and memory

// Clouser have two main benefits.
// 1.Memory Efficient
// 2. Encapsulation

// 1. Memory Efficient

// function heavyDuty(index) {
//     const bigArray = new Array(7000).fill('Smile');
//     console.log(bigArray);
//     return bigArray[index]
// };

// const resultArr = heavyDuty(2);
// console.log(resultArr);

// function heavyDuty2() {
//     const bigArray = new Array(7000).fill('Kilo')
//     console.log('Created Again!');
//     return function(index) {
//         return bigArray[index]
//     }
// };

// const resultArr2 = heavyDuty2();
// resultArr2(2);

// console.log(resultArr2(2)); 

// Encapsulation
// U

// const makeNuclearButton = ()=> {
//     let timeWithoutDestruction = 0;
//     const passTime = ()=> timeWithoutDestruction++;
//     const totalPeaceTime = ()=> timeWithoutDestruction;
//     const launch = () => {
//         timeWithoutDestruction = -1;
//         return '*'
//     };
//     setInterval(passTime, 1000);
//     return {
//         launch: launch,
//         totalPeaceTime: totalPeaceTime
//     };
// };

// const startNuclerBomb = makeNuclearButton();

// Exercise clousers
// How to fix global scope bug
// let view;

// function initialize() {
//     view = '**';
//     console.log('view has been set!');
// };

// initialize();
// initialize();
// initialize();

// Solution

// let view;


// function initialize() {
//     let called = 0;

//     view = '*';
//     return ()=> {
//         // if(called === 0) {
//             if(called > 0) {
//             called++;
//             return;
//         } else {
//             view = '**';
//             called++;
//             return null;
//         }
//     }
// }

// const result = initialize();
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());


// Exercise 03
// var function scope
// let,const block scope {}
// const array = [1,2,3,4];
// for (var i = 0; i < array.length; i++) {
//     (function(i) {
//         setTimeout(() => {
//            console.log('I am at index '+i); 
//         }, 3000)
//     })(i)
// }

// Clouser Summary
// Clouser allow a function to access variables from an enclosing
// scope or outer scope environment.


/*----------------------------------------------------------------------------------------------*/

// Prototypal Inheritance
// Objects --> Arrays + function
// This chain called prototypal Inheritance.

// const array = [];

// console.log(array.__proto__);

// function a() {}

// console.log(a.__proto__.__proto__.__proto__);

// Call, apply and bind() allow us to borrow functions from other objects.
// Call and bind --> Same but minor difference. Bind create a copy of function
// e.g const singLizard = dragon.sing.bind(lizard, "lion");
// apply --> Same but minor difference. apply is used to pass an array of arguments.

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5;
    },
    sing() {
        return `I am ${this.name}, the breather of fire`;
    }
};

// console.log(dragon.sing());

let lizard = {
    name: 'Kiki',
    fight() {
        return 1;
    }
};



const singLizard = dragon.sing.bind(lizard);
console.log(singLizard());

// Scenario Lizard access dragon properties

// Behind the OOP
lizard.__proto__ = dragon;
lizard.sing();

console.log(dragon.isPrototypeOf(lizard));
console.log(lizard.isPrototypeOf(dragon));


// Prototype chain (Object) ---> Arrays + function
// Function Lexical Environment
// PrintName() variable Environment


for(let prop in lizard) {
    console.log(prop);
    if(lizard.hasOwnProperty(prop)) {
        console.log('Okkkkk');
    }
}
console.log(lizard);



// __proto__ 
// console.log(obj.__proto__.__proto__ = null); // null pointer 

// Object doesnot have its own property
const obj = {name: 'Sally'};
obj.hasOwnProperty('hasOwnProperty');
console.log(obj.hasOwnProperty('hasOwnProperty')); // false

function a() {}
console.log(a.hasOwnProperty('bind')); // false
console.log(a.hasOwnProperty('call')); // false
console.log(a.hasOwnProperty('apply')); // false

// Function are special type of obj
console.log(a.hasOwnProperty('name')); // true

// Function
// Code
// Name (optional)
// Properties
// bind, apply, call

// Functions
// Prototype
// __proto__

function multiplyBy5(num) {
    return num * 5
};

console.log(multiplyBy5.__proto__);
console.log(Function.prototype);
 
// Function 
// prototype: {..} ---> __proto__

// Object
// prototype: {hasOwnProperty: f()} ----> __proto__
console.log(Object.prototype.__proto__);

const array = [];
// console.log([].__proto__.__proto__.hasOwnProperty('map')); //true
// console.log(Array.prototype); // base array
// console.log(array.prototype); // base array
// // Proto inherit base function (prototype) (Base (Function))
// console.log(__proto__.prototype);
// console.log(__proto__.prototype.__proto__);
// console.log(__proto__.proto__.__proto__.null);

// Create Own prototypes

let human = {
    mortal: true
};

let socrates = Object.create(human); // prototype chain
socrates.age = 12;
console.log(socrates.mortal);
console.log(human.isPrototypeOf(socrates));


// Only functions have the prototype property.
// __proto__.prototype

function multiplyBy5(num) {
    return num * 5
};

console.log(multiplyBy5.prototype); // Return Contructor
// Constructor is a blue print or prototype ()


// This part is little bit tricky (prototype is only for function).
// Every function has an prototype property
console.log(Object.prototype); // Object has function (because of property )
console.log(typeof Object); // function
console.log(typeof {}); // object (This is actual object)
console.log(typeof Object.prototype);
const arr = [];
console.log(arr.prototype);  // undefined
console.log('string'.prototype); // undefined
console.log(String.prototype );

// In js everything is an object. Because the inherit prototype base object.
// proto always points the prototype.




























