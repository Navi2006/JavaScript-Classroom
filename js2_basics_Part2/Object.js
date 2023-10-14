/*
 Declaration of object are done in two ways.
 1. by object literal
 2.by constructor (isme singleton banta hai)
*/


// Isi ko bola jata hai object constructor ke through object create krna aur isi ke andar singleton banta hai
// Object.create




  //Declaration of SYMBOL DATATYPES In JavaScript
  const mysymbol = Symbol("key1") 
  console.log(typeof mysymbol);


// object declare through object literals
// object is declare in the KEY-VALUE Pair
const myDetails = {
    name: "Naveen",            // Behind the scene the key "name" is stored in the STRING FORMAT.
    "full name": "Naveen Singh",
    [mysymbol]: "Mykey2",          // declaring symbol as a key in object
    age: 17,
    location: "Maharajganj",
    Email: "naveen@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["mon", "saturday"]
}

// accessing object 

console.log(myDetails.name);  
// this is not a good way to access object

console.log(myDetails["name"]);   
// here we access any key, we need to access in the double quote 
console.log(myDetails["full name"]);
console.log (myDetails[mysymbol]);

myDetails.Email = "dalleE@gamil.com"
// Object.freeze(myDetails) 
// to freeze the  object so that no one can change the value
myDetails.Email = "daaleEEa@gmail.com"
console.log(myDetails);

// adding functions in object
myDetails.greeting = function(){
    console.log("Enter Your Details Here...");
}
myDetails.greeting1 = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(myDetails.greeting());
console.log(myDetails.greeting1());







