
//Declaring object through constructor
// const zomatoUser = new Object()

// object by literal
const zomatoUser = {} 
zomatoUser.id = "123abc"
zomatoUser.name = "Mark"
zomatoUser.isLoggedIn = false

// console.log(zomatoUser);

const BlinkitUser = {
    email:"someone2@gamil.com",
    full_name:{
        username:{
            firstname: "Naveen",
            lastname: "Singh"
        }
    }
}
// console.log(BlinkitUser.full_name.username.firstname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj4 ={5: "a", 6: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {
    ...obj1, ...obj2
}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "n@gmail.com"
    } ,
    
    {
        id: 1,
        email: "n@gmail.com"
    } ,

    {
        id: 1,
        email: "n@gmail.com"
    } ,

    {
        id: 1,
        email: "n@gmail.com"
    } ,
]
users[1].email
console.log(zomatoUser);

console.log(Object.keys(zomatoUser));
console.log(Object.values(zomatoUser));
console.log(Object.entries(zomatoUser));


console.log(zomatoUser.hasOwnProperty('isLoggedIn'));


//********************************OBJECT DE-STRUCTURE & JSON API INTRO**************************************

const course = {
    course_name: "js in hindi",
    price: "999",
    CourseInstuctor: "Naveen Singh"
}

// course.CourseInstuctor
const {CourseInstuctor: instructor} = course           // destructuring  object "course"
// console.log(CourseInstuctor);
console.log(instructor);


// recat props 
// const navbar = ({companyname}) => {}             
// navbar(companyname = "hitesh")


// *************************JSON API ***************************

// {
//     "name": "naveen",
//     "course_name": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]





