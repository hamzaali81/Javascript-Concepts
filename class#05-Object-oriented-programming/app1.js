// Factory Functions

// Encapsulation Group of functionality
// Scenarion 01
// const elf = {
//     name: 'Orwell',
//     weapon: 'bow',
//     attack() {
//         return 'attack with ' + elf.weapon;
//     }
// };

// const elf2 = {
//     name: 'Sally',
//     weapon: 'bow',
//     attack() {
//         return 'attack with ' + elf.weapon;
//     }
// };

// console.log(elf.attack());
// console.log(elf2.attack());


// Scenario # 02 (factory functions) fu
// function createElf(name, weapon) {
//     return {
//         name: name,
//         weapon: weapon,
//         attack() {
//             return `attack with `+ weapon
//         }
//     }
// }

// const peter = createElf('Peter', 'stones');
// console.log(peter.attack());

// // avoide repetative code
// // Space in a memory 
// const sam = createElf('Sam', 'fire');
// console.log(sam.attack());


// // Object.create()

// const elfFunctions = {
//     attack() {
//         return 'attack with '+this.weapon
//     }
// };

// function createElf(name, weapon) {
//     let newElf = Object.create(elfFunctions); // link b/w Object.create() and elf function
//     console.log(newElf.__proto__);
//     newElf.name = name;
//     newElf.weapon = weapon;
//     return newElf;

//     // return {
//     //     name,
//     //     weapon
//     // }
// }

// const peter = createElf('Peter', 'stones');
// const sam = createElf('Sam', 'fire');
// // peter.attack = elfFunctions.attack;

// console.log(peter.attack());
// console.log(sam.attack());

// Contructor Functions
// Normally Constructor function witten in Capital letter 
// function Elf(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//     console.log(this);
// }


// Elf.prototype.attack = function() {
//     return 'attack with '+ this.weapon
// };

// Elf.prototype.build = function() {
//     function building() {
//         return this.name+ ' builds a house'
//     }

//     return building.bind(this)
// };

// Elf.prototype.attack = ()=> { // Arrow function are lexically scoped
//     return 'attack with '+ this.weapon
// };

// const peter = new Elf('hamza', 'fire');
// // console.log(peter.prototype); // undefined
// console.log(peter.attack());
// console.log(peter.__proto__);
// console.log(peter.build()());
// const Elf1 = new Function('name', 'weapon', `
//   this.name = name;
//   this.weapon = weapon
// `);

// const sarah = new Elf1('Sarah', 'water');
// console.log(sarah);

// var a = new Number(5);
// // new Date()
// console.log(typeof a);
// console.log(typeof a.toString());
// var b = 5;

// console.log(typeof b);
// console.log(a===b);
// console.log(null === undefined);

// Es6 classes
// classes use prototype
// class Elf { // like a blue print
//     // Instance: create a class
//     constructor(name, weapon) { // instantiate
//         this.name = name;
//         this.weapon = weapon;
//     }
    
//     // Why method outside the interview
//     attack() {
//         return 'attack with '+ this.weapon;
//     };


// }


// const peter = new Elf('Peter', 'fire');
// console.log(peter instanceof Elf);
// // console.log(Elf instanceof peter);

// Object.create() vs class

// this way

// 1. new binding this
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// };

// const person1 = new Person('Xavier', 55);
// console.log('person***',person1);

// // implicit binding
// const person = {
//     name: 'Karen',
//     age: 40,
//     hi() {
//         console.log('hi'+ this.name);
//     }
// };

// // explicit binding
// const person3 = {
//     name: 'Karen',
//     age: 40,
//     hi: function() {
//         console.log('hi '+ this.setTimeout);
//     }.bind(this)
// };

// console.log(person3.hi());

// // arrow function lexically scoped


// const person4 = {
//     name: 'Karen',
//     age: 40,
//     hi: function() {
//         var inner = ()=> {
//         console.log('hi '+ this.name);
//         }

//         return inner()
//     }
// };

// // console.log(person3.hi());
// console.log(person4.hi());


// Inheritannce

// class Elf {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }

//     attack() {
//         return 'attack with '+ this.weapon;
//     }
// };

// const fiona = new Elf('Fiona', 'ninja stars');

// const ogre = {...fiona};
// console.log(ogre);
// console.log(fiona);
// console.log(ogre.__proto__);
// console.log(fiona.__proto__);
// console.log(fiona === ogre);
// console.log(ogre.attack()); // Ogre not access other parts of constructor


// class Character extends Elf {  //extends like __proto__
//     // console.log(this);
//     constructor(name, weapon, type) {
//         // console.log(this);
//         super(name, weapon); // previous class constructor call
//         this.type = type;       
//     }
// };
// // Ogre.prototype.makeFort = 
// class Ogre extends Elf {
//     constructor(name, weapon, color) {
//         super(name, weapon);
//         this.color = color;
//     };

//     makeFort() {
//         return `strongest fort in the world made`
//     }
// };

// const dolby = new Character('Dolby', 'gun', 'hero');
// console.log(dolby);
 
// /// instance version of class
// const shrek = new Ogre('Shrek', 'club', 'green');
// console.log(shrek);
// console.log(Ogre.isPrototypeOf(shrek));
// console.log(Character.prototype.isPrototypeOf(Ogre.prototype));
// console.log(dolby instanceof Character);
// console.log(dolby instanceof Elf);


// Public vs Private


// class Elf {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//      // create private class
//     _attack() {
//         return 'attack with '+ this.weapon;
//     }
// };

// const fiona = new Elf('Fiona', 'ninja stars');
// fiona._attack = false;
// console.log(fiona._attack);

class Elf {
    // #age = 45 private variable
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
     // create private class
    // private attack() {
    //     return 'attack with '+ this.weapon;
    // }
};

const fiona = new Elf('Fiona', 'ninja stars');

// 4 pillars of OOP
// 1. Encapsulation
// We wrap code into boxes that related to one another so that
// these boxes can just interact with each.

// 2. Abstraction (private variable):
// Hidden complexity of class. 

// 3. Inheritance 
// Many forms

// 4. Polymorphism
// Reuse functionality of superclass


































