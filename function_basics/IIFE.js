// Immediately invoked Function Expression (IIFE)

(function chai(){
    // named IIFE "Chai"
    console.log(`DB CONNECTED`);
})();
// iska use hum global scope ke interference se problem ko hatane ke liye use kiya jata hai IIFE


(function aurcode () {
    console.log(`DB CONNECTED three `);
}) ();

( (name) => {
    // simple IIFE with no name
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('naveen')



