// --------------- Function Statement and Function Declaration both are same  -----------------//

// We can invoke above and below the function statement is fine both are correct

a() // function a invoked successfully
function a() { // function declaration
    console.log('a called');
}
a() // function a invoked successfully




// --------- Function expression ----------------//

// in Function expression we can not invoke it before declaration of the function. Will throw an error

// b() // Uncaught TypeError: b is not a function
var b = function () { // anynomus function is assigned to a variable is called fucntion expriession.
    console.log('b called')
}

b() // function a invoked successfully





// ------------- Anonymous Functions ------------------ //

{/*
A function without a name is called anonymus functions. 
But a function must have the function name otherwire 
it will throw an error 

- Uncaught SyntaxError: Function statements require a function name

*/}

{ /** 

function (){

} 

*/}









// -------------------------- Parameters and arguments in function expression -------------------------- //

var w = function (param1, param2) {
    console.log(param1, param2)
}

w(1, 2)


//--------------------------- First class/anynomus function --------------------------------------//

{/**
The ability to pass the function as argument and 
return a function from a function and 
we assign a function as a value to a variable is called first class function. 

*/}


var b = function () { // assigned a function to a varable
    return function xyx() { // returing a function from a funciton 
        return 1
    }
}


function p(val) { 

    console.log(val()) // b() function returns value to the function p(). p() function will same value as an argument 

}

p(b()) // passing the function as an arguments (out put is 1 )













