// FUNCTIONS

// console.log("Add : ", add(2, 4));

// function add(n1, n2) {
//   return n1 + n2;
// }

// let sum = function (n1, n2) {
//   return n1 + n2;
// };

// function mystry() {
//   var chooseNumber = function () {
//     return 7;
//   };
//   return chooseNumber;
//   var chooseNumber = function () {
//     return 12;
//   };
// }

// const nestedfn = mystry();

// console.log(nestedfn()); // ?

// console.log(mystry()); // function

// HOF - HIGHER ORDER FUNCTION
// function demo(arr, cb1) {
//     if (arr.length > 2) {
//     cb1(null, { message: "Hola!" });
//   } else {
//     cb1(new Error("Too less values"));
//   }
// }

// demo("Hello World", function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(data.message);
// });

// webRequest(url, function (err, result) {});

// CLOSURES :
// - process of binding the outer scope variable with inner function

// function testClosure() {
//   let x = 3;

//   return function () {
//     return ++x;
//   };
// }

// const nestedFn = testClosure();

// console.log(nestedFn()); // 4
// console.log(nestedFn()); // 5
// console.log(nestedFn()); // 5
// console.log(nestedFn()); // 5
// console.log(nestedFn()); // 5

// function buildTicket(transport) {
//   let numOfPassenger = 0;
//   return function (name) {
//     return `
// Hello Mr/s. ${name}!
// You are going via ${transport}.
// Tour Ticket ID # ${++numOfPassenger}
//         `;
//   };
// }

// const nestedShipFn = buildTicket("Ship");
// console.log(nestedShipFn("John"));
// console.log(nestedShipFn("Jenny"));

// const nestedKangarooFn = buildTicket("kangaroo");

// console.log(nestedKangarooFn("Jack")); // ?

// Lexical Scope (Outer Scope) - Physical location of function/ function birth place

// Scope Chaining -> inside /self -> parent Function -> Global Environment

// Variable look-up

// let x = 102;

// function b() {
//   //   let x = 101;
//   console.log(x); // 102
// }

// function a() {
//   let x = 103;
//   b();
// }

// a();

let x = 201;

function b() {
  console.log(x); // 201
}

b();

function a() {
  let x = 301;
  function b() {
    console.log(x); // 301
  }
  b();
}

a();
