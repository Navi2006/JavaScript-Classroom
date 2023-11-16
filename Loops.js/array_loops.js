// Array specific loop
//1. for of loop



// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const iterator of object) {
    
// }
for (const value of arr) {
    console.log(value);
}

const str = "Hello world!"
for (const greeting of str) {
    console.log(`Each char is :${greeting}`);
}



// Maps in js

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")


console.log(map);

for (const key of map) {
    console.log(key);
}
// it returns the complete array

for (const [key, value] of map) {
    console.log(key , ':-', value);
}
// Key and value is destructure in the array.


const anyObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key, value] of anyObject) {
//     console.log(key , ':-', value);
// }

