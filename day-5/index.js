// // const nums = new Array()

// // const nums = [1, 2, 7, "Books", null, undefined, {name: "Doe"},  ]
// // console.log(nums[6].name);
// // console.log(nums.length)
// // const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// // const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// // const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// // const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// // const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// // const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// // console.log("The length of the fruit array is:", fruits.length)

// const arr = [
//     {country: "Nigeria"}, 
//     {skills: "Coding", level: "4"},
//     "pencil", true, false, 56,
//     {skills: ["football", "coding", "js"]}
// ] 
// console.log(arr.length)

// let js = 'JavaScript is a good programming'

// let splited = js.split(" ")
// console.log (splited)

// const nums = [1,5,2, 1, 3, 4,5]
// const nums2 = [7, 8, 9, 20]


// let JoinedArr = nums.concat(nums2)
// console.log(JoinedArr)

// let lastIndx = nums.length - 1
// console.log(nums[lastIndx])

// // console.log(nums.indexOf(1));
// // console.log(nums.indexOf(5));
// // nums.push(100)
// // nums.pop()
// // console.log(nums)
// // nums2.unshift(200)
// // nums.shift()
// // console.log(nums);

// console.log(nums.slice(0, 2))

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ] // List of web technologies
// console.log(webTechs.includes('Redux'))
// console.log(webTechs.includes('code'))


// let age = 56
// console.log(Array.isArray(nums))
// console.log(Array.isArray(age))

// const name = ['Asabeneh', 'Mathias', 'Ellas', 'brook']
// const alp = ["T", "Z", "W", "B", "G", "C", "A" ]
// console.log(nums.join())
// console.log(name.join(" "))
// console.log(name.join("%"))

// console.log(webTechs.splice(1, 3))
// console.log(webTechs)
// console.log(nums.reverse())
// console.log(alp.sort())


// ASSIGNMENT

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs1 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
// no 1
let array = [];

//  no 2
let Array = [1, "Apple", 3, "Mango", 5, "Orange"];

// no 3
console.log(Array.length);

//  no 4
console.log(Array[0]);
console.log(Array[3]);
console.log(Array[5]);

// no 5
let mixedDataTypes = [10, "Hello", ["Oshey"], 5.5, null, undefined];
console.log(mixedDataTypes.length);

//  no 6
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//  no 7
console.log(itCompanies);
//  no 8
console.log(itCompanies.length);
//  no 9
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);
//  no 10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
//  no 11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
// no 12
console.log(itCompanies[0] + "," + itCompanies[1] + "," + itCompanies[2] + "," + itCompanies[3] + "," + itCompanies[4] + "," + itCompanies[5] + "," + itCompanies[6] + "," + " are big IT companies" );
// no 13
if (itCompanies.includes("Google")) {
  console.log("Google");
} else {
  console.log("Company is not found");
}
// no 14

// no 15
console.log(itCompanies.sort());
// no 16
console.log(itCompanies.reverse());
// no 17
console.log(itCompanies.slice(0, 3));
// no 18
console.log(itCompanies.slice(3, 6));
//  no 19
console.log(itCompanies.slice(3, 4));
// n0 20
itCompanies.shift();

console.log(itCompanies);



const countries = [
  // Put the full countries array from Asabeneh's countries.js here
]

export default countries


const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node',
  'MongoDB'
]

export default webTechs





import countries from './countries.js'
import webTechs from './web_techs.js'


// 2. Count the number of words

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.replace(/[.,]/g, '').split(' ')

console.log(words)
console.log(words.length)


// 3. Shopping cart

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat')
}

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar')
}

if (shoppingCart.includes('Honey')) {
  shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
}

if (shoppingCart.includes('Tea')) {
  shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
}

console.log(shoppingCart)


// 4. Check Ethiopia

if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA')
} else {
  countries.push('Ethiopia')
  console.log(countries)
}


// 5. Check Sass

if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess')
} else {
  webTechs.push('Sass')
  console.log(webTechs)
}


// 6. Concatenate frontEnd and backEnd

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)


// LEVEL 3


// 1. Ages

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort((a, b) => a - b)

console.log('Sorted ages:', ages)

const minAge = ages[0]
const maxAge = ages[ages.length - 1]

console.log('Min age:', minAge)
console.log('Max age:', maxAge)

const median = (ages[4] + ages[5]) / 2

console.log('Median:', median)

const sum = ages.reduce((a, b) => a + b, 0)
const average = sum / ages.length

console.log('Average:', average)

const range = maxAge - minAge

console.log('Range:', range)

console.log('Min - Average:', Math.abs(minAge - average))
console.log('Max - Average:', Math.abs(maxAge - average))


// 2. First 10 countries

const firstTenCountries = countries.slice(0, 10)

console.log('First 10 countries:', firstTenCountries)


// 3. Middle country/countries

const middle = Math.floor(countries.length / 2)

if (countries.length % 2 === 0) {
  console.log('Middle countries:')
  console.log(countries[middle - 1])
  console.log(countries[middle])
} else {
  console.log('Middle country:')
  console.log(countries[middle])
}


// 4. Divide countries into two equal arrays

const middleIndex = Math.ceil(countries.length / 2)

const firstHalf = countries.slice(0, middleIndex)
const secondHalf = countries.slice(middleIndex)

console.log('First half:', firstHalf)
console.log('Second half:', secondHalf)


