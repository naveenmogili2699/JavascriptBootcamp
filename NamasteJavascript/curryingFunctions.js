//***************Currying functions **************/

{/**
deffination :-- 
--> a function with multiple arguments into a series of functions, each taking a single argument. 
--> In JavaScript, you can implement currying using closures and returning functions. 
*/}



// Regular function taking two arguments
const add = (a, b) => {
    return a + b
}
add(1, 2)

// Crrying function taking two arguments
const add1 = (x) => {
    return (y) => {
        return x + y;
    }
}
 //1//
console.log(add1(0)(2)) // 2
console.log(add1(1)(2)) // 3

//2//
const add5 = add1(2)
console.log(add5(3))//5

