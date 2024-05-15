// how call stack will execute in JS engine

{/*

1. global execution context will execute -(global execution context has its own memory)
2. local execution context (function a and b from below code) will execute -(local execution context also has its own memory)
3. after that global and local execution context will be deleted 

*/}


var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}












