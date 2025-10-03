const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        courseName: "js course",
        price: 2999
    },
    {
        courseName: "py course",
        price: 999
    },
    {
        courseName: "mobile dev course",
        price: 5999
    },
    {
        courseName: "data science course",
        price: 12999
    },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
