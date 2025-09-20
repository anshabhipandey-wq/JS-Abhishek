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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory : Memory two types ki hoti hai 
// 1. Stack, 2. Heap 
// Stack(Primitive) me use hota hai, Heap(Non primitive) me use hota hai.
// Stack ke ander variable ki value ki copy milti hai.
// Heap ke ander variable ki value ka Reference same milta hai.

let myYoutubename = "hiteshchoudharydotcom";
let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "abhishek@gmail.com",
    upi: "user@ybl"
};

let userTwo = userOne;
userTwo.email = "ansh123@gmail.com";

console.log(userTwo.email);
console.log(userOne.email);

