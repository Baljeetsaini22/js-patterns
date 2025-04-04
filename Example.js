// // console.log("Baljeet");
// const accountId = 144255;
// let accoundtEmail = "baljeet@yahoo.com";
// var accountPassword = "12345";
// accountCity = "jaipur"

// // accoutnId = 2; // not allowed

// accoundtEmail = "balj@gamil.com"
// accountPassword = "25665265"
// accountCity = "Bengaluru"

// console.log(accountId);

// /*
// Prefer not to use var
// because of issue in block scope and functional scope
// */

// console.table([accountId, accoundtEmail, accountPassword, accountCity]);

// let name = "baljeet"
// let age = 18
// let isLoggedIn = false

// number ==> to power 53
// bigInt
// string => ""
// boolean => true/false
// null = > standalone

// let score = "33abv"

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 35789546865n

// // Array, objects, Functions

// Const heros = ["shaktiman", "naagraj", "doga"]

// let myObj = {
//     name: "baljeet",
//     age: 23,

// }
//  const myFunction = function() {
//     console.log("hello world");
//  }
// function myFunction() {
//     console.log("Welcome to DigiBeez!");
//     console.log("we are learning js :");
// }
// myFunction();
// myFunction();
// myFunction();
// myFunction();  // function call
// function myFunction(msg, n) {
//     //parameter --> input
//     console.log(msg, n);
// }
// myFunction("l love JavaScript", 100); // argument

//function => 2 nuumber, sum

// function sum(x, y) {
//     console.log(x+y);
// }
// sum(2, 8);

// function sum(x, y) {
//    s = x + y;
//    console.log("before-return");
//    return s;
//    console.log("after-return");
// }
// let val = sum(2, 8);
// console.log(val);

// function sum(x, y) {
//     //? local variable => scope
//     s = x + y;
//     console.log(x);
//     return s;

//  }
//  let val = sum(2, 8);
//  console.log(x);
//  console.log(val);

// function parameter = they are like local variable of fucntion (it is block scope)

//!Arrow Function
// //? sum function
// function sum(a, b) {
//     return a + b;
// }
// //? multiplication function
// function mul(a, b) {
//     return a * b;
// }

// function sum(a, b) {
//     return a + b;
// }
// const arrowSum = (a, b) => {
//     console.log(a + b);

// };

// function mul(a, b) {
//     return a * b;
// }
// const arrowmul = (a, b) => {
//     console.log(a * b);

// };
// count Vowels
// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count ++;
//         }
//     }
//     // console.log(count);
//     return count;
// }
// const countVow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         count ++;
//         }
//     }
//         // console.log(count);
//         return count;

// }

// forEach loop in Arrays
// function abc() {
//     console.log("hello");

// }
// function myFunction(abc) {
//     return abc;
// }
// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printVal(val) {
//     console.log(val);
// })
// arrow function
// let arr = ["Kaithal", "Jind", "Kurukshetra", "Ambala", "Fatehbad", "Yamunanagar", "Panchkula", "Sirsa"];

// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// })

// let nums = [1, 2, 3, 4, 5];

// nums.forEach((num) => {
//   console.log(num ** 2);
// });

// let nums = [ 56, 85, 46];

// nums.map((val) => {
//     console.log(val);
// })


// let nums = [ 56, 85, 46];

// let newArr = nums.map((val) => {
//     return val * 2;
// })
// console.log(newArr);

// let nums = [ 56, 85, 46];

// let calcSquare = (num) => {
//     console.log(num * num);    
// };
// nums.forEach(calcSquare);
// let arr = [ 1, 2, 3, 4, 5, 6, 7]

// let evenArr = arr.filter((val) => {
//     return val % 2 !== 0; 
// });

// console.log(evenArr);
// let oddArr = arr.filter((val) => {
//     return val > 3; 
// });

// console.log(oddArr);

// let arr = [ 1, 2, 3, 4, 5];

// const output = arr.reduce((prev, curr) => {
//     return prev + curr;
// });
// console.log(output);

// let arr = [ 235, 895, 598, 484, 568, 785, 942];

// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });
// console.log(output);

// const output2 = arr.reduce((prev, curr) => {
//     return prev < curr ? prev : curr;
// });
// console.log(output2);

// let marks = [ 95, 75, 92, 97, 87, 84];

// let toppers = marks.filter((val) => {
//     return val > 90
// }); 
// console.log(toppers);
