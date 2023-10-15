// function declaration using "function" keyword

function myName(){
    console.log("N");
    console.log("a");
    console.log("v");
    console.log("e");
    console.log("e");
    console.log("n");
}

// myName
//  this is function reference

// myName()
// this is function execution
// myName()

// function addTwoNumbers( number1, number2){  // parameter declared in function definition
//     console.log(  number1 + number2);
// }


function addTwoNumbers( number1, number2){  // parameter declared in function definition

    // let result = number1 +number2
    // return result
    // after return keyword nothing executed

    return number1 + number2
}

const result = addTwoNumbers(4, 5)   // arguments passed in function call
// console.log("Result:" ,result);


function loginUserMessage(username){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Naveen"))
// console.log(loginUserMessage())

function calculateCartPrize(_val1, _val2, ..._num1){
    return _num1
}
// console.log(calculateCartPrize(200, 400, 500, 356, 899, 800));


const user = {
    username: "Naveen",
    price: 199
}
function handleObject(_anyobject){
    console.log(`Username is ${_anyobject.username} and Price is ${_anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price: 399
})


const myNewArr = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200, 400, 300, 600]));
