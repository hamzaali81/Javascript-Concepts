// Scope

// console.log(window);

// function bb() {
//     var a = "hello";
// }

// bb()
// console.log(a);

// Advanced Control Flow

// 1. Ternary Operator
function isUserValid(bool) {
    return bool;
};

var answer = isUserValid(true) ? "You amy entered" : "Access Denied";

// 2. Advanced Control Flow 
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {

        case "forward":
            whatHappens = "you entered a monster"
            break;
    
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

const res =moveCommand("forward");
console.log(res);

// ES6

// let + const
// const player = 'bobby';
// const experience = 100;
// let wizardLevel = false;

// if(experience > 90) {
//     let wizardLevel = true;  
//     console.log('inside',wizardLevel);
// };

// console.log('outside', wizardLevel);
// true
// false


const player = 'bobby';
let experience = 100;
var wizardLevel = false;

if(experience > 90) {
    let wizardLevel = true;  
    console.log('inside',wizardLevel);
    const player = 'John';
    console.log(player);
};

console.log('outside', wizardLevel);
console.log(player);
// true
// true


const name = 'john snow';

const obj= {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
};

console.log(obj);

const a1 = 'Simon';
const b2 = true;
const c3= {};

const obj1 = {
    a1, // ES6 feature key value same than assign value
    b2,
    c3
}


// Template String ES6 feature 
const first_lastname = `Hamza ${a1}`;
console.log(first_lastname);
// Default arguments

function greet(name = '', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10}. wha a lovely ${pet}`
};

const greetFn = greet();
console.log(greetFn);


// Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

console.log(sym1);
console.log(sym2);
console.log(sym3);
console.log(sym1 === sym2);

const add = (a, b)=> a + b;
console.log(add(1,2));


// Advanced Functions

// clousers
//  A function ran. the function executed it's never going execute again
// BUT it's going that there are refrences to those variable
// so the child scope always access to the parent scope.
const first = () => {
    const greet = 'Hi';
    const second = ()=> {
        // alert(greet);
    }
    return second;
};

const newFunc = first();
newFunc()


// Currying
// One argument at a time in a function
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a*b;
const result= curriedMultiply(3)(4);
console.log(result);

// compose
const compose = (f,g)=> (a) => f(g(a));

const sum = (num) => num + 1;
compose(sum, sum)(5);

// Avoiding side effects and function purity
var a =1;
// function i s own universe
function b() {
    a = 2
}

// function purity: Side effects (working ) top performer
// Always retain recreate something is deterministic 

// Advanced Arrays

const array = [1,2,10,16];

const double = [];
const newArray = array.forEach((num) => { // forEach alots of side effects
    double.push(num * 2);
});

console.log(newArray);
console.log(double);

// map, filter, reduce

const mapArray = array.map((num)=> num * 2); // return new array
console.log(mapArray);

// filter

const filterArray = array.filter((num)=>  num > 5);

console.log(filterArray);

// reduce
// num: this is array element.
// Acc: Something store information in the body.
const reduceArray = array.reduce((accumulator, num) => { 
   return accumulator + num;
}, 0);

console.log(reduceArray);


// Advanced objects

// reference type (non-primitive type) they create by programmer

[] === [] // false (Arrays are just object in the end of the day)
[1] === [1] // false

const objT1 = {value: 10}
const objT2 = objT1; // Refrence same
const objT3 = {value: 10} 
objT1 === objT2 // true (Same reference)
objT1 === objT3 // false (Different Reference)


// context vs scope
function b() {
    let f = 4;
}

b()
// console.log(f); // Reference Error this is an scope

// were we are within the object called context
console.log(this === window);
// console.log(this.alert()); this refers what object
function h() {
    console.log(this);
};

h();

var object4 = {
    a: function() {
        console.log(this);
    }
};

// instantiation
// making instances. Muktiple copies of an object

class Player {
    constructor(name, type) {
    this.name = name;  // access name
    this.type = type; 
    }
    
    introduce() {
        console.log(`Hi, I am ${this.name}, I am a ${this.type}`);
    }
};

class Wizard extends Player {
    constructor(name, type, age) {
        super(name, type);

    }

    play() {
        console.log(`WEEEEEEEE I am a ${this.type}`);
    }
};

const wizard1 = new Wizard('Shell', 'Healer'); // new Keyword represent constructor
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// classical Inheritance
var Player8 = function(name, type) {
    this.name = name;
    this.type = type;
}

Player8.prototype.introduce = function() {
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
}

var wizard3 = new Player8('Shelly', 'healer');
var wizard4 = new Player8('Shawn', 'dark Magic');



// ES7

// .includes() Array Method


console.log('Hello'.includes('o')); // true
const pets = ['cat', 'dog'];
pets.includes('dog');

// Exponential Operator
const square = (x) => x**2; // x power 2
const res8 = square(3);
console.log(res8); 

// ES8 
// 1.String padding
// .padStart() (total spaces used including the spaces the string)
// .padEnd()
console.log('Turtle'.padStart(10));
console.log('Turtle'.padEnd(10));

//2.
const fun = (
    a,
    b,
    c,
    d,
    ) => {
    console.log(a);
};

fun(1,2,3,4,)

// 3

Object.values
Object.entries
Object.keys


let obj9 = {
    username0: 'Santa',
    username1: 'Redolf',
    username3: 'Mr. Grinch'
};

console.log(Object.keys(obj9));
console.log(Object.values(obj9));
console.log(Object.entries(obj9));

// Object.keys(obj9).forEach((el)=> {
//     console.log(key, obj[key]);
// });

// Object.values(obj9).forEach((el)=> {
//     console.log(key, obj[key]);
// });

// Object.entries(obj9).forEach((el)=> {
//     console.log(key, obj[key]);
// });
// Object.entries(obj9).map((el)=> {
//     return value[1] + value[0].replace('username', '')
// });


// ES10
// .flat()

// const array123 = [1,2,3,4,5];
const array123 = [1,[2,78],3,[4,9,8],5];

// console.log(array123.flat());
// console.log(array123.flat(10)); 

const entries = ['bob', 'sally', ,,,,, 'candy'];
console.log(entries.flat());

// flatMap
const resArr123 = array123.flatMap((el)=> {
    return el + 'Karachi';
});

console.log(resArr123);



const userEmail21 = '               eddytheeagle@gmail.com';
const userEmail34 = 'johhny@gmail.com         ';

console.log(userEmail21.trimStart());
console.log(userEmail34.trimEnd());


const userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['han',21]];


const entries1 = Object.fromEntries(userProfiles); // Convert Object
console.log(entries1);
Object.entries(entries1); // Convert Array

// try
// catch(error){}


// Advnced Loops
const basket = ['apples', 'oranges', 'grapes'];

for(let i = 0; i< basket.length; i++) {
    console.log(basket[i]);
};


// 1. for of (arrays, strings)
// Iteration (go one by one)
for(item of basket) {
    console.log(item);
};


// 2. for in (why not iterating) numerating (object in js numerable)
// enumerating - objects
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
};

for(item in detailedBasket) {
    console.log(item);
};



// ES2020
// BigInt (New type in js)
// Nullish coalescing operator?
// Optional chaining operator?
// Promise.allSettled




// JS something called MAX_SAFE_INTEGER
console.log(typeof BigInt);
console.log(typeof 1n);
console.log(1n + 2n);
console.log(typeof 3n);

let will_pokemon = {
    pickachu: {
        species: 'Mouse',
        height: 0.4,
        weight: 6
    }
};
let andrei_pokemon = {
    raichu: {
        species: 'Mouse',
        height: 0.4,
        weight: 6
    }
};

let weight = will_pokemon.pickachu.weight;
console.log('weight:', weight);

// optional chaining
if (andrei_pokemon.pickachu && andrei_pokemon.weight) {  // pretty annoying to
    let weight2 = andrei_pokemon.pickachu.weight;
    console.log(weight2);
} else {
    let weight2 = undefined;
    console.log(weight2);

}


let weight3 = andrei_pokemon?.pickachu?.weight;
console.log(weight3);

// Nullish Coalescing Operator ?? instead of ||

let andrei_pok = {
    pickachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        // power: ''
        // power: ''
        power: 0
    }
};

// let weight4 = andrei_pok?.pickachu?.power || 'no power'; 
let weight4 = andrei_pok?.pickachu?.power ?? 'no power';  // ?? (checks value null and undefined)
console.log(weight4);


// globalThis

console.log(globalThis === window);

// node js
// global
// globalThis


// ES2021
const str = "ZTM academy best";
// const b = str.replaceAll('best', 'worst')
// console.log(b);
// replace change only first elemnt



const flattend = [[0,1], [2,3], [4,5]].reduce(
    (accumulator, array) => 
    {
        // console.log('array', array);
        // console.log('accumulator', accumulator);
        // debugger;
      return  accumulator.concat(array), [];

    });


// Modules in js
// 1.Browserify
// 2.IIFE
// 3.Script Tags
// 4.Inline Script
// 5. Webpack (Bundle js files)


// --------------IIFE---------------
// js1 first loaded
var myApp = {};
// j2

(function() {
    myApp.add = function(a, b) {
        return a + b;
    }
})();

// jQuery uses this: allows us to use $


// --------------CommonJS + Browserify---------------
// js1
module.exports = function add(a, b) {
    return a + b
};

// js2
// var add = require('./add')


// -------------- ES6+Webpack-----------
// js1

// export const add = (a,b)=> a+b;
// import add from './add'


// Webpack
// module.exports = {
//     entry: './app/main.js',
//     output: {
//         path: './dist',
//         filename: 'build.js'
//     }
// }















































































































































































































































































































































































































































































































