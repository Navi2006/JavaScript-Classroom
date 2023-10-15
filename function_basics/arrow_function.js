const user = {
    username: "naveen",
    price: 999,

    WelcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`);
        // "this" keyword gives reference to the 'current context'
        console.log(this);
    }
    
}
// user.WelcomeMessage()
// user.username = "sam"
// user.WelcomeMessage()

// console.log(this);

// function chotu() {
//     let username = "naveen"
//     console.log(this.username);
//     // function ke context me this keyword nhi kaam rha hai
// }
// chotu()


// const chai = function () {
//     let username = "naveen"
//     console.log(this.username);
// }

// chai()


// *******************ARRAY FUNCTION DECLARATION*************

const chai =  () => {
    let username = "naveen"
    console.log(this);
}
// chai()

// ****************PURE ARROW FUNCTION*********************

// Basic arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// Implicit return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) =>( num1 + num2)
// Is implicit function ka use react me bahut jada use hoga

const addTwo = (num1, num2) => ({ussername:"naveen"})
// oject ke liye () lagana hi padega

console.log(addTwo(67,387437));


// NOTE: Curly{} braces ke saath return likhna padta hai aur () parenthesis ke saath nhi likhna padta hai


// const myArr = [1, 2, 3, 4]

// myArr.forEach(() => {})


















