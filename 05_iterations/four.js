const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//    console.log(`${key} shortcut for ${myObject[key]}`);
   
}

// array ki keys 0 se start hoti hai and Object key by default jo likhna chahe likh sakte hai 

const programming = ["C++", "js", "rb", "py", "java"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
    
    
}

// map iterable nahi map ko for in loop me nahi run karaya jata
// const map = new Map();
// map.set('IN', "India")
// map.set('USA', "United State of America")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);
// }

