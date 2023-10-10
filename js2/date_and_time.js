// Dates

let mydate = new Date()   //instance or object of a date

// console.log(mydate.toString());

// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());

// console.log(mydate.toLocaleDateString());

// console.log(typeof mydate);


// let createdDate = new Date(2023, 0, 23)
let createdDate = new Date(2023, 0, 23)

// console.log(createdDate);

// let mycreatedDate = new Date(2023, 0, 23, 5, 3)
let mycreatedDate = new Date(2023, 0, 23, 5, 3)

// console.log(createdDate.toLocaleString());


// let myDate = new Date("2023-10-10")

let fairDate = new Date("05-10-2023")

// console.log(fairDate.toLocaleString());



let myTimeStamp = Date.now() 
// it provides vale in milli seconds from 1 january 1970.
// console.log(myTimeStamp);
// console.log(fairDate.getTime());
console.log(Math.floor(Date.now()/1000));    // converting in second



let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth());


newDate.toLocaleString('default', {
    weekday:"long",
    
})