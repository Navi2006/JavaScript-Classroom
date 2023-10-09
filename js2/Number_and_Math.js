const score = 623

// console.log(score);


const balance = new Number(100);
// console.log(balance);


// console.log(balance.toString());

// console.log(typeof balance.toString());

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));


const otherNumber = 123.8947

// console.log(otherNumber.toPrecision(4));


const hundreds = 1000000

// console.log(hundreds.toLocaleString());  //default values comes in US range


// console.log(hundreds.toLocaleString('en-IN'));


// ***************************MATHS*****************************



console.log(Math.abs(-6));  
// absolute value either negative or positive value

console.log(Math.abs(6));  


console.log(Math.round(9.7)); // it gives round of value


console.log(Math.ceil(6.6)); // it gives ceil value like round()


console.log(Math.floor(4.8));  // it give value before decimal


console.log(Math.min(4 , 3 , 8 , 9)); 
// it gives minimum value from a set of values



console.log(Math.max(4 , 3 , 8 , 9)); 
// it gives maximum value from a set of values

console.log(Math.sqrt(9));  // it gives square root of a given number

console.log(Math.pow(2 ,4)); // it gives the power of given argument


console.log(Math.random(9 , 7)); 
// Returns a pseudorandom number between 0 and 1




console.log(Math.random());
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);