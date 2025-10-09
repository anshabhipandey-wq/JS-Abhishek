// let myName = "abhishek"
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.abhishek = function(){
    console.log(`abhishek is present in all objects`);
    
}

Array.prototype.heyAbhishek = function(){
    console.log(`Abhishek say hello`);
    
}

// heroPower.abhishek()
// myHeros.abhishek()
// myHeros.heyAbhishek()
// heroPower.heyAbhishek()

// inheritance 

const User = {
    name: "ansh",
    email: "ansh@123gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __Proto__: TeachingSupport
}

Teacher.__Proto__ = User

// modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "anshabhipandey     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"abhishek".trueLength()
"coldcoffee".trueLength()