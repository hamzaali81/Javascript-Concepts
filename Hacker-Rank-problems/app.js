// 1.Complete the function compareTriplets in the editor below.
// compareTriplets has the following parameter(s):

// function compareTriplets(a, b) {
//     // Write your code here
//     var alice = [];
//     var bob = [];
//     var count = 1;
    
//   [...a].map((el,i)=> {
//     // console.log(Math.max(...[a[i],b[i]]))
   
//   if(a[i] > b[i]) {
//   return alice.push(count)
//   } else if (a[i] === b[i]) {
//       return null
//   }
//     else {
//   return bob.push(count)
//   }
// })
//    return [alice.length, bob.length]
//   }

// const resultArr = compareTriplets([5,6,7], [3,6,10]); // 2 1
// console.log(resultArr);


// 2. Sum Big Array


// function aVeryBigSum(ar) {
//     // Write your code here
//     var sum=0;
//     ar.map((el)=> {
//         console.log(el);
//         return sum += el; 
//     });
//     return sum

// }

// const results =aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]);

// console.log(results);



// Digonal Difference
// 15

// function diagonalDifference(arr) {
//     // Write your code here
//     console.log(arr);
//     var arr1 = 0;
//     var arr2 = 0;
//     var result = 0;

//     arr.map((el, i, arr)=> {
//         // console.log(el, arr.length-i-1,);
//         // console.log(el[i]);
//         // console.log(el[arr.length-i-1]);
//         arr1 += el[i]
//         arr2 += el[arr.length-i-1]
//         result = Math.abs(arr1 - arr2)
//     })
//     // console.log(result);
//     return result;


// }

// const result = diagonalDifference([[11,2,4], [4,5,6], [10,8,-12]]);  // 15 19
// console.log(result);



// Plus Minus
// 0.500000
// 0.333333
// 0.166667
// There are  positive numbers,  negative numbers, and  zero in the array.
// The proportions of occurrence are positive: , negative:  and zeros: .
// 3(+) 2(-) 1(0) ratio find
// function plusMinus(arr) {
//     // Write your code here
//     var plusArr = [];
//     var minusArr = [];
//     var zeroArr = [];
//     const totalLength = arr.length;
//     const resultArr = [];
//     arr.map((el, i)=> {
//         if(el > 0) {
//            return plusArr.push(el);
//         } else if(el < 0) {
//            return minusArr.push(el)
//         } else {
//             return zeroArr.push(el)
//         }
//     })
//     resultArr.push(plusArr, minusArr, zeroArr);
    
   
//     resultArr.map((el,i)=> {
//         return (el.length/totalLength).toFixed(6)
//     });
    
    
// };

// plusMinus([-4, 3, -9, 0, 4, 1]);
// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));


// // 2

// function staircase(n) {
//     // Write your code here
//     const arr = new Array(n).fill('#');
//     // console.log(arr);
//     let arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         // console.log( i,arr.join('').length )
//         arrRes.push(arr[i]);
//         console.log(arrRes.join(''));    
//     }
//     // return arrRes
// }
// staircase(6);

// // 6 Input
//      #
//     ##
//    ###
//   ####
//  #####
// ######

// // 3

// function miniMaxSum(arr) {
    // Write your code here
    
    // Min
//     const result1 = (arr.reduce((acc, value)=> {
        
//         acc += value;
//         return acc 
//     }, 0) - arr[arr.length-1]);
    
//     // Max
//     const result2 = (arr.reduce((acc, value)=> {
//         console.log();
//         acc += value ;
//         return acc 
//     }, 0) - arr.sort()[0]);
//     return [result1, result2]
// }

// const result = miniMaxSum([7, 69 ,2 ,221 ,8974]);
// console.log(result);
// // // 1 2 3 4 5 (Input)
// except 5(Min)  1(Min)
// // 10 14 (output)

// 7 69 2 221 8974
// 299 9271

// function birthdayCakeCandles(candles) {
//     // Write your code here

// }

// const result = birthdayCakeCandles(candles)
// 4
// 3 2 1 3

// Output  2


// Stair Case
// function staircase(n) {
//     const filledArray = new Array(n).fill(' ');
//     console.log(filledArray);
//     for (let i = 0; i < n; i++) {
//         // console.log(filledArray.indexOf() != -1);
//         if(filledArray.indexOf(' ') !== -1)
//         filledArray.shift()
//         filledArray.push('#');
//         console.log(filledArray.join(''));
//     }
// }
    
// staircase(4);


// function miniMaxSum(arr) {
//     // Write your code here
//     const sortArr = arr.sort();
   
//     const arr1 =Math.abs(sortArr.reduce((el, acc)=> {
//     // console.log(arr[arr.length-1]);
//         return el+=acc;
//     }, 0)-arr[arr.length - 1]);
   
//     const arr2 =Math.abs(sortArr.reduce((el, acc)=> {
//         // console.log(arr[0]);
//         return el+=acc;
//     }, 0)-arr[0])
//     console.log(arr1, arr2);
    
// }

// miniMaxSum([1,2,3,4,5])
// miniMaxSum([1,3,5,7,9]); 
// miniMaxSum([7,69,2,221,8974]);  69+2+221+8974
// 299 9271
// 16 24

// function birthdayCakeCandles(candles) {
//     // Write your code here
//     const sortArr = Math.max(...candles);
//     let sum = 0;
//     for (let i = 0; i < candles.length; i++) {
        
//         if(candles[i] === sortArr){
//             sum++;
//         }

//     }
//     return sum;
// }

// const result = birthdayCakeCandles([3,2,1,3]);
// console.log(result);

// function timeConversion(s) {
//     let designator, clock, hhmmss, hh, mm, ss, mil; // declare variables
//     designator = s.slice(-2); // returns AM or PM
//     hhmmss = s.substring(0, s.length-2) // returns hh:mm:ss
//     clock = hhmmss.split(':'); // returns array of [hh,mm,ss]
//     hh = designator === 'AM' 
//        ? (parseInt(clock[0]) === 12 ? '00' : clock[0]) 
//        : (parseInt(clock[0]) === 12 ? '12' : parseInt(clock[0]) + 12);
//     mm = clock[1];
//     ss = clock[2];
//     mil = [hh,mm,ss].join(':').toString();
//     return mil
// }

// const result = timeConversion('07:05:45PM');
// console.log(result);


// function timeConversion(s) { 
//    console.log(s);
//     const desigator = s.slice(-2);
//     console.log(desigator);
//     const clock = s.split(':');
//     // console.log(clock.join(':'));
//     if(desigator === 'AM') {
//     console.log();
//     return clock.join(':');
//     } else {
//    console.log(parseInt(clock[0])+12);
//    parseInt(clock[0])+12
//    console.log(clock);
   
//     }
    
// }


// const result = timeConversion('07:05:45PM');
// console.log(result);


const lists = [
    {   
        id: 1,
        name: 'Hamza',
        
    },
    {
        id: 2,
        name: 'Ali',
        
    },
    {
        id: 3,
        name: 'Hammad',
        
    },
    {
        id: 4,
        name: 'Zia',
        
    },

]



const resultArr = lists.filter((el)=> {
//    console.log(el.name.split('').slice(0,3));
const test = 'Ha';
const arr2 = test.substring(0)
const arr1 = el.name.substring(0,arr2.length);
 return arr2 === arr1;
});


console.log(resultArr);












