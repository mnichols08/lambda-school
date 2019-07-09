// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/

function getLength(arr,cb) {
  // getLength passes the length of the array into the callback.
    return cb
}

const last = (arr, cb) => cb(arr);
console.log(last(items,arr => arr[arr.length - 1]));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb
}

function sumNumbers(x,y,cb) {
   return cb(x,y)
}   // takes two numbers (x, y) and passes the result to the callback.


console.log(sumNumbers(5,6,(x,y) => x + y));


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

console.log(sumNumbers(5,6,(x,y) => x * y));

function contains2(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    return cb(list.includes(item))
}
console.log(items.includes('ping pong'))

const contains = (item, list, cb) => cb(list.includes(item));  
console.log(`Does the array contain yo yo?`, contains(`yo-yo`, items, result => result == 1 ? 'yes' : 'no')); // should be true
console.log(`Does the array contain ping pong?`, contains('ping pong', items, result => result == 1 ? 'yes' : 'no')); // should be false


/* STRETCH PROBLEM */
let dupes = items.concat(items);
function removeDuplicates(arr, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
    cb([...new Set(arr)])  


    return cb([...new Set])
}

//const removeDuplicates = (arr, cb) => cb([...new Set(arr)]); // // callback function that creates a new array using ES6 Set and Spread operator to generate an entirely new array without duplicate values.
//console.log(`Creates a new array without any duplicate objects`, removeDuplicates(dupeItems,arr => arr));

console.log(removeDuplicates(dupes, dupes => dupes))


// const removeDuplicates = (arr, cb) => cb([...new Set(arr)]); // // callback function that creates a new array using ES6 Set and Spread operator to generate an entirely new array without duplicate values.
// console.log(`Creates a new array without any duplicate objects`, removeDuplicates(dupeItems,arr => arr));

