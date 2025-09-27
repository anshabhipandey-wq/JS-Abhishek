const user = {
    username: "abhishek",
    price: 999,
// this keyword current contest ko refer karta hai
    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "ansh";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "ansh";
//     console.log(this.username);
// }

// chai();

// const chai = function (){
//     let username = "ansh";
//     console.log(this.username);
// }

// chai();

// const chai = () => {
//     let username = "ansh";
//     console.log(this.username);
// }

// chai();

const chai = () => {
    let username = "ansh";
    console.log(this);
}

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// } // basic arrow function
// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => num1 + num2; // implicit arrow function

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "abhishek"});

console.log(addTwo(3, 4));