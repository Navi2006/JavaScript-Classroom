// Discussion of "SCOPE" start with these 3 keywords : let , var , and const.

// Global Scope : they are accessible globally means outside the scope,"{}"    ex- var
// Local scope : they are accessible within the scope{}, ex-const and let

// let navi = 10

// const sweety =20

// {} this curly braces is the Scopes when it comes with if-else and function

// var guri= 300

let navi = 300
if(true){
    let navi = 10

    const sweety =20

    // console.log("inner:", navi);
}


// console.log(navi);
// console.log(sweety);
// console.log(guri);

// NOTES: Global scope in window and in node are different..


// **************Scope level and Mini hoisting**************

function one(){
    const username = "Naveen"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "naveen"
    if (username === "naveen") {
        const  website = "youtube"
        // console.log(username  +  website);
    }
    // console.log(website);
}
// console.log(username);


//******************** INTRESTING**************


console.log(addone(5)); // Ye error nhi dega 
function  addone(num){          // JUST FUNCTION
    return num + 1
}


// console.log(addTwo(5))   // Ye error dega kyoki hum access kr rhe initialization se pahle
const addTwo = function (num) {  // functions in the form of EXPRESSION
    return num + 2
}
console.log(addTwo(5)) 











