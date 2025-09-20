// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let useEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 23423354278971987743n;

// Non Primitive/Reference type
// Array, Object, Functions

const heros = ["Shaktiman", "naagraj", "doga"];

let myObj = {
    name: "abhishek",
    age: 20,
    village: "amethi"
};

let myFunction = function(){
    console.log("Hello World");
    
}
