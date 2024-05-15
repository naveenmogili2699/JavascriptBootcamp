// this keyword

// Methods

// let user = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName: function () {
//     let that = this;
//     return function () {
//       // console.log(this);
//       return that.firstName + " " + that.lastName;
//     };
//   },
// };

// const nestedFn = user.getFullName();

// console.log(nestedFn());

// console.log(user.getFullName());

// alert("Who's this?");

// Simple function call

// function demoFunction() {
//   // let this = {}
//   console.log(this);
//   // return this;
// }

// const objOne = new demoFunction();

// Inside Arrow Function
// const demoFn = () => console.log(this);

// demoFn();

// let user = {
//   name: "John Doe",
//   greet: function () {
//     return () => console.log(this);
//   },
// };

// const nestedFn = user.greet();

// nestedFn();

// Event Listeners

// const btnDemo = document.querySelector("#btnDemo");
// const inputEl = document.querySelector("#input");

// inputEl.addEventListener("input", function () {
//   console.log(this.value); // Input Element
// });

// btnDemo.addEventListener("click", function () {
//   console.log(this); // Button Element
// });

// Changing this context
// - bind, call, apply

// let user = {
//   name: "John Doe",
//   greet: function (lang = "en") {
//     if (lang === "en") {
//       console.log("Hello " + this.name);
//     } else {
//       console.log("Hola " + this.name);
//     }
//   },
// };

// user.greet();

// let userTwo = { name: "Jenny Doe" };

// const boundedFn = user.greet.bind(userTwo);

// boundedFn();

// user.greet.call(userTwo, "de");
// user.greet.apply(userTwo, ["fr"]);
