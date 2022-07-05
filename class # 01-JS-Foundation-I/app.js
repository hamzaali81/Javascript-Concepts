// inline caching

// function findUser(user) {
//     return `found ${user.firstName} ${user.lastName}`
// };

// const userData = {
//     firstName: 'Johnson',
//     lastName: 'Junior'
// };


// const user = findUser(userData);

// console.log(user);

// // hidden classes

// function Animal(x, y) {
//     this.x = x;
//     this.y = y;
// };

// const obj1 = new Animal(1, 2);
// const obj2 = new Animal(3, 4);

// obj1.a = 30;
// obj1.b = 100;
// obj2.b = 30;
// obj2.a = 100;

// delete obj1.x = 1;

// console.log(obj1);
// console.log(obj2);
// console.log();

// Stack overflow or recursion

// function inception() {
//     inception()
// }

// inception()

// Memory leaks

// let array = [];
// for (let i = 5; i > 1; i++) {
//     array.push(i-1);
    
// }

// JS Runtime

function achieveNirvana() {
    console.log('You are enlightened');
};

function c() {
    setTimeout(achieveNirvana, 3000)
};

function b() {
    c()
}

function a() {
    b();
};

a();


console.log('1');
setTimeout(() => {
    console.log('2');
}, 0);
console.log('3');


setTimeout(() => {console.log('1', 'is the loneliest number')}, 1000);
setTimeout(() => {console.log('2', 'can be as bad as one')}, 10);
console.log('3', 'is a crowd');

// Timer last 
setTimeout(() => {console.log('1', 'is the loneliest number')}, 0);
Promise.resolve('hi').then(()=> console.log('2'));
console.log('3', 'is a crowd');
