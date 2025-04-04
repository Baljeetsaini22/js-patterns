// let str = "51451545"
// // console.log(str.slice(3,8));

// let str1 = "baljeet"
// let str2 = "singh"

// let res = str1.concat(str2);
// let res = str1 + str2;
// console.log(typeof(res));

// let str3 = "baljeet"
// let str4 = 567

// console.log("1"-1); //todo important question for interview

// console.log("hello"+34+"baljit");
// console.log("hii"+67+78);

// let a = 126;
// b = 86;


// sum = a + b ;


// console.log("Enter Your First No", a);
// console.log("Enter Your Second No", b);

// console.log("sum= ", sum);

// // sub
// sub = a - b ;

// console.log("Enter Your First No", a);
// console.log("Enter Your Second No", b);

// console.log("sub= ", sub);


//! print number 1 - 100 
// for (let i=1; i <= 100; i++) {
//     console.log(i);    
// }
//

//! compare both no equal or not
// let a = 52;
// let b = 52;

// if ( a == b) {
//     console.log("equal");
// }
// else {
//     console.log("not");    
// }

//! check no is even or odd 
// let num = 55;
// if (num % 2 === 0) {
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
    
// }
// for (let i = 0; i <= 5; i++) {
//     console.log("*\n")
// }



// let  = 5;
// let pattern = "";


// for (let n = 1; n <= 5; n++) {
//    // Inner loop for printing stars
//    for (let num = 1; num <= 1; num++) {
//       pattern += "*";
//    }
//    pattern += "\t";
// }
// console.log(pattern); 

//!leap year
// function checkLeapYear(year) {
//     if(0 == year %4 && 0 != year %100) {
//         console.log(year, "is a leap year");

//     }else { 
//         console.log(year, "is not a leap year");
//     }
// }
// let num = [1, 2, 3, 4, 5, 6, 7];
// console.log(num);
// num.reverse();
// console.log(num);


// function baljit () {
//     console.log("hello baljit");
    
// }

// baljit();  //todo naming function or regular funtion

 
// let a = function () {
//     console.log("hello baljit2");
    
// }

// console.log(a()); //? wihout nameing function or anomyous function


// const b = () => {
    
//     return  console.log("hello baljit3");
    
// }

// console.log(b);  //todo arrow function !important

// // !calculator in js 
// const a =+prompt("enter first no: ")
// const o =prompt("enter operator: ")
// const b =+prompt("enter second no: ")

// switch (o) {
//     case "+":
//         console.log("a+b= ", a+b);
//         break;
//     case "-":
//         console.log("a-b= ", a-b);
//         break;
//     case "*":
//         console.log("a*b= ", a*b);
//         break;
//     case "/":
//         console.log("a/b= ", a/b);
//         break;
//     default:
//         console.log("bad expression");
// }

// //!print star loop 
// let i = 1;
// for (let i = 0; i < 5; i++) {
//     console.log ("i");
    
// }


//! Generate OTP 
// function generateOTP(limit) {
//     let digits = '0123456789';
//     let OTP = ' ';
//     for (let i = 0; i < limit; i++) {
//         OTP += digits[Math.floor(Math.random() * 10)];
//     }
//     return OTP;
    
// }
// document.writeln("One Time Password! ", generateOTP(4));

// //!Array Method number reverse 
// let num = [12, 14, 16, 18, 19];

// num.reverse();
// document.writeln(num);
// console.log(num);

// //! sentence reverse 
// let arr = "Hello World";
// let myArr= arr.split('').reverse().join('');
// document.writeln(myArr)
// console.log(myArr);

// //!Loop Method number reverse
// let mynum = [12, 14, 16, 18, 19];
// let reverse = " ";
// for (let i = mynum.length - 1; i >= 0; i--) {
//     reverse += mynum[i];
// }

// document.write(reverse);
// console.log(reverse);

// //! sententce reverse
// let str = "Hello world";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
// }

// document.write(reversed);
// console.log(reversed);