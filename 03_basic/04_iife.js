// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log("DB CONNECTED");
// }

// chai();

(function chai(){
    console.log(`DB CONNECTED`);
})(); 

// global scope ke polution se problem hoti hai kayi baar to us global scope ke variables ya jo bhi declaration hai use hatane ke liye hamne iife ka use kiya

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// })();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('abhishek');