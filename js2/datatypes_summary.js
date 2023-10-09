
// on the of how data is stored in the memory and it can be accessed ; datatypes are of two types:-
//  1:Primitive Datatypes (call by value, means we won't get memory   reference , only we a copy of it and whatever changes we made ;all done in the copy. )
/*
    7 types: String , number , boolean , Null , Undefined  ,Symbol , BigInt
*/

const score = 100 //typeof (number)
const scoreValue = 100.3  //typeof (number)

const isLoggedIn = true    //boolean
const outsideTemp = null   //object
let userEmail;             //undefined

const id = Symbol('123')   //symbol
const anotherId = Symbol('123')  //symbol


console.log(id === anotherId);   // fase

 // Here n represent bigInt datatype
const bigNumber = 4859858826987860987856n //bigint datatype





// 2:Reference or Non-primitive datatypes (call by reference , means we get memory reference .)

//    Array , Objects , Functions

//Array
const heros = ["shaktiman", "naagraj", "dojo"];    // object

//Object
let myheros = {
    name:"Naveen Singh",      // object
    age:"18",
}

// declaring function as variable

const myfunction = function(){               //function
    console.log("Hello world");
}


//how to find the datatype of a Variable

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myheros);
console.log(typeof myfunction);

// answers

/*
false
number
number
boolean
object
undefined
symbol
symbol
bigint
object
object
function object
*/