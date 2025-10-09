// ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername(){
//     return `${this.username.toUpperCase()}`
//   }
// }

// const create = new User("abhishek", "ansh@123.com", "123");

// console.log(create.encryptPassword());
// console.log(create.changeUsername());

// behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("ansh", "abhi@gmail.com", "1234")
console.log(tea.changeUsername());
console.log(tea.encryptPassword());
