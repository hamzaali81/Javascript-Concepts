// class #03
// 1. Types

// Primitive: Data Represent single value. Directly contains value.
// console.log(typeof 3);
// console.log(typeof 'hamza');
// console.log(typeof null); // Absence of value
// console.log(typeof undefined); // default value define variable e.g Hoisting
// console.log(typeof Symbol('just me'));
// console.log(typeof Infinity);

// // Non-Primitive : Does'nt contain value directly.
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof function(){});


// function a() {
//     return 5
// }

// const result = a();
// a.hi = 'hahahha'
// console.log(a.hi);


// console.log(true.toString());

// 2. Array
var array = [1,2,3];

// var array = {
//     0: '1',
//     1: '2',
//     2: '3',
// }

// console.log(array);
// var a;
// console.log(a);

// // isArray: Checks Arrays.
// console.log(Array.isArray([])); // true
// console.log(Array.isArray({})); // obj


// By Refrence vs By value
// https://sanet.st/blogs/bonnytuts/
// Primtive: Pass by value (Not change completely remove primitives types)
// Object: pass by refrence
 

// Object.assign()
// The Object.assign() method copies all enumerable own properties 
// from one or more source objects to a target object. 
// It returns the modified target object.
// By Default Return String


// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// // expected output: Object { a: 1, b: 4, c: 5 }


// Scenario 02
// Solution 01 Refrencing 
let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try to me'
    }
};

// Shallow clone (Clone first level or addressed memory) or deep cloning;

// In deep Cloning should be careful
const clone = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));
obj.c.deep = 'Some else!!!';
console.log(superClone);
console.log(obj);
console.log(clone);

// Type of coercion(jabr)

console.log(1 === '1');
console.log(1 == '1');

if(1){
    console.log(5);
}
if(0){
    console.log(5);
}

// -0, +0
// Object.is() === '==='
console.log(+0 === -0);
console.log(Object.is(-0, +0));
console.log(NaN === NaN);

// Serach:
// Ecmascript language Specific
// Equality comparison and same
// Repl.it
// How Nan Algorithm works












































