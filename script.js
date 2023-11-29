console.log("hello world");

//weird scope - dont use 
// var x = 5;
// regular old variable
let y=6;
y=10; // you can change the value 

const z = 7; // this is a constant. Cant be changed 
// z=18; // this throws and error.

console.log(y,z);
console.log(y+z);
console.log(y-z);
console.log(y*z);
console.log(y/z);
console.log(y%z); // this does divison but returns the remainder
console.log(y**z); // exponents

let fname="kylie ";
lname="kertley";
console.log(fname + " " + lname);

console.log(`${ fname }  ${ lname }`);
console.log(`${ fname} ${ lname}`);
console.log( lname + " " +  6);


let user = "kylie";
let pass = "foo";

if (user == "kylie") {
    console.log('you are ' + user + ` and your pass is ` + pass);
} else {
    console.error("DENIED");
}

const license = 18;
const jrop = 16;
const rental = 25;

let myAge = 46;

function checkAge( myAge ) {
    console.log(`RUNNING ...`+myAge);
        if (myAge < lisence && myAge >= jrop ) {

        }

        if (myAge >= license) {
            console.log(`you can have a regular license`);
        }

        if (myAge < jrop) {
            console.log("your're too young to drive");
        }
}