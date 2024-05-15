// 1 //
{/* 
1.let and const are block scoped.
2.var is global scoped variable.
*/}

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a)
    console.log(b)
    console.log(c)
}

// 2 //

{/* 1.var variable we can re-declare and reassign the value too. */ }

var a = 10; // decalred a variable with var
{
    var a = 100; // Re-Declared a same variable with var
    let b = 20;
    let c = 30;
    console.log(a) // 100
    console.log(b) // 20
    console.log(c) // 30
}
a = 550; // Re-Assigned new value to a same variable with var

console.log(a) // 550 final output


// 3 //
{/* 
1. let is block scoped variable and we can not re-declare the same variable.
2. we can re-assign new value to the same variable.
*/}

{
    let a = 90;
    // let a = 99; // Uncaught SyntaxError: Identifier 'a' has already been declared 
    a = 95 // here Re-Assigned value to variable a possible with let 
    console.log(a) // 95
}



// 4 - shadowing with let //
{/* 
1. we can declare same variable inside the block and outside the block will work because of shadowing.
2. we can declare same variable inside the function and outside the function will work because of shadowing.
*/}

let x = 6; // this is the script memory same variable outside the block
{
    let x = 5; // This is same variable inside the block  
    console.log(x) // 5
}
console.log(x) // 6


let c = 10 // outinside the function
function y() {
    let c = 5; // inside the function
    console.log(c); // 5
}
y();
console.log(c) // 10


// this is wrong. it is called illegal shadowing. illegal shadowing is not possible.
// let z =3;
// {
//     var z = 10
// }

// this is correct 
var z =3;
{
   let  z = 10
}


// this is correct var is not disturbing the outside variable 
let p = 20;
function h(){
    var p = 23;
    console.log(p) //23
}
h()

// 5 - Lexical scoping //
{
    const a = 10;
    {
        const a = 20;
        {
            const a = 30;
            console.log(a); // 30
        }
    }
}


{
    const a = 10;
    {
        const a = 20;
        {
            console.log(a); // 20 (this will take the neares block value and then prints)
        }
    }
}
// Lexical scoping in functions (this is called as closures also)

function a() {
    var x = 10;
    function b() {
        function c() {
            console.log(x, '')
        }
        c();
    }
    b();
}

a();









































