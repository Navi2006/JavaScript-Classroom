// Most commonly used loops for array

const coding = ["js", "py", "cpp", "ruby", "java" ]

// coding.forEach ( function (value) {
//     console.log(value);
// })



// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }


// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})


