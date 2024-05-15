//Normal Function in JS
// function add() {
//     console.log('hello')
// }

// add();


{/**

Generator function is created using star(*) key after function keyword. 
it has yield keyword that can pause the function execution till the next() function is called. 
next() function will resume the generator fucntion.

*/}


//GeneratorFunction in JS

//1 adding star(*) after function keyword will become a generator function//
function* myGenerator1(){ //star(*) after function keyword makes the fucntion as generator function  
    console.log('x');
    console.log('y');
    console.log('z');
}

const mygen1 = myGenerator1(); 
console.log(mygen1.next(1))// {value: a, done: false}



//1 yield keyword will pause the function execution//
function* myGenerator2(){ 
   yield console.log('x'); // yield expression will pause the function execution
    console.log('y');
}

const mygen2 = myGenerator2(); 

console.log(mygen2.next(1)) //next() method will resume the function.   {value: x, done: false}
console.log(mygen2.next(1))  //next() method will resume the function.  {value: y, done: true}







// generator function will return the object always

//GeneratorFunction in JS

function* myGenerator(){
    const n1 = yield 'a'  // 2
    const n2 = yield 'b'  // 2
    const n3 = yield 'c'  // 2 
    return n1 + n2 + n3; // n1 takes the second argument, n2 takes the third argument, n3 takes the fourth argument
}

const mygen = myGenerator();

console.log(mygen.next(1))//{value: a, done: false}
console.log(mygen.next(2))//{value: b, done: false} 
console.log(mygen.next(2))//{value: c, done: false}
console.log(mygen.next(2))//{value: 6, done: true}

//keyWord: *, yield, next()