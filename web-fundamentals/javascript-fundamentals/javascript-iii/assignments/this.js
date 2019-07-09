console.log(`===this.js===`);
// The four principles of "this";
console.log('  *  ', `In your own words. explain the four principle for the "this" keyword below.`);

console.log('1. By default, `this` will return the window object, which is not the ideal situation when using the `this` keyword.');
console.log('2. When used implicitly `this` is used inside of a function will return the object that called it.');
console.log('3. When using the `new` keyword on constructors, `this` refers to the object being created');
console.log('4. Use a method such as `call`, `apply`, or `bind` to explicitly return `this` from an object');

const principle1 = () => this;
console.log(`Principle 1 -`,` this returns `, principle1() );

const principle2 = (name, dob, favoriteColor) => {
    this.name = name;
    this.dob = dob;
    this.favoriteColor = favoriteColor;
    return `${name}, ${dob}, ${favoriteColor}`;
}
console.log(`Principle 2 - Implicit -`,`this is applied inside of the function - `, principle2('Mikey Nichols', 'October 4th, 1989', 'Green'));
function Car(year, make, model) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.yearsOld = () => new Date().getFullYear() - this.year;
}
const myCar = new Car(1990, 'Eagle', 'Talon');

const newCar = function(){
    console.log(this.yearsOld())
}.bind(myCar)()

const person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        return `${this.firstname} ${this.lastname}`
    }
}

const logName = function(lang1, lang2){
    console.log(`Logged ${this.getFullName()}`);
    console.log(`Arguments: ${lang1} ${lang2}`);
    console.log(`----------------------`)
}

logName.bind(person)('english','spanish') // bind sets up the ability to call a function later, copies the functions methods without invoking

logName.call(person, 'en', 'es'); // call will immediately call another function and can take in parameters

(function(lang1,lang2){
    console.log(`Logged: A ${this.year} ${this.make} ${this.model} is ${this.yearsOld()} years old in ${new Date().getFullYear()}`);
    console.log(`Arguments: ${lang1} ${lang2}`);
    console.log(`----------------------`);
}).apply(myCar, [1990, 2019])


//function borrowing: 

let myOtherCar = new Car(1996,'Honda','Accord');
myCar.special = function() {
    return `I own the ${this.yearsOld()} year old car`
}
console.log(myCar.special.apply(myOtherCar));


function thingsBrokenOnMyCar(a, b, c, d) {
    return `My ${this.year} ${this.make} ${this.model} is a piece of junk! It has a ${a}, it ${b}, a ${c}, and a ${d}. I still love her though.`;
}
thingsToBind = {};
//thingsToBind.bind(myCar);
let thingsBroken = ['hole in the exhaust', 'leaks oil', 'blown alternator', 'bad cv joint'];
console.log(`Principle 4 - Explicit`, thingsBrokenOnMyCar.call(myCar, ...thingsBroken));

//function currying
const  multiply = (x, y) => x * y;

const multiplyByTwo = multiply.bind(this, 2); // copies the function and also permanently sets the first parameter
const multiplyByThree = multiply.bind(this, 3); 
const multiplyByFour = multiply.bind(this, 4); 

console.log(multiplyByTwo(5), multiplyByThree(5), multiplyByFour(5));

const arr1 = [1,2,3];
console.log(arr1);

function mapForEach(arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}

const arr2 = mapForEach(arr1, function(item){
    return item * 2;
})

const arr3 = mapForEach(arr1, item => item > 2)

console.log(arr2);
console.log(arr3);

const checkPastLimit = (limiter, item) => item > limiter;
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 0));
console.log(arr4);

const checkPastLimitSimplify = (limiter) => {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this,limiter)
}
const arr5 = mapForEach(arr1,checkPastLimitSimplify(5));
console.log(arr5);


