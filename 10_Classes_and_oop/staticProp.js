class User {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
        
    }

    static createdId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createdId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@gmail.com")
iphone.logMe();