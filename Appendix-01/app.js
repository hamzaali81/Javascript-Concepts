console.log('This is your book\'s'); // Special case
console.log(10+"34");
console.log(10-"34");
console.log("10"+"34");
console.log("10"-"34");
console.log("Hello"-"Bye");

// Boolean (true/false) (0/1)
console.log(3 > 2);
console.log(5 > 10);
console.log(5 >= 5);
console.log(5 <= 5); 
// console.log(3=3); 
console.log(3===3); 
console.log(3==3); 
console.log(3 !== 3); 
console.log(3 !== 4); 

// Variables
// var let const

var firstName // camel case

// prompt()

var a; // undefined (variable not be assign)

// Control flow
// if else if else
// console.log(!true); ! (opposite)
console.log(!false);


// functions
// perform one and multiple action

function sayHello() {
    console.log("Hello");
};

sayHello();

var sayBye = function() {
    console.log('Bye');
};

sayBye();

function sing() {
    console.log("AHHHHHHH");
    console.log("TEEEEEEE");
};

sing();

// case 01

function multiply(a,b) { // parameters
    console.log(a, b);
    a * b
};

multiply(5, 10); // arguments
// Return keyword undefined or value
function multiply(a,b) {
    console.log(a, b);
    return  a * b
};

multiply(5, 10);

// ------------------------------
// Data Structure
// Array
// Object

const list = ['bear', 'cat', 'lion', 'hen'];
var deleteFirst =list.shift(); // delete first element
console.log(deleteFirst);
console.log(list); 

var deleteLast =list.pop(); // delete last element
console.log(deleteLast);
console.log(list); 

// var addInLast =list.push("Tiger"); // push not return value
list.push("Tiger"); 
console.log(list);

const combineArray = list.concat(["human"]); // New Array
console.log(combineArray);

const sorting = list.sort();
console.log(sorting);

const reverseList = list.reverse();
console.log(sorting);


// Exercise Array Methods


// Data Structures in objects


var user = {
    name: "John",
    age: 43,
    hobby: "Soccer",
    isMarried: false,
    spells: ["ahmed", "shazam", "boo"],
    // function inside an object called method
    shout: function(){
        console.log("AHHHHHHHHH");
    }
};

// list.pop() // pop is an method of list
// console.log() // pop is an method of list

var listArr = [
    {
        username: "andy",
        password: "secre"
    },
    {
        username: "jess",
        password: "123"
    }
];

// Exercise Build Facebook User authentication

// function decleration
function newFunction(params) {
    
}


// function Expression
var newFun = function() {
    
};

// expression (produce the value)
// 1+3
// var a = 2;
// return true;

// calling or invoking a function
// alert()
// newFunction(param1, param2);

// assign a variable
var a = true

// function vs method
function thisIsFunction() {
    
};

var obj = {
    thisIsMethod: function() {
        
    }
};


obj.thisIsMethod()

// Loop


var todos = [
    "clean room!",
    "brush teeth!",
    "study javascript",
    "eat healthy"
];


for (let i = 0; i < todos.length; i++) {
    const element = todos[i];
    // const deleteLastEle = todos.pop();
    console.log(element);
}

var counter = 0;
while(counter < 10) {
    console.log(counter);
    counter++;
}


var counterTwo = 0;
do {
    console.log();
  counterTwo++;
} while(counterTwo > 0);


todos.forEach((el)=> {
    console.log(el);
})

// Exercise 02 Build Facebook
// Javascript keywords



















































































