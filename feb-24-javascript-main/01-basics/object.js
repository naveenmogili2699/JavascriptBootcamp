// Objects - are unordered collection
// Object Creation Methods (Literal, Constructor, Instance)

// - LITERAL METHOD

// let books = ["book1", "book2", "book3"];

// let box = {
//   width: 4,
//   height: 6,
//   books: books,
//   addBook: function (newBook) {
//     this.books.push(newBook);
//   },
//   "# of books": 3,
// };

// box.volume = box.width * box.height;

// delete box.width;

// console.log(delete box.xyz);

// box.addBook("book4");

// console.log(box);

// console.log(box["books"]); //index signature
// console.log(box["# of books"]);

// // console.log(box.books);

// console.log(books.length); // 4

// - CONSTRUCTOR (before ES2015/ES6)
// - greed Java Developers
// - similar type objects

// function Person(firstName, lastName) {
//   // let this = {};
//   this.firstName = firstName;
//   this.lastName = lastName;

//   // return this;
// }

// Person.prototype.getFullname = function () {
//   return this.firstName + " " + this.lastName;
// };

// let john = new Person("John", "Doe");
// console.log(john.getFullname());

// let jenny = new Person("Jenny", "Public");
// console.log(jenny.getFullname());

// String.prototype.numOfOccurance = function (letter) {
//   let count = 0;
//   for (let i = 0; i < this.length; i++) {
//     if (this.charAt(i) === letter) {
//       count++;
//     }
//   }
//   return count;
// };

// let str = "Hello World";
// console.log(str.numOfOccurance("l"));

// let anotherStr = "Welcome to JavaScript!";

// console.log(anotherStr.numOfOccurance("a"));

// let user = {
//   name: "John",
//   getDetails: function () {
//     return "Hello " + this.name;
//   },
// };

// user.getDetails();

// // call, apply, bind

// let userTwo = { name: "Jenny" };

// const boundedFn = user.getDetails.bind(userTwo);

// console.log(boundedFn());

// INSTANCE METHOD - Inheritance
//  Object.create()

// Object -> shoe -> magicShoe
// Object -> magicShoe

// let shoe = {
//   size: 10,
// };

// let magicShoe = Object.create(shoe);

// magicShoe.construction = "slipper";

// console.log(magicShoe);
// console.log(magicShoe.size); // 10

// console.log(shoe.isPrototypeOf(magicShoe));
// console.log(magicShoe.isPrototypeOf(shoe));

// console.log(Object.prototype.isPrototypeOf(shoe));
// console.log(Object.prototype.isPrototypeOf(magicShoe));

// console.log(magicShoe.hasOwnProperty("size"));
// console.log(shoe.hasOwnProperty("size"));

// magicShoe.size = 12;

// console.log(magicShoe.size); // 12
// console.log(shoe.size); // 10

let a = {
  // xixix0987
  name: "A",
};

let b = {
  // ixiixi9871
  name: "A",
};

console.log(a == b); // false

let c = a; // xixix0987

console.log(c === a); // true

c.name = "C";

console.log(a.name); // "C"
