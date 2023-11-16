// Reduce method

const myNums = [1, 2, 3]

// const mytotal = myNums.reduce( function (acc, currval)  {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0 )


const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "app development",
        price: 3999
    },
    {
        itemName: "Data science",
        price: 8999
    },
    
]
const priceTopay = shoppingCart.reduce( (acc, item) => acc + item.price , 0)
console.log(priceTopay);






