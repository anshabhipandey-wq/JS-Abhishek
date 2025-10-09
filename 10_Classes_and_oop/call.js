function setUsername(username){
    // complex DB calls
    this.username = username;
}

function createUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const create = new createUser("abhishek", "abhishek@123gmail.com", 12324)
console.log(create);
