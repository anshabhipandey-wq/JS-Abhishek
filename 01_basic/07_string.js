const name = "abhishek";
const repoCount = 1;

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // esko string interpolation bola jata hai

const gameName = new String('abhishek-ap-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5)); // charAt() se ham kon sa character kis position per hai o dekh sakte hai
console.log(gameName.indexOf('h')); // jaise hme pata karna ho h kis position per hai to hm indexOf() ka use karte hai

const newString = gameName.substring(0, 4);
console.log(newString); // substring me last value include nahi hogi 

const anotherString = gameName.slice(-10, 4);
console.log(anotherString); // slice me hm negative value bhi de sakte hai negative value dene per ye reverse se start hoga

const newStringOne = "     anshpan       ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim() se start or end ki space hat jati hai 

const url = "https://hitesh.com/hitesh%20choudhary"; // browser space ko nahi samjhta esliye space %20 urln coding me change kar dega
console.log(url.replace('%20', '-'));
console.log(url.includes('ansh')); // agar aap question puchna ya fir kuch pata karna chahte hai to .include() ka use kare

console.log(gameName.split('-')); // array me convert karna ho to split('seprater', 'limit') ka use kare
