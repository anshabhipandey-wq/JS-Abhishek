class User {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const create = new Teacher("abhishek", "abhi@gmail.com", "123")
create.addCourse()

const masalchai = new Teacher("masalachai")
masalchai.logMe()