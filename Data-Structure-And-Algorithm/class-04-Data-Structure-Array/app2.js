// Arrays Introduction
// Arrays called list. Organize item sequentially.
// Arrays widely used in data structure.

// BigO 
// lookup(Access) O(1)
// push O(1)
// insert O(1)
// delete O(1)

// const strings = ['a', 'b', 'c', 'd'];
// // 4*4 = 16 bytes of storage

// // push
// strings.push('e');
// console.log(strings);

// // pop
// strings.pop();
// strings.pop();
// console.log(strings);

// // unshift 
// strings.unshift('x'); // O(n) Because of loop and shifting Arrays.
// console.log(strings);

// // shift
// // strings.shift();
// // console.log(strings);

// // splice (Delete any variable)
//                //index how many add
// strings.splice(2, 0, 'alien');  // O(n/2) = O(n)
// console.log(strings);

// Types of Arrays
// Array create JSON shelf memory
// 1. Static Arrays
// 2. Dynamic Arrays.
 
// static Arrays:
// Fixed size

// Dynamic Arrays:
// e.g JS, python they create automatically allocate memory.
// Expand more size

// 1. lookup     O(1)
// 2. append*()  O(1) Same as push
// 3. Insert     O(n)
// 4. Delete     O(n)
// *can be O(n)

// class 04

// class 05 (Implementing Arrays)
// How to build 
// How to Use it
// Data Structure means build scratch
// In JS Arrays in JS just Objects 
// 

// class MyArray{
//    constructor() {
//     this.length= 0;
//     this.data = {}
//    }

//    get(index) {
//      //Access Method
//      return this.data[index]
//    } 

//    push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//    }

//    pop(){
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//    }

//    deleteItem(index){
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//    }

//    shiftItems(index){
//        for (let i = index; i < this.length - 1; i++) {
//         this.data[i] = this.data[i+1];
//        }
//        delete this.data[this.length - 1];
//        this.length--;
//    }
// };

// const newArray = new MyArray();
// newArray.push('hi');
// newArray.push('hello');
// newArray.push('!')
// console.log(newArray);
// console.log(newArray.get(0));
// // console.log(newArray.pop());
// newArray.deleteItem(2);
// console.log(newArray);


// Strings and Arrays
// strings are simply array of characters
// Exercises
// Practice Array and Ops
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   get(index) {
//     return this.data[index];
//   }

//   push(item) {  // O(1) 
//    this.data[this.length] = item;
//    this.length++;
//    return this.length;
//   }

//   pop() { 
//   const lastItem = this.data[this.length - 1];
//   delete this.data[this.length - 1];
//   this.length--;
//   return lastItem;
//   }

//   deleteItem(index) { // O(n) 
//   const item = this.data[index];
//   this.shiftItems(index);
//   return item;
//   }

//   shiftItems(index) { // O(n)
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i+1];
//       console.log(this.data[i]);
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }

// }


// const newArray = new MyArray();
// newArray.push('hi');
// newArray.push('hello');
// newArray.push('pakistan')
// // newArray.pop();
// // newArray.pop();
// // newArray.pop();
// // newArray.get(0);
// newArray.deleteItem(0);
// // console.log(newArray.deleteItem(0));
// console.log(newArray);


// Strings and Arrays
// Strings are simply array of characters.


// Exercise 1:
// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// return 'ierdnA si eman iH'

// function reverse(str) {
//   const arr = str.split('');
//   var backwords = [];
//   const totalIndex = arr.length - 1;
//   console.log(arr);
//   for (let i = totalIndex;  i >= 0;  i--) {
//    backwords.push(arr[i]);   
//   }
//   return backwords.join('');
//   }


// const resultStr = reverse('Hi My name is Andrei');
// console.log(resultStr);


// Merge and Sorted Arrays
// // mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// function mergeSortedArrays(array1, array2){
//   const mergedArray = [];
//   let array1Item = array1[0];
//   let array2Item = array2[0];
//   let i = 1;
//   let j = 1;
  
//   //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
//   if(array1.length === 0) {
//     return array2;
//   }
//   if(array2.length === 0) {
//     return array1;
//   }
  
//   while (array1Item || array2Item){
//     console.log(array2Item);
//    if(array2Item === undefined || array1Item < array2Item){
//     mergedArray.push(array1Item);
//      array1Item = array1[i];
//      i++;
//    }   
//    else {
//      mergedArray.push(array2Item);
//      array2Item = array2[j];
//      j++;
//    }
//   }
//   return mergedArray;
// }

