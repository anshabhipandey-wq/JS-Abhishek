// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Shaktiman", "Naagraj", "Baalveer"];

const myArr2 = new Array(0, 1, 2, 3, 4);
// console.log(myArr[0]);

// array method

// myArr.push(6)
// myArr.push(7) // .push value ko add kar deta hai array ke ander
// myArr.pop(); // .pop array ki last value ko remove kar deta hai 

// myArr.unshift(9); // .unshift() array ke ander start me value insert karta hai eska use jada nahi hota hai
// myArr.shift(); // .shift() ke ander argument nahi dete hai eska kam hota h first value ko remove kar dena 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(12));

// const newArr = myArr.join(); // .join ne array ko bind bhi kar diya hai or use string me bhi convert kar diya hai
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr);


// slice & splice

console.log("A ", myArr);

const myn1 =  myArr.slice(1, 3); // .slice me last range print nahi hoti hai 
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1, 3); // .splice me last range bhi print hoti hai 
console.log("C ", myArr);
console.log(myn2);


