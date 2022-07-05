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


// 2.


function aVeryBigSum(ar) {
    // Write your code here
    var sum=0;
    ar.map((el)=> {
        console.log(el);
        return sum += el; 
    });
    return sum

}

const results =aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]);

console.log(results);