// // loop 1 - 50 using for-loop


// // for (let k = 1; k<= 50; k++) {

// //     console.log(k)
// // }

// // for (let k = 50; k>= 1; k--) {

// //     console.log(k)



// // }
// let arr = [1, 2, 3, 4, 5]
// // 0 1 2 3 4
// for( let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// let fruits = ["Orange", "Banana", "Apple", "Vegetable"]
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i].toUpperCase())
// }


// let emptyArr = [];
// for(let i = 0; i <fruits.length; i++){
// //  emptyArr[i] = fruits[i].toUpperCase()
// emptyArr.push(fruits[i].toUpperCase())
// }


// console.log(emptyArr)


// for (let fruit of fruits){
//     console.log(fruit)
// }

// const person = [
//     {
//         name: "Doe",
//         age:700,
//         isStudent:true
//     },
//     {
//         name: "Adex",
//         age: 900,
//         isStudent:true
//     },
//     {
//         name:"Folla",
//         age:100,
//         isStudent:false
//     }
// ]

// // console.log(person[0])

// for(let p of person){
//     console.log(p["age"])
// }


// // while loop

// let c = 1;
// while(c <= 8) {
//     console.log(c)

//     c++
// }
// do{
//     console.log(c)
//     c++;

// }

// while(c > 5);

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
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
const mernStack = [
    'MongoDB',
     'Express',
      'React',
       'Node'
    ]

// 1. 0 to 10
for(let i=0;i<=10;i++) console.log(i)
let a=0; while(a<=10){console.log(a);a++}
let b=0; do{console.log(b);b++}while(b<=10)

// 2. 10 to 0
for(let i=10;i>=0;i--) console.log(i)
let c=10; while(c>=0){console.log(c);c--}
let d=10; do{console.log(d);d--}while(d>=0)

// 3. 0 to n
let n=15; for(let i=0;i<=n;i++) console.log(i)

// 4. # pattern
for(let i=1;i<=7;i++) console.log('#'.repeat(i))

// 5. multiplication table
for(let i=0;i<=10;i++) console.log(`${i} * ${i} = ${i*i}`)

// 6. i i^2 i^3
console.log('i i^2 i^3')
for(let i=0;i<=10;i++) console.log(`${i} ${i**2} ${i**3}`)

// 7. even 0-100
for(let i=0;i<=100;i++) if(i%2===0) console.log(i)

// 8. odd 0-100
for(let i=0;i<=100;i++) if(i%2!==0) console.log(i)

// 9. prime 0-100

// 10. 
 let sum = 0; for (let i=0;i<=100;i++) sum+=i
 console.log(`The sum of all number from 0-100 is ${sum}`);

//  11. and 12
let sumEven=0,sumOdd=0
for(let i=0;i<=100;i++){i%2===0? sumEven+=i : sumOdd+=i }
console.log(`The sum of all even number from 0-100 is ${sumEven}. And the sum of all even number from 0 to 100 is ${sumOdd}.`)

// 13. 5 random numbers
let arr=[]; for(let i=0;i<5;i++) arr.push(Math.floor(Math.random()*100))
    console.log(arr)

// 14. 5 unique random
let unique=[]; while(unique.length<5){let num=Math.floor(Math.random()*100); if(!unique.includes(num)) unique.push(num)}
console.log(unique)

// 15. 6 chars random id
function randomId(len){let ch='abcdefghijklmnopqrstuvwxyz0123456789',id=''; for(let i=0;i<len;i++) id+=ch[Math.floor(Math.random()*ch.length)]; return id}
console.log(randomId(6))

// Level 2
console.log(randomId(10))
console.log(randomId(22))
let hex='#', hexC='0123456789abcdef'; for(let i=0;i<6;i++) hex+=hexC[Math.floor(Math.random()*hexC.length)]; console.log(hex)
console.log(`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`)
console.log(countries.map(c=>c.toUpperCase()))
console.log(countries.map(c=>c.length))
console.log(countries.map(c=>[c,c.slice(0,3).toUpperCase(),c.length]))
let land = countries.filter(c=>c.toLowerCase().includes('land'))
console.log(land.length?land:'All these countries are without land')
let ia = countries.filter(c=>c.toLowerCase().endsWith('ia'))
console.log(ia.length?ia:'These are countries ends without ia')
console.log(countries.reduce((x,y)=>x.length>y.length?x:y))
console.log(countries.filter(c=>c.length===5))
console.log(webTechs.reduce((x,y)=>x.length>y.length?x:y))
console.log(webTechs.map(t=>[t,t.length]))
console.log(mernStack.map(t=>t[0]).join(''))
for(let t of ["HTML","CSS","JS","React","Redux","Node","Express","MongoDB"]) console.log(t)
let fruits=['banana','orange','mango','lemon'], rev=[]; for(let i=fruits.length-1;i>=0;i--) rev.push(fruits[i]); console.log(rev)
const fullStack=[['HTML','CSS','JS','React'],['Node','Express','MongoDB']]; for(let g of fullStack) for(let t of g) console.log(t.toUpperCase())

// Level 3
console.log([...countries].sort())
console.log([...webTechs].sort())
console.log([...mernStack].sort())
console.log(countries.filter(c=>c.toLowerCase().includes('land')))
console.log(countries.filter(c=>c.length===4))
console.log(countries.filter(c=>c.includes(' ')))
let revCap=[]; for(let i=countries.length-1;i>=0;i--) revCap.push(countries[i].toUpperCase()); console.log(revCap)
