const user = {
    username: "abhishek",
    loginCount: 8,
    singedIn: true,

    getUserDetails: function(){
        // console.log("Got user detail from database");
        // console.log(`Username ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this // return likhe ya na likhe implicitly return hota hai code 
}

const userOne = new User("abhishek", 12, true)
const userTwo = new User("ansh", 10, false) // userTwo ne value overright kar di bina print karaye
console.log(userOne);
console.log(userTwo);

// new keyword hm use karenge to sabse pahle empty object create hota hai jise instance bola jata hai
// construction funtion call hota hai new keywords ki vajah se  
