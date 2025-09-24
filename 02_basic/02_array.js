const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// const new_all_Heros = [...marvel_heros, ...dc_heros]; // ye element ko spread kar deta hai i mean vikher deta hai ese hm spread operator kahte hai
// console.log(new_all_Heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // agar array ke andar bhi kayi array ho to use ek hi array me lane ke liye ham .flat() ka use karte hai 

// console.log(real_another_array);

console.log(Array.isArray("Hitesh")); // .isArray(value likhe) esse hm question puchh sakte hai ki array me ye value hai ki nahi 
console.log(Array.from("Hitesh")); // .from() se hm kisi value ko array bna sakte hai

// console.log(Array.from({name: "hitesh"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // .of() value ko array me convert kar deta hai 

