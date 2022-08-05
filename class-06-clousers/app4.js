// Clousers
//1. 
function one() {
    return 1
}

one()


// 2.
const obj = {
    // this function called method
    two() {
        
    }

};

//3.
function three() {
    return 3;
};

three.call();

// 4.
const four = new Function('num','return 4')  // function constructor


function wohooo() {
    console.log('wohooo');
};

wohooo.yell = 'ahhhhh'; // This is a special Type of obejct called callable object

const specialObj = {
    yell: 'ahhhhh',
    name: 'wohoooo',
    // (): console.log('Hello') // this is callable obj
};

// Function properties call, apply and bind



function a() {
    console.log('name: hamza');
}

a.name

console.log(a.name);




// First class citizens: 
// Functions are first citizen in JS.
// 1. Function assign variables and properties.

// What means
// 1
var stuff = function() {} // assign variables and prop

// 2
function a(fn) {
    fn() 
};

a(function() {});  // function as a parameter
a(function() {console.log('hi there')})

// 3 Reutruns value other function
function b() {
    return function c() {
        console.log('hi');
    }
}

var d = b();
d();


// HOF
// Function return as an Argument and return another function.
// function letAdamLogin() {
//     let array = [];
//     for (let i = 0; i < array.length; i++) {
//       array.push(i)
//     };
//     return 'Access Granted to Adam'
// };
// function letEvaLogin() {
//     let array = [];
//     for (let i = 0; i < array.length; i++) {
//       array.push(i)
//     };
//     return 'Access Granted to Adam'
// };


// const accessAdam = letAdamLogin();
// console.log(accessAdam);

// const accessEva = letEvaLogin();
// console.log(accessEva);

// HOF Powers

const giveAccessTo = (name) => {
    // We now tell the function what data to use.
   return `Access Granted to ${name}`
};



// function letUserLogin(user) {
//     let array = [];
//     for (let i = 0; i < array.length; i++) {
//       array.push(i)
//     };
//     return giveAccessTo(user)
// };

// const userLogin = letUserLogin('Evan');
// console.log(userLogin);


// HOF POWER
function authenticate(verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i)
    };
    return true;
}


function letPerson(person, fn) {
    if(person.level === 'admin') {
        fn(500000)
    } else if(person.level === 'user') {
        fn(1000000)
    };

    return giveAccessTo(person.name)
}

const personAccess = letPerson({level: 'user', name: 'Tim'}, authenticate);
console.log(personAccess);

const multiplyBy = (a)=> {
    return (b)=> {
        return a*b
    }
};

// Power is non repeat function
const multiply = multiplyBy(10)(2);
console.log(multiply);
// multiplyByTwo()
// multiplyByTen()


// Clousers
// function + scope = clousers
// Is a unique js feature
// In js engine a has access all the variable outside the function
// Clousers are also called lexical scoping
// Lexical where it is written
// JS is lexically and statically scoped
// Lexical Environment === [[scope]]
function a() {
    let grandpa = 'grandpa';  // this is save in clouser box and memory heap
    return function b() {
        let father = 'father';
        return function c() {
            let son = 'son';
            return `${grandpa} > ${father} > ${son}`
        }
    }
};

const hierarchy = a()()();
console.log(hierarchy);

function boo(str) {
    return function(name) {
        return function(name2) {
            console.log(`${str} > ${name} > ${name2}`);
        }
    }
}

const booHie = boo('hi')('tim')('beca');
// console.log(booHie);

// Exercise

// function callMeMaybe() {
//     // This is because of clousers
//     const callMe = 'Hi! I am now here!'
//     setTimeout(()=> {
//         console.log(callMe); // this part is a clouser
//     }, 4000);
// };

// callMeMaybe();

// Clouser vs Memory
// Clouser is a super power
// Two benefits
// 1. Memory Efficient

function heavyDuty(index) {
    const bigArray = new Array(7000).fill(':)');
    return bigArray[index]
};

const resHeavyFn = heavyDuty(2);
console.log(resHeavyFn);


function heavyDuty2() {
    const bigArray = new Array(7000).fill(':)');
    return function(index) {
        return bigArray[index]
    }
};

const resHeavyFn2 = heavyDuty2()(2);
console.log(resHeavyFn2);

// Apply clousers

// 2. Encapsulation
// Hidding the information of unnecessary

const makeNuclearButton = () => {
    
    let timeWithoutDestruction = 0;
    const passTime = ()=> timeWithoutDestruction++;
    const lauch = ()=> {
        timeWithoutDestruction = -1;
        return 'bomb';
    };
    const totalPeaceTime = ()=> timeWithoutDestruction;
    setInterval(passTime, 1000);

    return {
        // lauch,
        totalPeaceTime: totalPeaceTime
    }

};

const ohno = makeNuclearButton();
console.log(ohno.lauch);

// Exercise 
// let view;
// function initialize() {
//     view = 'view';
//     console.log('view has been set!');
// };

