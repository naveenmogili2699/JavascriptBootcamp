
//************--------  Function  -------************/

// Declaring a function
function myFunction() {
    // ...
}


// Declaring a variable
let a = "a";


// Declaring a class
class MyClass {
    // ...
}

//   *******Javascript Hoisting Concept**********
// ------------------------------------------------//
//----WHAT IS  TEMPORAL DEAD ZONE AND HOISTING ---------// 
{/**

The Temporal Dead Zone (TDZ) is a concept in JavaScript related to variable declarations using let and const.

When you declare a variable with let or const, it is hoisted to the top of its containing scope, However, unlike var, variables declared with let and const remain uninitialized in the TDZ.

Any attempt to access or use the variable before its actual declaration within the scope will result in a ReferenceError. This is to prevent the use of variables before they have been properly defined.

Understanding the Temporal Dead Zone is important because it helps prevent bugs related to variable usage before initialization. It also promotes best practices in JavaScript coding by encouraging proper variable declarations before use.

*/}

// var is in the global memory space it can be hoisted 
// console.log(x); // undefined
var x = 7;
console.log(x); // 7

// let and const are in the seprate memory space not in the global memory spcae .
// console.log(y); // Uncaught ReferenceError: Cannot access 'y' before initialization
// y is hoisted in line num28 but vallue not assigned yet 
let y = 7;
// the value assigned to the y variable in line number 30. the time beeing from line number 28 to 30 till the value is assingned to variable y untill then y is in the temporal deadzone.
console.log(y); // 7

// let and const are hoisted in JS but they are in temporal deadzone. we cannot access them before initialization till the value is assigned to it.
// console.log(z); // Uncaught ReferenceError: Cannot access 'y' before initialization
const z = 10;
console.log(z); // 10

console.log(z); // Uncaught ReferenceError: z is not defined






// Normal funtions we can invoke above the funtion declaration or below the function declaration both will 
getName2();  // namasthe javascript getName2
function getName2() {
    console.log('namasthe javascript getName2');
}
getName2();  // namasthe javascript getName2




getName1(); // we can not access before initialization
const getName1 = () => {
    console.log('namasthe javascript getName1');
};
getName1(); // namasthe javascript getName1


// Arrow funtions if we invoked above :- Uncaught ReferenceError: Cannot access 'getName1' before initialization;
// Arrow funtions if we invoked below :- namasthe javascript getName1







