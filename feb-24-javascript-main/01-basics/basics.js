// var str = "Hello";

// str.concat(" World");

// console.log(str); // ?

// var x = "20";

// var y = 10;

// console.log(x + y); // 2010
// console.log(x - y); // 10

// console.log(x == y); // true
// console.log(x === y); // false

// var idOne = Symbol("001");
// var idTwo = Symbol("001");

// console.log(typeof idOne);
// console.log(typeof idTwo);

// console.log(idOne === idTwo);

// var x = "Hello World";

// console.log(typeof x); // ?

// x = 201;

// console.log(typeof x); // ?

// x = true;

// x = {};

// x = [];

// x = function () {};

// function longRunningOp() {
//   setTimeout(function () {
//     console.log("Running the operation");
//   }, 2000);
// }

// function webRequest(req) {
//   console.log("Starting with " + req.reqId);
//   longRunningOp();
//   console.log("Ending with " + req.reqId);
// }

// webRequest({ reqId: "r001" });
// webRequest({ reqId: "r002" });

// starting with r1
// end with r1
// starting with r2
// end with r2
// (after 2 seconds) running
// (after 2 seconds) running

// function demoBlock(arr) {
//   if (arr.length > 2) {
//     let LOAD = "LOADING...";
//     console.log(FLASH); // ?
//   } else {
//     let FLASH = "FLASHING...";
//   }
// }

// demoBlock([1, 2, 3, 4]);

// const user = "John Doe";

// user = "Jenny Doe";

// const user = { name: "John Doe" };

// user.name = "Jenny Doe";

// console.log(user.name); // Jenny Doe

// user = { name: "Jack" };

// const friends = ["Ross", "Rachel", "Monica"];

// friends.push("Joey");

// console.log(friends); // ?

// console.log(3 > 2 > 1); // ?

// (true > 1)      // TRUE

// String "" || '' || `` (back tick)

// Template Literals
// - Embed the variables within string without (+)
// - Multiline string without (\n)

// let username = "John Doe";
// let userAge = 32;

// let greet = `Hello from ${username}!
// I'm ${userAge} years old!
// `;

// console.log(greet);

// let x = "20";

// let numX = Number(x);

// let numY = parseInt(x);

// console.log(typeof numX);
// console.log(typeof numY);

// let dob = "2001-01-04";

// let dateObj = new Date(dob);

// console.log(dateObj);

// for...of - Array

// let arr = [2, 3, 4, 5];

// for (let item of arr) {
//   console.log(item);
// }

// arr.forEach(function (val) {
//   console.log(val);
// });

// for (let i = 0; i < arr.length; i++){
//     arr[i]
// }

// for...in - Objects
let user = {
  name: "John",
  age: 32,
};

for (let prop in user) {
  console.log(`${prop} - ${user[prop]} `);
}
