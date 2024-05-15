//------------ HigherOrderFunction ---------------//
{/*
--> Higher-order function in JavaScript is a function that either takes
    one or more functions as arguments or returns a function as its result.
--> A function which takes another function is an argument or return a function from form it, is called as HOF
*/}


// 1. Higher Order function for three cases//
// the blelow is the Higher Order Function example for lifetime

{/*

---> A function which takes another function is an argument or return a function from it, is called as HOF.

*/}

const area = (radius) => {
    return Math.PI * radius * radius
}

const circumference = (radius) => {
    return 2 * Math.PI * radius
}

const diameter = (radius) => {
    return 2 * radius
}



const calculate = (radius, logic) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output
};

const radius1 = [3, 1, 2, 4];

// function accepts as an argument or paramete is called as HOF. Ex:- calculate
// The fuction which will be passed as an argument that will be called at a specific time is called as callback function. Ex:- diameter, circumference, area

console.log(calculate(radius1, diameter)) // calculate function is the HOF because it is accepting diameter function as an argument. // Diameter function is a call back function fo calculate function  
console.log(calculate(radius1, circumference)) // calculate function is the HOF because it is accepting circumference function as an argument. // Diameter function is a call back function fo circumference function  
console.log(calculate(radius1, area))// calculate function is the HOF because it is accepting area function as an argument. // Diameter function is a call back function fo area function  
 



// 2. noramal function for three cases 
const radius = [3, 1, 2, 4];
const calculateArea = (radius) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output
};

console.log(calculateArea(radius),'Area');


const calculateCircumference = (radius) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output
};

console.log(calculateCircumference(radius),'Circumference');



const calculateDiameter = (radius) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output
};

console.log(calculateDiameter(radius),'Diameter');







