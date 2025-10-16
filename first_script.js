let name = "Chirag";
let age = 20;
console.log("My name is " + name + " and my age is " + age);
console.log(`My name is ${name} and my age is ${age}`);

let b =  "Delhi";
b = "Kolkata";
console.log(b);

const c = "Mumbai";
// c = "Chennai"; // This will throw an error
console.log(c);

let s=true;
s=false;
console.log(s);

console.error("This is an error message");  // shows error in red color in console.It is used to indicate serious issues in the code.
console.warn("This is a warning message"); // shows warning in yellow color in console.It is used to indicate potential issues in the code.
console.info("This is an info message");  // shows info in blue color in console.It is used to provide general information about the code execution.
console.debug("This is a debug ");       // shows debug message in console.It is used to provide detailed information for debugging purposes.

console.table({name: "Chirag", age: 20, city: "Delhi"});

for(let i=0; i<7; i++){
    console.log(i);
    console.count("loop executed"); // counts how many times this line is executed.
}