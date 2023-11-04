const userEmail =[]


if (userEmail) {
    console.log("got user email");
} else{
    console.log("Don't have user email");
}

if (userEmail.length === 0) {
    console.log("Array is Empty");
}

const emptyobject = {}

if (Object.keys(emptyobject).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null & undefined

let val1;
// val = 5 ?? 10
// val = null ?? 10
// val1 = undefined ?? 15
val1  = null ?? 10 ?? 15

console.log(val1);

// Terniary Operator

// condition ? true : false

const teaPrice = 100
teaPrice <=80 ? console.log("less than 80") : console.log("more than 80");