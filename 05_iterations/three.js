// for of
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const number of arr) {
    // console.log(number);
    
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
    
}

// Map -> map unique value ke liye jane jate hai jis order me apne enter kiya us order me bhi rahti hai

const map = new Map();
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}


const myObject = {
    // 'game1': 'NFS',
    // 'game2': 'Spiderman'
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } // object me for of work nahi karta 