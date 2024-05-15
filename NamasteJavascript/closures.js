
{/* Deffination of a Function:-
A closure is the combination of a function bundled
together (enclosed) with references to its surrounding 
state (the lexical environment). In other words, 
a closure gives you access to an outer function's 
scope from an inner function. In JavaScript, 
closures are created every time a function is created, 
at function creation time.
*/}


// 1 //
// Simple closure funtion 

function x() {
    var a = 10;
    function y() {
        console.log(a, 'simple clorsure created by function');
    }
    y(); // we can invoke the funtion inside a function is called closure
}

x();

// 2 //
// A funtion can return a function in closure 
function x() {
    var x = 10;
    function y() {
        console.log(x, 'function returns a fun');
    }
    return y; // a function can return another funtion also this is possible with JS
}
var xx = x();
console.log(xx()); // 10 function returns a fun

// 3 //
function l() {
    var x = 10;
    return function y() { // above syntax and this sytax both are same action will return the same, just sytax is differen
        console.log(x, 'function returns a fun');
    }
}
var ll = l();
// console.log(ll, 'this prints the entire function of y');

ll();
console.log(ll(), 'this prints 10');


// 4 //

//  one deep closure example
function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b); // lexical scoping in closure
        }
        y();
    }
    x();
}
z();

//-----------------------------------------------//
{/**
- Module Desing patterns
- Currying
- Functions like once 
- memoize
- maintaining state in async world 
- setTimeouts
- Iterators
- and Many more
*/}

































