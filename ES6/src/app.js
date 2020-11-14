// ==== Template String ===
// var s = ` ajfeaf
// aaofjeo
// afjeafj
// o;afjoaejf    `.trim()

// console.log(s);


/*
var age = 24

var name = 'rashed'

// console.log('My name is ' + name);

console.log(`My name is ${name} and age is ${age} and i am ${age > 18 ? 'adult': 'not adult'}`)

console.log(name.padStart(15));

console.log('S'.repeat(10));
*/


// ==== var vs let vs const ====

// let a = 10
// a = 100

// console.log(a);

// if(true) {
//     var a = 10
// }

// console.log(a);

// for(var i = 0; i < 10; i++) {

// }

// console.log(i);



// === Arrow funciton ====

// function add(a, b) {
//     return a + b
// }

// let sum = (a, b) => a + b

// console.log(sum(4, 5));

// let sqr = x => x*x

// console.log(sqr(5));


// function testMe() {
//     console.log(this);
// }

// testMe()

// let obj = {
//     name: 'Rashed',
//     print: () => {
//         console.log(this);
//     }
// }

// obj.print()


// let obj = {
//     name: 'rashed',
//     print: function() {
//         setTimeout(() => {
//             console.log(`hello ${this.name}`)
//             console.log(this);
//         }, 1000)
//     }
// }

// obj.print()


// ==== Default parameter ====

// function sqr(n=3) {
//     return n*n
// }

// console.log(sqr(4));


// ====== rest and spred operator =====

// function sum(...rest) {
//     // let sum = 0

//     // for (let i = 0; i < arguments.length; i++) {
//     //     sum += arguments[i]
//     // }

//     // return sum

//     return rest.reduce((a, b) => {
//         console.log(a);
//         console.log(b);
//         return a + b
//     })

// }

// console.log(sum(1, 3, 5, 5, 4));

// let a = [1, 2, 4]

// console.log(...a);


// let obj = {
//     a: 20,
//     b: 30,
//     c: 40
// }

// let obj2 = {
//     ...obj
// }

// console.log(obj2);


// ======Enhence object and es6=====

// let a = 10, b = 20

// let obj = {
//     a,
//     b,
//     print() {
//         console.log('rashed');
//     }
// }

// console.log(obj);

// obj.print()


// ===== Destructuring ======

// let person = {
//     name: 'rashed',
//     email: 'rashed@gmail.com',
//     print() {
//         console.log('rashed');
//     },
//     address: {
//         city: 'Dhaka',
//         country: 'Bangladesh'
//     }
// }

// let { address: { country } } = person

// console.log(country);


// let arr = [1, 3, 5, 6, 7]

// let [first, second, , , last] = arr

// console.log(last);


// ====== Object to array =======

// let obj = {
//     a: 20,
//     b: 36
// }

// console.log(Object.entries(obj));

// ===== Array to Object ======

// var objArr = [
//     ['a', 10],
//     ['b', 40]
// ]

// console.log(Object.fromEntries(objArr));

// ====Symbols in javascript====

// let s1 = Symbol()
// let s2 = Symbol('test symbol')

// console.log(s1);
// console.log(s2);

// console.log(s1 === s2);


// ======For of loop======

// arr = [3, 5, 6, 6]

// for (let v of arr) {
//     console.log(v);
// }


// for (let v of 'rashed') {
//     console.log(v);
// }

// =====Generator in javascript=====


// ====== Sets in javascript =======

/**
 * You can't duplicate data in set
 */

// let set = new Set([1, 2, 3])

// let set = new Set([1,2])
// set.add(5)
// set.add(4)

// console.log(set);

// console.log(set.size);

// for(let v of set) {
//     console.log(v);
// }


// ===== Map in javascript ====

// let map = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ])

// map.set('d', 40)

// console.log(map);


// for (let [k, v] of map) {
//     console.log(k);
// }

// map.forEach((index, value) => {
//     console.log(value);
// })

// ===== class =====

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }

    

//     draw() {
//         console.log('drawing');
//     }
// }


// let rect1 = new Rectangle(45, 23)

// console.log(typeof rect1);


