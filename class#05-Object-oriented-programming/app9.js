// // Object Oriented Programming

// // 1. Factory Functions

// const elf = {
//     name: 'Orwell',
//     weapon: 'bow',
//     attack() {
//         return 'attack with ' + elf.weapon
//     }
// };

// const elf2 = {
//     name: 'Orwell',
//     weapon: 'bow',
//     attack() {
//         return 'attack with ' + elf.weapon
//     }
// };

// // Problem: Code copy paste
// elf.attack();
// elf2.attack();



// OOP comes (factory function)
// Factory functions: Function acts like a factory.

// Solution: 01 (Shared functionalities)

// const elfFunctions = {
//     attack() {
//         return 'attack with '+ this.weapon
//     }
// }

// function createElf(name, weapon) {
//     let newElf = Object.create(elfFunctions);
//     console.log(newElf.__proto__);
//     newElf.name = name;
//     newElf.weapon = weapon;
//     return newElf
//     // return {
//     //     name: name,
//     //     weapon: weapon,
//     //     // attack() {
//     //     //     return 'attack with '+weapon
//     //     // }
//     // }
// };

// // Solution 02 (Shared Object)


// const peter = createElf('peter', 'stones');
// // peter.attack = elfFunctions.attack;
// console.log(peter.attack());

// // In OOP avoid repetitive code (P: Require Space in a memory in a same data)
// // Method only for generic (How to share function)
// const sam = createElf('sam', 'fires');
// // sam.attack = elfFunctions.attack;
// console.log(sam.attack());

// // How to Improve More Code (Share functionalty across different objects)
// Prototypal Inheritance


// Construction Functions
// This approach closer to oop

// function Elf(name, weapon) {   // New Execution context
//     // constructor(name, weapon){
//         console.log(this); // empty object
//         this.name = name; // Only create object in this keyword
//         this.weapon = weapon;
//     // }
// };

// // Every function in js automatically prototype.
// // __proto__
// // lexical scope means compile time scope

// Elf.prototype.attack = function() {  // Arrow function are lexically scoped
//     return 'attack with '+ this.weapon; // this is in case(global object) and dynamically scoped
// }

// Elf.prototype.build = function() {  // Arrow function are lexically scoped
//     // Soultion 02 (this resolve)
//     const self = this;
//     function building() {
//         // return this.name + ' builds a house';
//         return self.name + ' builds a house';

//     }
//     return building.bind(this)
// }


// const peter = new Elf('peter', 'stones');
// // console.log(peter.attack());
// console.log(peter.attack());
// console.log(peter.__proto__); // proto contain prototype
// console.log(peter.prototype); // proto contain prototype (peter is an object) undefined
// // Note 
// Only function access prototype.

// const sam = new Elf('sam', 'fires');
// console.log(sam.attack());

// Capital Letters and function those were called construction.
// new Function()

// Constructor method 02
// const Elf1 = new Function('name', 'weapon', 
// `
// this.name = name;
// this.weapon = weapon;
// `
// );
// const sarah = new Elf1('sarah', 'gun');
// console.log(sarah);

// Object.create() technically less oop.

// Task 
// 1. Lexical Scope.
// 2. This keyword 
// 3. Bind, call and apply.


// Funny thing about js

// var a = new Number(5);
// console.log(typeof a);

// var b = 5;
// console.log(a == b);
// console.log(b.toString());
// console.log(new Date().getTime); // Everything make constructor function

// ES6 Class
// JS closet the classes underneth the hood use prototype
// class ELF {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }

//     attack(){
//         return 'attack with '+ this.weapon;
//     }
// };

// const jones = new Elf('jones', 'fires');
// console.log(jones instanceof Elf);

// // Object.create() vs class (Task)


// // this (Keyword)
// // 1. new binding this

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const person1 = new Person('Xavier', 55)
// console.log(person1); // Object that instantiate in new Keyword


// // Implicit binding
// const person = {
//     name: 'Karen',
//     age: 40,
//     hi() {
//         console.log('hi', +this.name);
//     }
// };


// // explicit binding
// const person3 = {
//   name: 'Karen',
//   age: 40,
//   hi: function() {
//     console.log('hi '+this.setTimeout);
//   }.bind(window)
// };

// console.log(person3.hi());


// Arrow function
// functions are dynamically scoped

const person4 = {
    name: 'Karen',
    age: 40,
    hi: function() {
        var inner = ()=> {
            console.log('hi '+this.name);
        }
        return inner();
    }
};

console.log(person4.hi());


// Inheritance

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attack with '+this.weapon;
    }
};

const fiona = new Elf('fiona', 'ninja stars');
console.log(fiona);
// cloned
const ogre = {...fiona};
console.log(ogre.__proto__.__proto__);
console.log(fiona === ogre);
// Problem How to extend functionalities
// console.log(ogre.attack());


// Inheritance Solve the problem
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    _attack() { // this is a private method
        return 'attack with '+this.weapon;
    }
};

// Kai prototype chain upto the character.
class Kai extends Character {
    // Private means any function and variable use inside the class
    #age = 90; // private state (pound sign)
    constructor(name, weapon, type) {
       super(name, weapon); // calls the constructor previous class
       this.type = type;
    }
}

const kai = new Kai('Dolby', 'bomb', 'tool')
kai._attack = false; // use as a private class
console.log(Kai.prototype.isPrototype(kai));
// console.log(Kai.prototype.isPrototype(Elf.prototype));
console.log(kai instanceof Kai);
console.log(kai instanceof Elf);

// In js not creating copies links of prototype
// In js no technical classes
// Connect object to object (contain link)(prototype)

// Public vs private

// Task (weak maps)
// 4. Pillars of OOP.
// 1. Encapsulation
// We wrap code into boxes and these boxes interact each other.
// e.g class and packages

// 2.Abstraction
// Hiding the complexity into user and creating simpler interfacing

// 3. Inheritance
// Avoid the rewrite the same code.

// 4.Polymorphism
// Many forms. Methods writting or method overloading.