// const resultArr = mergeSortedArrays([0,3,4,31], [3,4,6,30]);
// console.log(resultArr);


// Problem 01:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// function twoSum(nums, target) {
//   const newArr = [];
  
//     for (let index1 = 0; index1 < nums.length; index1++) {
//      for (let index2 = 1; index2 < nums.length; index2++) {
//         if (nums[index1] + nums[index2] === target) {
//           if(index1 === index2) {
//             index2++;
//             if(nums[index1] + nums[index2] === target) {
//               newArr.push(index1,index2);
//               return newArr;
//             }
           
//           }
//           else {
//             newArr.push(index1,index2);
//             return newArr;
//           }
//         }
//       }
      
//     }
//   }



// const resultArr = twoSum([2, 7, 11, 15], 9); // 0,1
// const resultArr = twoSum([3,2,4], 6); // 1,2
// const resultArr = twoSum([2,5,5,11], 10); // 1,2
// const resultArr = twoSum([3,3], 6); // 0,1
// const resultArr = twoSum([3,3], 6); // 0,1
// const resultArr = twoSum([3,2,3], 6); // 0,2
// const resultArr = twoSum([1,3,4,2], 6); // 2,3

// [1,3,4,2] 6 [2,3]
// [3,2,3]

// console.log(resultArr);


// Problem 02:
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// function maxSubArray(nums) {
//   var sum= 0;
//   let maxSum = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     sum = Math.max(element, element + sum);
//     console.log(sum, maxSum);
//      maxSum = Math.max(sum, maxSum);
//   }
//   return maxSum
// };
// // [-2,1,-3,4,-1,2,1,-5,4]
// const result = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
// // const result = maxSubArray([5,4,-1,7,8]);
// // const result = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
// // const result = maxSubArray([4,-1,2,1]);
// // [-2,1,-3,4,-1,2,1,-5,4] 6
// // [4,-1,2,1]
// console.log(result);

// Problem 03:
// Given an integer array nums, move all 0's to the 
// end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.
// function moveZeroes(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if(nums.indexOf(0) !== -1) {
//       console.log(nums.indexOf(0));
//       nums.splice(nums.indexOf(0), 1);
//       nums.push(0);
//     }
    
//   }
//   return nums;
// } 


// const result = moveZeroes([1,0,0,1]);
// // const result = moveZeroes([0,1,0,3,12]);
// // const result = moveZeroes([0,0,1]);
// console.log(result);
// [0,0,1]
//[0,1,0,3,12]
// [1,0,0,1]  [1,1,0,0]


// Problem 04:
// Given an integer array nums, return true if any value appears at least twice in the array, and return 
// false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true


// function containsDuplicate(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j =1; j < nums.length; j++) {
//       // console.log(nums[i], nums[j]);
//       if(nums[i] === nums[j]) {
//         return true;
//       } 
     
//     }   
//     // break;
//   }
//   return false;
// }

// const result = containsDuplicate([1,2,3,1]);
// // const result = containsDuplicate([2,14,18,22,22]);

// console.log(result);

// Problem 05:
// Given an array, rotate the array 
// to the right by k steps, 
// where k is non-negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]


// function rotate(nums, k) {
//   // Solution 1: 
//   // for (let i = 0; i < k; i++) {
//   //     const element = nums[nums.length - 1];
//   //     nums.splice(nums.length - 1, 1);
//   //     nums.unshift(element);
//   //   } 
//   //   return nums
  
//   // Solution 2:
//   // for (let i = nums.length - 1; i > k; i--) { 
   
//   //   const element = nums[i];
//   //   console.log(element);
//   //   nums.unshift(element);
//   //   nums.pop();
//   //   console.log(nums);
//   }
// }

// const result = rotate([1,2,3,4,5,6,7], 3);
// console.log(result);
// // Output: [5,6,7,1,2,3,4]


// const result = rotate([-1,-100,3,99], 2);
// console.log(result);
// Output: [3,99,-1,-100]

// const result = rotate([1,2], 3);
// console.log(result);
// Output: [2,1]  3


// const result = rotate([1,2,3,4,5,6], 11);
// console.log(result);
// Output: [1,1]  3
// [1,2,3,4,5,6] 11
//[2,3,4,5,6,1]

// Problem 06:

// function longestWord(sen) {
//   const words = sen.split(' ');
//   console.log(words);
//   for (let i = 0; i < words.length; i++) {
//     if(words[i].length > words[i+1].length) {
//       return words[i];
//     }
    
//   }
  
// }

// const result = longestWord("I love you");
// console.log(result);


// Regex





































































