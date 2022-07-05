// class 02

// 1.Execution Context
// printName()
// findName()
// sayMyName()
// global() this === windows

// function printName() {
//     return `Andrei Neagoie`
// };

// function findName() {
//     return printName()
// };

// function sayMyName() {
//     return findName()
// };

// const user = sayMyName();
// console.log(user);

// window.user;

// 2.Lexical Environment
// function printName() {
//     return `Andrei Neagoie`
// };

// function findName() {
//     function a() {
        
//     }
//     return printName()
// };

// function sayMyName() {
//     return findName()
// };

// const user = sayMyName();
// console.log(window.user);

// // 3.Hoisting

// console.log('1----------');
// console.log(teddy);
// console.log(sing());
// var teddy = 'bear';

// // function Expression
// var sing2 = function() {
//     console.log('uhhhh la la la');
// };

// // function decleration
// function sing() {
//     console.log('uhhhh la la la');
// }


// // Hoisting Exercise

// var one = undefined;
 
// var one = 1;
// var one = 2;

// console.log(one);


// // Exercise 01 (Hoisting)
// a()

// function a() {
//     console.log('hi');
// }

// function a() {
//     console.log('bye');
// }

// // Exercise 02 (Hoisting)
// // e.g var favouriteFood = undefined;
// // 
// var favouriteFood = "grapes";

// var foodThoughts = function () {
//     console.log("Original favourite food: "+ favouriteFood);

//     var favouriteFood = "sushi";

//     console.log("New favourite food: "+ favouriteFood);
// };

// foodThoughts();


// Exercise 03 (Hoisting)

// function bigBrother(){
//     function littleBrother() {
//       return 'it is me!';
//     }
//     return littleBrother();
//     function littleBrother() {
//       return 'no me!';
//     }
//   }
  
//   // Before running this code, what do you think the output is?
// const brother =  bigBrother();

// console.log(brother);

//4. Function Invocation 

// Function Expression
// This function define runtime
// var canada = function() {
//     console.log('cold');
// }
// // Function Decleration
// function india() {
//     console.log('warm');
// }

// // Function

// // Invocation/Call/Execution
// canada()
// india()

// function marry(person1, person2) {
//     console.log(arguments);
//     console.log(Array.from(arguments));
//     return `${person1} is now married to ${person2}`
// };

// marry('tim', 'tina');


// function marry2(...args) { // Rest operator
//     console.log('arguments',args);
//     return `${args[0]} is now married to ${args[1]}`
// };

// const name = marry2('tim', 'tina');
// console.log(name);

// function abc() {
//     console.log(arguments);
// }

// abc();

//5. Variable Environment
// function two() {
//     var isValid; // undefined
// }


// function one() {
//     var isValid = true; // local environment
//     two();
// }


// var isValid = false;
// one();

// // 6. Scope Chain

// var x = 'x';
// function findName() {
//     console.log(x);
//     var b = 'b';
//     return printName();
// }

// function printName() {
//     var c = 'c';
//     return 'Andrei Neagoie'
// }


// function sayMyName() {
//     var a = 'a';
//     return findName();
// }

// function sayMyName() {
//     var a = 'a';

//     return function findName() {
//         var b = 'b';

//         return function printNAme() {
//             var c = 'c';
//             return 'Andrei Neagoie'
//         }
//     }
// }

// const naming=  sayMyName()()();
// console.log(naming);


// Exercise
// 'use strict'
// function weird() {
//     // Leakage of global varibales
//     height = 50;
//     return height;
// }

// weird();

// var heyhey = function doodle() {
//     // do something
//     // doodle();
//     return 'heyhey'
// }


// const result = heyhey();
// console.log(result);
// doodle(); // Refrence Error (Not in scope chain)

// 7.
// function Scope
// vs
// block Scope


// if(5 > 4) {
//     var secret = '12345'; // Variable functionally scoped
    
// }

// console.log(secret);

// Exercise Block Scope

// function loop() {
//     for (var i = 0; i < 5 ; i++) {
//         console.log(i);
//     }
//     console.log('Final',i);
// }

