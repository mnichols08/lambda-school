"use strict"; // I am using strict mode to keep myself from making mistakes into a habit.
console.log(`=== closure.js ===`);
console.log(`==== Challenge 1: Write your own closure ====`);
// Write a simple closure of your own creation.  Keep it simple!
const myName = 'mikey';
(function (name) {
	document.body.append(document.createElement(`h2`));
	document.querySelectorAll(`h2`)[0].innerHTML = `Hello ${ name ? name : `User`}, this is called an Immediately Invoked Function because it is invoked immediately after it is declared. It is going to set up a pattern of DOM Manipulation before your eyes.`
	setTimeout(() => {
		document.body.append(document.createElement(`h2`));
		document.querySelectorAll(`h2`)[1].innerHTML = `You could be looking in your console, as well but I took the time to code this section into the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" target="_blank">Document Object Model</a>`
	}, 5)
// Immediately Invoked Function Expression
{
	const x = 3;
	console.log(`{const x = ${x}} // block scope declaration`);
	setTimeout(() => {
		document.body.append(document.createElement(`p`));
		document.querySelectorAll(`p`)[0].innerHTML = `{const x = ${x}} // block scope declaration` 
	},5);
} {
	const x = 2;
	console.log(`{const x = ${x}} // no error for duplicating because a different scope`);
	setTimeout(() => {
		document.body.append(document.createElement(`p`));
		document.querySelectorAll(`p`)[1].innerHTML = `{const x = ${x}} // block scope declaration` 
	},5);
}

try {
	var notPrivateVar = 'This is not private because it is declared using \'var\' outside of a function.'
	let privateLet = 'This is private because let is block scoped'
	const privateConst = 'This is also private because const is block scoped as well.'
	console.log(privateLet);
	console.log(privateConst);
	console.log(privateVar); // Will return error
} catch (err) {
	console.error(`privateVar cannot be reached due to: ${err}`)
};
try {
	console.log(privateLet); // Will return an error because of closure
} catch (err) {
	console.error(`privateLet cannot be reached due to: ${err}`)
};
try {
	console.log(privateConst); // Will return an error because of closure
} catch (err) {
	console.error(`privateConst cannot be reached due to: ${err}`)
};

console.log(notPrivateVar); // Returns because this var was called outside of a function
var scopeExample = function() {
	var privateVar = 'privateVar is a private \'var\' because it is declared using \'var\' inside of a function. '
	let privateLet = 'privateLet is a private \'let\'  Note how it is the same as well but not colliding with each other' // Note that there are not errors about these being previously defined
	const privateConst = 'privateConst is a private \'const\' and these are not throwing errors because they are unable to escape this scope' // This is because of closure. You can use the same variable names if needed, such as an i in a for loop.
	return privateVar, privateLet, privateConst; // This allows the var to pass out of this function scope and into the one that calls upon it.
}();

console.log(scopeExample);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

console.log(`==== Challenge 2: Create a counter function ====`);
let x = 0; // initiates the counter at 0.
const counter = function() {
	let x = 0; 
	return () => x++; // increments x with each use
}()

console.log(counter);

console.log(`==== Challenge 3: Create a counter function with an object that can increment and decrement ====`);

const counterFactory = () => {

	return { // Return an object that has two methods called `increment` and `decrement`.
		increment: () => x++, // `increment` should increment a counter variable in closure scope and return it.
		decrement: () => --x // `decrement` should decrement the counter variable and return it.
	}
}


console.log(`=== Increment ===`);
console.log(counterFactory().increment(), counterFactory().increment(), counterFactory().increment(), counterFactory().increment(), counterFactory().increment(), counterFactory().increment(), counterFactory().increment());
console.log(`=== Decrement ===`);
console.log(counterFactory().decrement(), counterFactory().decrement(), counterFactory().decrement(), counterFactory().decrement(), counterFactory().decrement(), counterFactory().decrement(), counterFactory().decrement());

console.log(`==== Challenge 4: Create a Calculator Function that takes in two numbers and returns the sum, difference, quotient, and product`);

const calculate = (x, y) => {
	return {
		add: () => x + y,
		subtract: () => Math.abs(x - y),
		divide: () => x / y,
		multiply: () => x * y
	}
}
let y, rand = Math.floor(Math.random() * 100)
setTimeout(() => {
	x = rand, y = rand;
	console.log(`The sum of ${x} and ${y} is ${calculate(x,y).add()}`);
}, 750);

setTimeout(() => {
	x = rand, y = rand;
	console.log(`The difference between ${x} and ${y} is ${calculate(x,y).subtract()}`);
}, 1500);

setTimeout(() => {
	x = rand, y = rand;
	console.log(`The quotient of ${x} and ${y} is ${calculate(x,y).divide()}`);
}, 2250);

setTimeout(() => {
	x = rand, y = rand;
	console.log(`The product of ${x} and ${y} is ${calculate(x,y).multiply()}`);
}, 3000);

})(myName); 