// Introduction OOP:

Object Oriented Programming:
A programming paradigm centered around object rather than function or style of programming.

4 Pillars of OOP:
1. Encapsulation.
2. Abstraction.
3. Inheritance.
4. Polymorphism.

In OOP is group of function and variables called unit and unit called is an object.

Function--> method
Property
e.g localStorage (Property) 
localStorage.getItem()  (Method)

1. Encapsulation:
In OOP variables, and functions that operates on them into objects and his called Encapsulation.

e.g 

let baseSalary = 30;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + overtime + rate;
}

let getWage = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: ()=> {
        return this.baseSalary + (this.overtime + this.rate)
    }
};

employee.getWage();

Book Recommed: Robert C Martin.
The best function are that with no parameters that is Encapsulation.

Abstraction:
e.g DVD player is an object. Inner and outer parent. All that complexity is hidden from you this is abstaraction.
We can use the same technique in our objects. So we can hide some of the properties and methods  
from the outside. 
1. Reduce the impact of change.
2. Simpler Interface.


Inheritance:
Is a mechanism that allows you to eliinate redundant code.
e.g 
TextBox
Select
Checkbox

We define one in generi objects called it HTML element and have other objects and methods. So Inheriatance help us.

Polymorphism:
Many forms
Is a technique that allows you to get get rid of long if aand else or switch case element.
e.g ReadableStreamDefaultReader.element()


Benefits: 
Encapsulation : Reduce Complexity + Increase resuability
Abstarction: Reduce Complexity + Isolate Impact of changes.
Inheritance: Eliminate reduntant code.
Polymorphism: Refactor ugly switch /case statement.
