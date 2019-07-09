"use strict";
// Let's get some practice writing a few objects for a new group of interns at a small business.
console.log(`==== Objects.js ====`);
console.log(`==== Challenge 1: Writing Objects ====`);
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F",
}

// Write your intern objects here:

const interns = [
  {
    "name": "Mitzi",
    "email": "mmelloy0@psu.edu",
    "gender": "F"
  },
  {
    "name": "Kennan",
    "email": "kdiben1@tinypic.com",
    "gender": "M",
    "speak": function() {return `Hello, my name is ${this.name}`}
  },
  {
    "name": "Keven",
    "email": "kmummery2@wikimedia.org",
    "gender": "M"
  },
  {
    "name": "Gannie",
    "email": "gmartinson3@illinois.edu",
    "gender": "M"
  },
  {
    "name": "Antonietta",
    "email": "adaine5@samsung.com",
    "gender": "F",
    "multiplyNums": (x,y) => x * y
  }
]
console.log(interns);
console.log(`==== Challenge 2: Reading Object Data ====`);
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(interns[0].name);
// Kennan's ID
console.log(1);
// Keven's email
console.log(interns[1].email);
// Gannie's name
console.log(interns[3].name);
// Antonietta's Gender
const antonietta = interns[4];
console.log(antonietta.gender);
console.log(`==== Challenge 3: Object Methods ====`); 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// interns.prototype.speak = function() {return `Hello, my name is ${this.name}`;}
console.log(interns[1].speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

console.log(`==== Stretch Challenge: Nested Objects and the this keyword ====`); 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  "name": "Susan",
  "age": 70,
  "child": {
    "name": "George",
    "age": 50,
    "grandchild": {
      "name": "Sam",
      "age": 30,
      "speak": function() {
        return `My name is ${this.name} and I am ${this.age} years old.`
      } 
    },
    "speak": function() {
      return `My name is ${this.name} and I am ${this.age} years old.`
    }
    },
  "speak": function() {
    return `My name is ${this.name} and I am ${this.age} years old.`
  }
}

// Log the parent object's name
console.log(parent.name);
// Log the child's age
console.log(parent.child.name);
// Log the name and age of the grandchild
console.log(parent.child.grandchild.name,parent.child.grandchild.age)
// Have the parent speak
console.log(parent.speak());
// Have the child speak
console.log(parent.child.speak());
// Have the grandchild speak
console.log(parent.child.grandchild.speak());