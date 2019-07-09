console.log(`=== callback.js ===`);
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

const getLength = (arr,cb) => cb(arr.length); // passes length of array into callback

console.log(`Length of an array using a callback`, getLength(items, length => length));

const last = (arr,cb) => cb(arr[arr.length - 1]); // passes last item of array into callback
console.log(`Last item of array using a callback: `, last(items, last => last));

const collectNumbers = (x,y,cb) => cb(x,y)  // takes two numbers (x, y) and passes the result to the callback.
console.log(`Calls collectNumbers function to add x + y:`, collectNumbers(getLength(items, length => length),items.length - 1,(x,y) => x + y)); // adds the value of the length of items array with the last item of the array and pass it into a callback function that logs the value.
console.log(`Calls collectNumbers function to multiply x * y: `, collectNumbers(getLength(items, length => length),items.length - 1,(x,y) => x * y)); // multiplies the value of the length of items array with the last item of the array and pass it into a callback function that logs the value.

const contains = (item, list, cb) => cb(list.includes(item));  
console.log(`Does the array contain yo yo?`, contains(`yo-yo`, items, result => result)); // should be true
console.log(`Does the array contain ping pong?`, contains('ping pong', items, result => result)); // should be false

/* STRETCH PROBLEM */
let dupeItems = items.concat(items).sort();
console.log(`An array full of duplicate items: `, dupeItems);
const removeDuplicates = (arr, cb) => cb([...new Set(arr)]); // // callback function that creates a new array using ES6 Set and Spread operator to generate an entirely new array without duplicate values.
console.log(`Creates a new array without any duplicate objects`, removeDuplicates(dupeItems,arr => arr));
