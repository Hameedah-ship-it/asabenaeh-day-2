// let bechAge = 18;
// let age = 15;

// console.log(age > bechAge);

// let isStudent = true;
// let isMarried = false;
// let isRaining = false;
// let isLightOn = false;
// // let numOne = 1;
// // let numTwo = 5;
// // let payment;
// // let status = null;


// //  console.log(numOne === numTwo);
// //  console.log(payment)

// //  let x = 8
// //  let y = 5
// //  let sum = 0;

// //  sum += x 
// //  sum -= y
// //  console.log(sum);
// //  let numOne = 10;
// // let numTwo = 3;
// // let sum = numOne + numTwo;
// // let diff = numOne - numTwo;
// // let mult = numOne * numTwo;
// // let div = numOne / numTwo;
// // let remainder = numOne % numTwo;
// // let powerOf = numOne ** numTwo;
// // console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64
// // console.log(4 < 5);
// // console.log(5 > 4);
// // console.log(4 <= 5);



// // const check1 = 4 > 3 && 10 > 5         // true && true -> true
// // const check2 = 4 > 3 && 10 < 5         // true && false -> false
// // const check3 = 4 < 3 && 10 < 5         // false && false -> false

// // let val = 6;
// // let counter = ++val
// // console.log(counter)
// // console.log(val)

// let val = 6
// let counter;

// counter = val++

// console.log(val)
// console.log(counter)
// // Date object

// let now = new Date ()
// console.log(now)
// console.log(now.getFullYear());
// console.log(now.getTime());
// console.log(now.getHours())
// console.log(now.getDay() +1)
// console.log(now.getMonth() +1);

// // dd/ mm/yy : h:m:s

// let yy = now.getFullYear()
// let mm = now.getMonth() + 1
// let day = now.getDay() + 1
// let hrs = now.getHours()
// let mins = now.getMinutes()
// let secs = now.getSeconds()
// let date = now.getDate()

// console.log(`${date}/${mm}/${yy} : ${hrs}/${mins}/${secs}`)


// ASSIGNMENT

let firstName = "Hameedah";
let lastName = "Ayomide";
let country = "Nigeria";
let city = "Ibadan";
let age = 15;
let isMarried = false;
let year = 2026;
let gap = "15"

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log('10' == 10);
console.log(parseInt('9.8') == 10);

// false value

console.log("country" === city );
console.log(parseInt('9.8') == 10);

// truth value
console.log(age == gap);
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

let python = "python";
let jargon = "jargon";

console.log(python.length);
console.log(jargon.length);

console.log(python == jargon);
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 124);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!("dragon".includes("on") && "python".includes("on")));

// EXERCISE 2
// no 1
let base = prompt("Enter your base");
let height = prompt("Enter your height");

let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);
// no 2
let sidea = prompt("Enter side a");
let sideb = prompt("Enter side b");
let sidec = prompt("Enter side c")

let perimeter = sidea + sideb + sidec;
console.log(`The perimeter of the triangle is ${perimeter}`);
// no 3
let width = prompt("Enter the width");
let length = prompt("Enter the length");

let areaofrectangle = length * width 
let perimeterofrectangle = (2 * (length + width));
console.log(`your area of rectangle is ${areaofrectangle}`);
console.log(`your perimeter of rectangle is ${perimeterofrectangle}`);
// no 4
let radius = prompt("Enter radius:");
radius = Number(radius);

let Area = 3.14 * radius * radius;
let circumference = 2 * 3.14 * radius;

console.log(`Area of the circle is ${Area}`);
console.log(`Circumference of the circle is ${circumference}`);

//  n0 5



// n0 6
let m = (10 - 2) / (6 - 2);
console.log(m);

// n0 7

//  n0 8
let x = -3;
let y = x * x + 6 * x + 9;

console.log(y);

//  no 9
let hours = prompt("Enter hours:");
let rate = prompt("Enter rate per hour:");

let pay = hours * rate;

console.log(`Your weekly earning is ${pay}`);
//  10
let name = prompt("Enter your name");

if (name > 7) {
    console.log("Your name is long");
} else { 
    console.log("Your name is short")
     }
    //  11
    let FirstName = "Hameedah";
let LastName = "Ayomide";

if (FirstName.length > LastName.length) {
  console.log("Your first name, Hameedah is longer than your family name, Ayomide");
} else if (FirstName.length < LastName.length) {
  console.log("Your family name,  Hameedah is longer than your first name, Ayomide");
} else {
  console.log("Your first name and family name are the same length");
}
// 12
let myAge = 250;
let yourAge = 25;

console.log("I am " + (myAge - yourAge) + " years older than you.");
// 13
let birthYear = prompt("Enter birth year:");

let currentYear = 2026;
let aGe = currentYear - birthYear;

if (age >= 18) {
  console.log("You are " + aGe + ". You are old enough to drive");
} else {
  console.log("You are " + aGe + ". You will be allowed to drive after " + (18 - aGe) + " years.");

}
// 14
let years = prompt("Enter number of years you live:");

let second = years * 365 * 24 * 60 * 60;

console.log("You lived " + second + " seconds.");

// 15