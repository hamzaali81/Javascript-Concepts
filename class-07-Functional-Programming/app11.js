// Functional Programming
// Over 60 years exist
// Lisp very popular programming language

// What is functional programming?
// Its all about packaging our code into separate chunks so that everything well organized.
// Functional programming emphasis on simplicity where data and functions are concerned.

// functions operate on well defined data structures like arrays and objects, rather than actually 
// belonging to that data structure like object.

// In FP separations data of the program and behaviour of the program.
// FP are immutable.
// FP pillars
// 1. Pure Functions

// 1. Pure Functions
// A function has to always return the same output, given the same input, 
// and the function cannot modify outside itself.
// no side effect
// input ---> output

const array = [1,2,3];
// Array is global that is side effects
function mutateArray(arr) {
    arr.pop();
};

function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}

function multiplyBy2() {
    return array.map(item => item*2)
}

function mutateArray2(arr) {
    arr.forEach(item=> {
        arr.push(1);
    })
};

mutateArray(array);
mutateArray2(array);
const array2 = removeLastItem(array);
const array3 = multiplyBy2(array);
console.log(array, array2, array3);


// no side effects
// This is not a pure function.
// Windows specific means effecting outside the world.

// function a(num1, num2) {
//     console.log('hi');
// };

// a(num1, num2);


// Refrential Transparency

// They not touching outside the worlds
function a(num1, num2) {
    return num1 + num2
};

function b(num) {
    return num * 2
}

const fn1 = b(a(3,4));
console.log(fn1);

// Can be everything be pure

// What is Perfect Function
// 1. Task.
// 2. Predictable.
// 3. Composable.
// 4. Immutable.
// 5. Return statement.
// 6. Pure.
// 7. No shared state.

// Indempotence
// Function is impose many times this is indempotence
// Indempotence e.g: Delete Database.
function notGood(num) {

    console.log(num); // this is indempotence
    // return Math.random();
};

const resultFn = notGood(2);
console.log(resultFn);

console.log(Math.abs(Math.abs(-50)));
// Imperative vs Declerative

// Imperative:
// Machine code is very imperative

// Declerative

// for (let i = 0; i < 1000; i++){
//   console.log(i);    
// };

// [1,2,3].forEach((item)=> {
//     console.log(item);
// });

// Immutability (Not changing)
// In functional programming idea is immutable
// e.g you play with toy you should'nt throwing it you return back in school


const obj = {name: 'Andrei'};

function clone(obj) {
    return {...obj} // this is pure
};

function updateName(obj) {
    const obj2 = clone(obj);
    console.log(obj2);
    obj2.name = 'Nana';
    return obj2;

}

const updatedObj = updateName(obj);
obj.name = 'Nana';
console.log(obj, updatedObj);

// Structural sharing
// Pure function tree massive objects


// HOF
// Functions either one or more function as arguments and return as functions
// const hof = () => () =>


// Clousers


// Currying
// Currying is modify one parameters at a time.
// Currying is the technique of translating the eveluation of a function that takes multiple arguments
// Into eveluating a sequence of functions, each with a single argument.

const multiply = (a, b) => a * b;
multiply(3, 4);
const curriedMultiply = (a) => (b) => a *b;
const curFn =  curriedMultiply(5)(3);
console.log(curFn);

// Partial Application 
// Similar like curry
// Is a way partially apply a function. Process Producing function in a smaller number of parameters.

// Partial Application is second call
const multiply2 = (a, b, c) => a * b * c;
multiply(3, 4);
const curriedMultiply2 = (a) => (b) => (c)=> a *b* c;
const partialMultiplyBy5 = multiply2.bind(null, 5);
console.log(partialMultiplyBy5(3,10) );


// Memoization 
// Dynamic Programming

// Caching: 
// Caching means store values when use to use later on.
// e.g Pencil box
// Chacing holds piece of data 

// Memoization is a specific form of caching that involves caching the return value.
// Store value keys
function addTo80(n) {
    console.log('long time');
    return n + 80;
};

const result = addTo80(5);
console.log(result);

let cache = {};
function memoizedAddTo80(n) {
    if(n in cache) { // cached.n
      return cache[n]
    } else {
        cache[n] = n + 80;
        return cache[n];
    }
};


// Compose and pipe
// data ---> fn ----> data ---> fn ---->
// Compose (Right to left)
//  Compose ability is a system design principle that deals with relationship between components.
// const compose = (f, g) => (data) => f(g(data));

// const multiplyBy3 = (num) => num * 3;
// const makePositive = (num) => Math.abs(num);
// const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)(-50);
// console.log(multiplyBy3AndAbsolute);

// Pipe (Left to right)
const pipe = (f, g) => (data) => g(f (data));

const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)(-50);
console.log(multiplyBy3AndAbsolute);

// Arity
// Number of arguments function takes

// FP: Separation of data.
// Other programmings paradigms hidden effects