const name = "name"
const repoCount = 6
console.log(name + repoCount + "value");  // outdated syntax

/*
 use backticks (``) it provides string interpolation means hum waha placeholders banate hai ; unke andar jo variable hai usse directly inject kr sakte hai...
*/



// modern way of syntax declaration

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);




// const gameName = new String("Naveen");

const gameName = new String("Naveen-si");

// console.log(gameName);

// console.log(gameName[5]);

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toLocaleUpperCase());

console.log(gameName.charAt(4));

console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,4)  
// negative value not accepted

console.log(newString);



const anotherString = gameName.slice(-6,4)  
//negative value also accepted


console.log(anotherString);


const newString1 = "       hitesh         "
console.log(newString1);
console.log(newString1.trim());



const url = "https://curiosnavi.com/curious%30singh"


console.log(url.replace('%30', '_'));


console.log(url.includes('curious'));

console.log(url.includes('beautiful'));



console.log(gameName.split('-'));


















