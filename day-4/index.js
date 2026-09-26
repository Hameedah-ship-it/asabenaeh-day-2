// // syntax

// let score = 0;
// let grade = ""


// // SWITCH STATEMENT

// switch(true){
//  case  score > 70 && score < 101:
//     console.log("Excellent");
//     break;
//     case score >= 60:
//         console.log("Very Good");
//         break;
//         case score >= 50:
//             console.log("Good");
//             break;
//             case score >= 45:
//                 console.log("Pass");
//                 break;
//                 case score >= 40:
//                     console.log("Fair");
//                     break;
//                     default:
//                     console.log("Fail")
// }

// let weather = "weather"
// switch (weather){
//     case "Sunny":
//         console.log("The weather is sunny")
//         break
//         case "Cold":
//         console.log("The weather is cold");
//         break
//         case "Raining":
//             console.log("The weather is Raining");
//             break
//             default:
//             console.log("Invalid weather")


// }

// if (score >= 70) {
// // grade = "Excellent"
// console.log("Excellent")

// } else{
//     console.log("Your score is less than 70")
// }

// if (score >= 70) {
//     console.log("Excellent")
// } else if(score >= 60) {
//     console.log("Very Good")
// } else if(score >= 50 ){
//     console.log("Good")
// } else if(score >= 45){
//     console.log("Pass")
// } else if(score >= 40){
//     console.log("Fair")
// }else{
//     console.log("Fail")
// }

// ASSIGNMENT
// NO 1
let birthyear = prompt("Enter your birthyear");
let currentyear = 2026
 
let age = currentyear - birthyear;

if (age >= 18){
    console.log("You are eligible to drive.");
} else{
    console.log("You are eligible to drive in the next " + (18 - age) + " years.");
}
// NO 2
let YourAge = prompt("Enter your Age");
let myAge = 18;

if (myAge > YourAge){
    console.log(`I am ${myAge - YourAge} older than you`);
} else if (YourAge > myAge){
 console.log(`You are ${YourAge - myAge} older than me`);
} else {
    console.log("We are of the same age");
}

//  NO 3
let a = prompt("Enter the value a")
let b = prompt("Enter the value b")
 
if (a > b){
    console.log("a is greater than b")
} else if (a < b){
    console.log("a is less than b")
} else {
    console.log("a is equal to b")
}

// ternary operator
let c = 4
let d = 3

c > d
? console.log("4 is greater than 3")
: console.log("4 is less than 3");

NO 4

let number = prompt("Enter a number");
if(number % 2 === 0){
    console.log(`${number} is a even number`)
} else{
    console.log(`${number} is a odd number`)
}

 EXERCISE
 no 1

let score = prompt("Enter your score")
if (score >= 80 && score <= 100) {
    console.log("A")
} else if(score >= 70 && score <= 89) {
    console.log("B")
} else if(score >= 60 && score <= 69 ){
    console.log("C")
} else if(score >= 50 && score <= 59){
    console.log("D")
} else if(score >= 0 && score <= 49){
    console.log("F")
}

 no 2
let month = prompt("Enter a month:").toLowerCase();

if (month === "september"  || month === "october" || month === "november"){
    console.log("Autumn");
} else if (month === "december"  || month === "january" || month === "february"){
    console.log("Winter");
} else if (month === "march" || month === "april" || month === "may"){
console.log("spring");
} else if (month === "june" || month === "july" || month === "august"){
console.log("Summer");
}


//  no 3
let day = prompt("What is the day today?").toLowerCase();
if (day === "saturday" || day === "sunday"){
    console.log(`${day} is a weekend`)
} else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    console.log(`${day} is a working day`)
} else{
    console.log("Not a day")
}

// EXERCISE 3
//  no 1

let month = prompt("Enter a month:").toLowerCase();
if (month === "january" ||
    month === "march" ||
    month === "may" ||
    month === "july" ||
    month === "august" ||
    month === "october" ||
    month === "december"
) {
    console.log(`${month} has 31 days`)
} else if (
    month === "april" ||
    month === "june" ||
    month === "september" ||
    month === "november"
){
    console.log(`${month} has 30 days`)
} else if(
    month === "february"
) { console.log(`${month} has 28 days`)

} else{
    console.log(`${month} is invalid`)
}
