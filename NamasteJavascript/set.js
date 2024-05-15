
{/**

In JavaScript, a Set is a built-in object that allows you to store unique values of any type, 
whether primitive values or object references. 
Here's how you can use a Set in JavaScript

*/}


const namesArry = ["naveen", "sujatha", "shamu","naveen", "blakcy","sujatha", "sujatha", "shamu", "naveen"];
const numsArray = [1,2,3,1,4,3,2,4,1,5,3,4,1];
const mycity="HyderabadHeighLowtoHeight";


const myNamesobj = new Set(namesArry);
const myNumsobj = new Set(namesArry);
const mycityobj = new Set(mycity);


console.log( myNamesobj,'myNamesobj');
console.log(typeof myNumsobj,'type');
console.log( mycityobj,'mycityobj');
console.log(typeof myNamesobj,'type');
console.log( myNumsobj,'myNumsobj');
console.log(typeof mycityobj,'type');


// another way to assing the value to set obj

let mySet = new Set();

mySet.add(1);
mySet.add('Hello');
mySet.add({ name: 'John', age: 30 });

console.log(mySet,'mysetvalues');
console.log(mySet.size); // Prints the number of elements in the Set
console.log(mySet.has('Hello')); // true
mySet.delete('Hello');


// Iterating Over a Set:

mySet.forEach(function(value) {
    console.log(value,'forEachloop');
  });
  
  // Or using a for...of loop
  for (let value of mySet) {
    console.log(value,"for of loop");
  }
  

// Converting Set to Array:

let arrayFromSet1 = Array.from(mySet);
// Or
let arrayFromSet2 = [...mySet]; //copay using spead oparator











