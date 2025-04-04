// //! Print pattern of star in landscape 

// for (let i = 0; i < 5; i++) {
//     console.log("*");
// }

// //! Print pattern of star in landscape with next line
// for (let i = 0; i < 5; i++) {
//     console.log("*\n");
// }

// //! Print pattern of star in portrate
// let a = "";

// for (i = 0; i < 5; i++) {   
//     for (j = i; j <= i; j++) {
//         a += "*";          
//     }     
// }
// console.log(a);

// //! Print pattern of star in portrate with space
// let b = "";

// for (i = 0; i < 5; i++) {   
//     for (j = i; j <= i; j++) {
//         b += "*\t"; 
//     }    
// }
// console.log(b);

// //! Print pattern of star is type of Triangle
// let i = 0;
// let c = "";

// for (i = 0; i < 5; i++) { 
    
//     for (j = 0; j <= i; j++) {
//         c += "*";
//     }
//     c += "\n";
    
// }
// console.log(c);

// //! Print pattern of star is type of Triangle
// let num = 5;
// let d = "";
// for (i = 1; i <= num; i++) { 
    
//     for (j = 0; j <= (num-i); j++) {
//         d += "*";
//     }
//     d += "\n";
// }
// console.log(d);

// //! Print pattern of star is type of box
// let num = 3;
// let star = "";
// if (num > 1) {
//     for (let i = 1; i <=num; i++) {    
//         for (let j = 1; j <= (num); j++) {      
//             if (i==1 || i==num || j==1 || j==num) {     
//                 star += "* ";    
//             } else {
//                 star += "  ";    
//             }
//         }
//         star += "\n"; 
//     }
//     console.log(star);
// }

// //! Print pattern of star is type of rotaote L
// let num = 5;
// let star = "";
// if (num > 1) {
//     for (let i = 1; i <=num; i++) {    
//         for (let j = 1; j <= (num); j++) {      
//             if (i==1 ||  j==1) {     
//                 star += "* ";    
//             } 
//         }
//         star += "\n"; 
//     }
//     console.log(star);
// }

// //! Print pattern of star is type of L
// let num = 5;
// let star = "";
// if (num > 1) {
//     for (let i = 1; i <=num; i++) {    
//         for (let j = 1; j <= (num); j++) {      
//             if (i==num || j==num) {     
//                 star += "* ";    
//             } 
//         }
//         star += "\n"; 
//     }
//     console.log(star);
// }

// //! Print pattern of star L type 
// let e = "";


// for (i = 1; i < 3; i++) { 
    
//     for (j = i; j < i; j++) {
//         e += "*\t";
//         console.log(i);
//     }
//     console.log(e);
// }


// //! Print 0-4 counting  

// let f = 0;

// while (f < 5) { 
//     console.log(f);
//     f++;  
    
// }


// //! Print pattern of i-5 in type of triangle 

// let i = 0;
// let g = "";
// while (i < 5) {     
//     for (i = 1; i <= 5; i++) { 
//         for (j = i; j <= i; j++) {
//                 g += i;                 
//             }
//             console.log(g);    
//         }      
// }


// //! Print pattern of i-5 in type of triangle opposite
// let i, j;
// let z = "";
// for(let i=5; i>=1; i--)
// {
//  for(j=1; j<=i; j++){
//    z += j;
//  }
    
//   z += "\n";
 
// }
// console.log(z);

//! => find maximum and minimum number in array 

// let num = [87, 15, 26, 45, 54, 64, 55, 35, 23, 96];

// const max = Math.max(...num);
// console.log(max);

// const min = Math.min(...num);
// console.log(min);

//! => find the number is divisible by 4 or not 

// let a = 5;

// if (a / 4) {
//     console.log("true")
// } else {
//     console.log("false");
    
// }

//! => find the Prime number  

// function myFunction(a){
//     for(i=2; i<=a; i++){
//      if(a % i != 0){
//      console.log(" Prime ")
//      }
//       else{
//         a++  // creates infinite loop
//         if(a % i == 0){
//         console.log("not prime")
//         } 
//         else{
//          console.log("prime")
//         }   
//       }
//    }
//     console.log(a)
//    }
//    myFunction();



//! Print pattern of star in landscape with next line
// let num = 7;
// let star = "";
// for (i =0 ; i < num; i++) {
//     for (i = 0; i < num; i++) {
//         for (j= 0; j < 5; j++) {
//             if (j == 0 || j == 4 && i != 0 && i != 3 && i != 6 || i == 0 && j != 4 || i == 3 && j != 4 || i == 6 && j != 4) {
//                 star += "*\n";
//             } 
           
//         } star += "\t ";
           
// } console.log(star);
// }

// let num = 5;
// let star = "";
// if (num > 1) {
//     for (let i = 1; i <=num; i++) {    
//         for (let j = 1; j <= (num); j++) {      
//             if (i==1 ||  j==1) {     
//                 star += "* ";    
//             } 
//         }
//         star += "\n"; 
//     }
//     console.log(star);
// }

function baljeet(star) {
for (let i; i < 7; i++) {
    for (j; j < 5; j++) {
        if (j == 0 || j == 4 && i != 0 && i != 3 && i != 6 || i == 0 && j != 4 || i == 3 && j != 4 || i == 6 && j != 4) {
            console.log("*");
        } else {
            console.log(" ");
        }
    }
    console.log(star);
}
}

baljeet();