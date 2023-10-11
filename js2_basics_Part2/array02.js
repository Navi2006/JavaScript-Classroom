const marvel_heros = ["ironman", "thor", 'hulk']
const real_heros = ["paresh", "Akshay", "Shilpa"]

// marvel_heros.push(real_heros)
// marvel_heros.push(real_heros)
// console.log(marvel_heros [3][1]);

// const all_heros = marvel_heros.concat(real_heros)
// console.log(all_heros);

// spread method is used "..."
const all_new_heros = [...marvel_heros, ...real_heros]
// console.log(all_new_heros);

const we_array = [1, 2, 3, 4, [4, 5, 6, 7, 8], 9, [10, 11, [12, 13]]]
const real_another_array = we_array.flat(1)
console.log(real_another_array);





console.log(Array.isArray("Naveen"));
console.log(Array.from("Naveen"));
console.log(Array.from({name:"naveen"}));  // intresting


let score1 = 100
let score2 = 200
let score3 =300

console.log(Array.of(score1, score2, score3));

