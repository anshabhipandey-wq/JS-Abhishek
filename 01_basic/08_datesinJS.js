// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0 , 21);
// let myCreatedDate = new Date(2025, 0 , 21, 4, 2);
// let myCreatedDate = new Date("2024-01-13");
let myCreatedDate = new Date("01-13-2024");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); // esse hme exact time or poll setup or quiz setup karne ke liye use hota hai
// console.log(myTimeStamp); // esme value miliseconds me aati hai
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // exact date dega miliseconds me

let newDate = new Date();
console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getDate());


// console.log(`my date is ${newDate.getDate()} and my day is ${newDate.getDay()}.`);

newDate.toLocaleString('default', {
    weekday: "long"
})
