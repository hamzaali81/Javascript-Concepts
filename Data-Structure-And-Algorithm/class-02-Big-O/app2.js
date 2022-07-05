//#1 -- For loop in Javascript.
// const nemo = ['nemo'];

// function findNemo1(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }
// }

// findNemo1(nemo);

//#1 -- For loop in Javascript.
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10).fill('nemo'); // Runtime is slower and slower
// t0 = Time 

// 1. O(n)
function findNemo2(fish) {
  let t0 = performance.now(); 
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now(); t1 = Time
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo2(everyone) // O(n) ----> linear BigO(n)


// O(n) - Linear time
// ES5 
function compressAllBoxes(boxes) {
    boxes.forEach(function(item) {
        console.log(item);
    })
};

// ES6
// const compressAllBoxes = boxes => {
//     boxes.forEach(box => console.log(box))
// };


// 2.Conatant time O(1)
const boxes = [0, 1, 2, 3, 4, 5]; 
function compressFirstBox(boxes) {
    console.log(boxes[0]);
};

compressFirstBox(boxes);

// Exercise 01 
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    // for (let i = 0; i < array.length; i++) { // O(n)
    //     // const element = array[i];
    //     anotherFunction(); // O(n)
    //     let stranger = true; // O(n)
    //     a++; // O(n)
    // };

    // return a; // O(1)
};

//BIG O(3 + 4n) = O(n)

const res = funChallenge([]);
console.log(res);


// Exercise 02 

function anotherFunChallenge(input) {
    let a = 5;  // O(1)
    let b= 10;  // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n)
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)
    }

    for (let j = 0; j < input; j++) { // O(n)
       let p = j * 2; // O(n)
       let q = j * 2; // O(n)
    }

    let whoAmi = 'I don\'t know ' // O(1)
};


// 4 + 5n
// BIG O(4+ 5n) = O(n)

anotherFunChallenge([])



// 2. Rule 02
// function printFirstItemThenFirstHaldThenSayHi100Times(items) {
//     console.log(items[0]); // O(n)

//     var middleIndex = Math.floor(items.length / 2);
//     var index = 0;

//     while(index < middleIndex) {
//         console.log(items[index]);
//         index++; // Because index will increase by / every loop until index is 5
//     };

//     for (let i = 0; i < 100; i++) {
//         const element = array[i];
//         console.log('hi');
        
//     }
// }

//
// O(1 + n/2 + 100) = O(n/2 + 1) => O(n/2 + 101) => O(n)  (Drop Contants)
// printFirstItemThenFirstHaldThenSayHi100Times()


//3. Rule 03 (Different terms input)
// function compressBoxesTwice(boxes, boxes2) {
//     boxes.forEach((boxes)=> {
//     console.log(boxes);
//     });

//     boxes2.forEach((boxes)=> {
//     console.log(boxes);
//     });
// };

// // O(a + b)
// compressBoxesTwice(); // O(n) Wrong

// Log all pairs of array
const boxesArray = [1,2,3,4,5];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            const element1 = array[i];
            const element2 = array[j];
            console.log(element1, element2);
        }
    };
};


logAllPairsOfArray(boxesArray)


// Rule 04

function printAllNumbersThenAllPairSums(numbers) {
    console.log('these are the numbers:');

    numbers.forEach((el)=> {
        console.log(el);
    });

    console.log('and these are their sums');
    numbers.forEach((el)=> {
        numbers.forEach((el)=> {
            console.log();
        })
    });
    
};

// O(n + n^2) = O(n^2) Dominant power
printAllNumbersThenAllPairSums([1,2,3,4,5])

// Space Complexity
function booooo(n) {
    // O(1) memory is use (i=0) O(1)
    for (let i = 0; i < n.length; i++) { // O(n)
        const element = n[i];
        console.log('booooo!');
    }
};

booooo([1,2,3,4,5]); // O(1)


function arrayOfHint(n) {
    let hiArray = [];
    for (let i = 0; i < n.length; i++) { // O(n)
        const element = n[i];
        console.log('booooo!');
        hiArray[i] = 'hi'
    }
    return hiArray;
};

// O(n) 'hiArray,6'
const resultArr2 = arrayOfHint([1,2,3,4,5]);
console.log(resultArr2);


// Exercise Twitter
// Find first, Find Nth
const array = ['hi', 'my', 'teddy'];
array[0]; // O(1)
array[array.length - 1] // O(1) Recent Tweet


const array1 = [
    {
        tweet: 'hi',
        date: 2012
    },
     {
         tweet: 'my',
         date: 2018
     },
     {
         tweet: 'teddy',
         date: 2018
     }
];
Interview Question
console.log('djsdkdskdkks'.length)
// O(n^2)
// array[0]
// array[array.length - 1]

console.log('hamza'.length);  // O(1)












































































































































































































