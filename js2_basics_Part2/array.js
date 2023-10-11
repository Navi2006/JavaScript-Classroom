// Basic Array Part 01


// multiple ways to declare array

const myArray = [0, 1, 2, 3, 4, 5]

const myHeros = ["mavrick", "roger", "Naveen", "jerry"]

const myArr = new Array(1, 2, 3, 4 ,5)

// console.log(myArray[4]);/  
// array indexing start with '0' zero


// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()   
// no argument is passed , it just pop the last value from the array

// myArr.unshift(0)
// myArr.shift()  
// isme bhi parameter nhi dete hai

// console.log(myArr.includes(9));  
//result comes in boolean 
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// console.log(myArr); 
// console.log(newArr); 


// slice and splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 3)  
// no manipulation in the original Array  

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
// Original Array is manipulaetd
console.log(myn2);
console.log("C", myArr);



