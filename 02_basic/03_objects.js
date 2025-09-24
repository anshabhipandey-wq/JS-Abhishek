// singleton 
// Object.create

const { jsx } = require("react/jsx-runtime");

// Object.literals

const mySym = Symbol("key1");

const JsUser = {
    name: "abhishek",
    "full name": "abhishek pandey", // agar keys ko aapne double quate ke andar likha hai to use print karane ke liye apko aise likhana padega ["full name"]
    [mySym]: "myKey1", // agar apko symbol me print karana hai to keys ko square bracket me likhna padega
    age: 18,
    location: "amethi",
    email: "ansh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "abhishek@chatgpt.com";
// Object.freeze(JsUser);

JsUser.email = "abhishek@marco.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
