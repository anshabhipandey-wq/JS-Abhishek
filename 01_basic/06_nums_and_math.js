const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // number ke aage point lga ke zero fixed kar deta hai ex = 100.00

const otherNumber = 123.8976;
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // negative value positive me convert ho jati hai. example: math.abs(-4) = 4
// console.log(Math.round(4.5)); // upper value = 5
// console.log(Math.round(4.4)); // lowest value = 4
// console.log(Math.ceil(4.2)); // upper value = 5
// console.log(Math.floor(4.9)); // lowest value = 4
// console.log(Math.min(3,6,1,8,5)); // minimum value legi
// console.log(Math.max(3,5,6,7,2)); // maximum value legi

console.log(Math.random()); // Math.random() ki value hamesha 0 and 1 ke between aayegi
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); // agar apko ek number value chahiye to aise code likhe

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // important formula for random value








