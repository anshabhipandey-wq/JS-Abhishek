function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
}

// sayMyName();

// function addTwoNumber(number1, number2){  // jab aap function ki defination lete h tab use hm parameter kahte hai 

//     console.log(number1 + number2);
    
// }

// addTwoNumber(3,4); // jab hm function ko call karate hai use hm argument kahte hai

function addTwoNumber(number1, number2){  

    // let result = number1 + number2;
    // return result;
    return number1 + number2;
    
}

const result = addTwoNumber(3, 5);
// console.log("Result", result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("abhishek"));
// console.log(loginUserMessage()); // undefined

function calculaterCartPrise(val1, val2,...num1){ // use to  rest & spread operator
    return num1;
}

// console.log(calculaterCartPrise(200, 300, 500));

const user = {
    username: "abhishek",
    price: 999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
// handleObject({
//     username: "Sammy",
//     price: 199
// });


const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray){
    return getArray[2];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 700, 1000]));