// loop();

// function loop() {
//     for (let i = 0; i < 5 ; i++) {
//         console.log(i);
//     }
//     console.log('Final',i); // Outside environment
// }

// loop();

// // 8.Global Variables
// var a = 80;
// Test Browser
// Note: Garbage Collection

// 9.IIFE

// (function () {
//     console.log('IIFE');
//     }) ();

    // (function () {
    //     console.log('IIFE');
    //     }()); // Undefined
    

// 10. This Keyword
// obj.someFunc(this)

// console.log(this);

// function a() {
//     'use strict'
//     console.log(this);
// }

// a();

// this benefits
// 1. gives methods access to their object
// 2. execute same code for multiple objects
// 3. 

// const obj = {
//     name: 'hamza',
//     // sing: function(){
//     //     // return `What is your ${name}`
//     //     // console.log(obj);
//     //     // console.log(this);
//     //     return `What is your ${this.name}`
//     // }
//     sing(){
//         // return `What is your ${name}`
//         // console.log(obj);
//         // console.log(this);
//         return `What is your ${this.name}`
//     },

//     singAgain() {
//         // Tip: In programmer not use repetative code
//         // return `What is your ${this.name}`
//         return `${this.sing()} !`

//     }
// }
// console.log(obj.sing());
// console.log(obj.singAgain());

// 1: gives methods access to their object
// 2: execute same code for multiple

// objects

// function importantPerson() {
//     // console.log('this',this);
//     console.log(this.name+ ' !');
// }

// const name = 'Sunny';
// // window.importantPerson()


// const obj1 = {
//     name: 'Cassy',
//     importantPerson
// }

// const obj2 = {
//     name: 'Jocob',
//     importantPerson
// }

// // importantPerson(); // Sunny
// console.log(obj1.importantPerson());

// Exercise Dynamic vs lexical Scope



// const a = function() {
//     console.log('a', this);

//     const b = function() {
//         console.log('b', this);

//         const c = {
//             hi: function() {
//                 console.log('this', this);
//             }}
//         c.hi()
//     }
//     b();
// }

// a();

// const obj = {
//     name: 'Billy',
//     sing() {
//         console.log('a', this);
//        var self =this;
//         var anotherFunc = function() {
//             console.log('b', this);
//             console.log('self',self);
//         }
//         // var anotherFunc = ()=> {
//         //     console.log('b', this);
//         // }

//         // return anotherFunc.bind(this);
//         return anotherFunc;
//     }
// };

// obj.sing()()

// call, apply, bind


// function a() {
//     console.log('hi');
// };

// // a.call() === a();
// a.apply() === a();

// a()


// const wizard = {
//     name: 'Merlin',
//     health: 100,
//     heal(num1, num2) {
//         console.log(num1, num2);
//         return this.health = 100 + num1 + num2;
//     }
// };

// const archer = {
//    name: 'Robin Hood',
//    health: 30 
// }

 
// // Method Borrowing
// // console.log(wizard.heal.call());
// console.log('1',archer);
// // wizard.heal.call(archer, 1, 2);
// // wizard.heal.call(archer, 1,2);
// const healArcher = wizard.heal.bind(archer, 100,200);
// console.log('2',archer);
// console.log(healArcher());

// Exercise Bind, Call, Apply

// const array = [1,2,3];

// function getMaxNumber(arr){
//   //code here  
// }

// getMaxNumber(array) // should return 3

// bind and Currying
// function currying

// function multiply(a,b) {
//     return a * b;
// }

// let multiplyByTwo = multiply.bind(this, 2)(2);
// console.log(multiplyByTwo);


// Exercise this keyword

var b = {
    name: 'jay',
    say() {console.log(this)}
};

var c = {
    name: 'jay',
    say() {
        return function() {
            console.log(this);
        }
    }
};

var d = {
    name: 'jay',
    say() {
        return ()=> console.log(this)
    }
};


console.log(b.say());
console.log(c.say()());
console.log(d.say()());





























































































