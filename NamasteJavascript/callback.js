//------------ what is the callback function ------------//
{/**
1. passing a funtion as an argument is called call back
Example:-
- setTimeout
- below example function 

*/}



setTimeout(() => { //this arrow function is the callback function for the setTimeout
    console.log('setTimeout called');
}, 1000); 


function x(y){ // y function got here as an parameter
    console.log('x called');
    y()  // y invoked
};

x(function y(){ // y executed
    console.log('y called'); 
});// x will be called first then y function passed as an argument 