// initialize();
// initialize();
// initialize();
// initialize();
// console.log(view);


// Implemnt clousers

let view;
function initialize() {
    let called = 0;

    return function() {
        if(called > 0) {
            return;
        } else {
            view; ':)'
            called++;
            console.log('view has been set!');
        }
    }
};

const intializeApp = initialize()();
initialize();
initialize();
initialize();
initialize();
// console.log(view);


// Exercise

const array = [1,2,3,4];

for(var i = 0; i<array.length;i++) {
// for(let i = 0; i<array.length;i++) {
    // Let and const allows us to block scope
    // var allows us to function scope
    // setTimeout(function() {
    //     console.log('I am at index'+i);
    // }, 1000)
    // Solution two IIFE

    // (function(i) {
    //     // use in var keyword
    //     setTimeout(function() {
    //     console.log('I am at index '+i);
    // }, 1000)
    // })(i)
};

// More Focus this topics
// Pillar 02 (Prototypes)
// Prototypal Inheritance

// Array and functions are object

// Inheritance is an object getting access to the properties and methods 
// of another object.

// Array and function to access object the properties of object.

// This is classical Inheritance
// There is actually no classes in js 
// Class keyword is a syntatic sugar.
// 

const array1 = [];
console.log(array1.__proto__.__proto__); // this is the base object

function k() {};
console.log(k.__proto__.__proto__); // base object

const obj1 = {};
console.log(obj1.__proto__);

// Part 02

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },

    sing() {
        if(this.fire) {
            return `I am ${this.name} breather of fire`
        }
    }
};

let lizard = {
    name: 'kiki',
    fight() {
        return 1
    }
};


// const singlizard = dragon.sing.bind(lizard);
// console.log(singlizard());

lizard.__proto__ = dragon;
console.log(lizard.fire);
console.log(lizard.sing());

// prototype
console.log(dragon.isPrototypeOf(lizard)); // Lizard access the functionality

for(let prop in lizard) {
    
    if(lizard.hasOwnProperty(prop)) {  // Check properties 
        console.log(prop);

    }
};

// What is base object
const obj4= {
    name: 'sally'
};

console.log(obj4.hasOwnProperty('name'));
console.log(obj4.hasOwnProperty('hasOwnProperty'));

// function are object: Function is an special type of object called callable object.

function fun() {};

console.log(fun.hasOwnProperty('call')); // call is different location in memory
console.log(fun.hasOwnProperty('apply'));
console.log(fun.hasOwnProperty('bind'));


console.log(a.__proto__);
console.log(a.__proto__.__proto__);
console.log(Function.prototype);
console.log(Object.prototype);

// __proto__ is simply reference and pointer to up the chain prototype

console.log(Array.prototype);
const array3 = [];
console.log(array3.hasOwnProperty('map')); // map is different location in memory


let human = {
    mortal: true
};

// Object.create prototype chain
let socrates = Object.create(human);

socrates.age = 45;

console.log(socrates.age);
console.log(socrates.mortal);
console.log(human.isPrototypeOf(socrates));

// Prototypal Inheritance
// Only function have the prototype property

// __proto__ ---> prototype


function multiplyBy5(num) {return num * 5}

// Constructor function usually start with capital letter
console.log(multiplyBy5.prototype);
console.log(multiplyBy5.__proto__);
console.log(Function.prototype);
console.log(multiplyBy5.__proto__.__proto__);

console.log(Object.prototype);
console.log(Function.prototype);
console.log(typeof Object);
console.log(typeof {});
console.log(typeof Object.create);
console.log(typeof Object.prototype);


const obj5 = {};
console.log(obj5.prototype);

const arr5 = [];
console.log(arr5.prototype);

console.log('string'.prototype); // JS convert string into prototype chain

console.log(String.prototype); // String constructr inherit

// Hom
// Standard build-in javascript objects 
// References

// prototypes:
// 1. Not Repeat itself over and over
// 2. Not Repeat itself

// Exercise - extend the functionality of a built in object.

// #1
// Date object => to havw new method .lastYear()
// Which shows you last year 'YYYY' format.

// new Date('1999-10-10').lastYear();
// '1899'


// #Bonus
// Modify .map() to print '*' at the end of each ite.

// console.log([1,2,3].map());
//1*, 2*, 3*

// const date = new Date('1999-10-10');
Date.prototype.lastYear = function() {
    console.log(this);
    return this.getFullYear() -1 ;
};


const lastyear =new Date('1999-10-10').lastYear();
console.log(lastyear);



Array.prototype.map = function() {
   
    var newArray = []
    for (let i = 0; i < this.length; i++) {
       newArray.push(`${i}*`)
   }
   return newArray;
};

console.log([1,2,3].map());


// Exercise 03
// How would you be able to create your own .bind() method using call or apply.

// Hint:

// Function.prototype.bind = function(){
// }

// See the attached solution when you are ready!








































































































































































































































































































































































