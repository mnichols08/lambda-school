// //let name = "Michael";

// // let fullName = `${name} Nichols`

// // let saysHello = () => `Hello ${fullName}!`;

// // console.log(saysHello());

// // const saysHelloToName = (name) => `Hello ${name}!`

// // // console.log(saysHelloToName("James"))

// // const addsTwoNumbers = (a, b) => a + b;
// // const multipliesTwoNumbers = (a,b) => a * b;
// // const dividesTwoNumbers = (a,b) => a / b;
// // const subtractsTwoNumbers = (a,b) => a - b;
// // const remainderOfTwoNumbers = (a,b) => a % b;

// // const calculator = (cb, a, b,s)  => console.log(`${a} ${s} ${b} = ${cb(a,b)}`); // a, b = num1, num 2; s = symbol
// // let a = 1, b = 3;
// // calculator(addsTwoNumbers, a, b, `+`);
// // calculator(multipliesTwoNumbers, a, b, `*`);
// // calculator(dividesTwoNumbers, a, b, `/`);
// // calculator(subtractsTwoNumbers, a, b, `-`);
// // calculator(remainderOfTwoNumbers, a, b, `%`);

// let namesArray = ['Mikey', 'Manthi', 'Rick', 'Sandi'];

// const saysHelloToName = (name) => console.log(`Hello ${name}!`);
// const saysGoodbyeToName = (name) => console.log(`Goodbye ${name}!`);
// // const eachMethod = (array, cb) => {
// //     for (let i of namesArray){
// //         cb(i);
// //     }
// // }
// // eachMethod(namesArray,saysHelloToName);
// // eachMethod(namesArray,saysGoodbyeToName);

// namesArray.push('Jimmy')
// namesArray.forEach(saysHelloToName);
// namesArray.forEach(saysGoodbyeToName);
// namesArray.forEach(function(name){
//     console.log("in anonymous",name)
// })

// let numsArray = [3, 4, 5, 6];

// // const mapMethod = (array, cb) => {
// //     // Create a new array
// //     let newArray = new Array();
// //     // Create a for loop
// //     for(let i of array){
// //         // Save the value returned from a callback
// //         let updatedValue = cb(i);
// //         // Add that value to the new array
// //         newArray.push(updatedValue);
// //     }
// //     // Return the new array
// //     console.log(numsArray,newArray);
// // }

// const addThree = (num) => num + 3;
// const addSeven = (num) => num + 7;
// const square = (num) => num * num;
// // mapMethod(numsArray, addThree);

// console.log(numsArray.map(addThree),numsArray.map(addSeven),numsArray.map(square))

// }