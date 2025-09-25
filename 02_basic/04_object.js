// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

const regularUser = {
    email: "abhishek@gmail.com",
    fullname: {
        userfullname:{
            firstname: "abhishek",
            lastname: "pandey"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

// console.log(tinderUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2};
// const obj4 = Object.assign({}, obj1, obj2, obj3); 
const obj4 = {...obj1, ...obj2};
// console.log(obj4);

const user = [
    {
        id: "1",
        email: "abhishek@122gmail.com"
    },
     {
        id: "1",
        email: "abhishek@122gmail.com"
    },
     {
        id: "1",
        email: "abhishek@122gmail.com"
    },
     {
        id: "1",
        email: "abhishek@122gmail.com"
    },
]

// user[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const {courseInstructor: instructor} = course;
// console.log(courseInstructor);
console.log(instructor);

// JSON Structure 
// {
//     "name": 'abhishek',
//     "course": "js",
//     "prise": "free"
// }

// Arrays API
// [
//     {},
//     {},
//     {}
// ]

// API ke liye ek JSON formatter hota hai 