// Arrow Function : short and clean syntax for writing one liner functions
// - 'this' keyword not available
// - 'arguments' keyword not available
// - Can't call whith 'new' keyword

// const Person = (email, age) => {
//   this.email = email;
//   this.age = age;
// };

// const john = new Person("john@test", 32);

// const demoFn = () => console.log(arguments);

// function demoFn() {
//   console.log(arguments);
// }

// demoFn("test@test", 32, true);

// const demoFn = () => console.log(this);
// demoFn();

// const sum = (n1, n2) => n1 + n2;

// Function Expression
// const sum = function (n1, n2) {
//     return n1 + n2;
// }

// DESTRUCTURING : unpacking the collection

// let friends = ["Monica", "Ross", "Rachel"];

// let [, , f3, f4] = friends;

// console.log(f3);

// let resource1 = {
//   name: "Server One",
//   serverLocation: "Pune",
// };

// let resource2 = {
//   name: "Server Two",
//   serverLocation: "Mumbai",
// };

// let { name: r1_name, serverLocation: r1_location } = resource1;
// let { name: r2_name, serverLocation: r2_location } = resource2;

// console.log(r1_name, r1_location);
// console.log(r2_name, r2_location);

let user = {
  name: "John Doe",
  address: {
    city: "Pune",
    street: "201 Main Road, Hinjewadi",
  },
  friends: ["Jenny", "Jack"],
};

// let {
//   name,
//   address: { city, street },
//   friends: [fr1, fr2],
// } = user;

// // address.city = "Bengaluru";

// city = "Hyderabad";

// console.log(user.address); // ?

// console.log(name, city, street, fr1, fr2);

// let employees = [
//   { email: "john@test", age: 32 },
//   { email: "jenny@test", age: 33 },
//   { email: "jack@test", age: 28 },
// ];

// let [{ email: e1, age: a1 }, { email: e2, age: a2 }, { email: e3, age: a3 }] =
//   employees;

// e1 = "new@test";

// console.log(employees);

// let a = 10,
//   b = 20;

// [b, a] = [a, b];

// console.log(a, b);

// REST OPERATOR (...)
// - Creates collection from inividual arguments
// - Available in function declaration as last argument

// function demoRest(label, ...args) {
//   console.log(args[0]);
// }

// demoRest("test@test")
// demoRest("test@test", 32)
// demoRest("test@test", 32, true);

// SPREAD OPERATOR (...)
// - Spreads the collection into individual elements
// - Always appear with a collection

// let marks = [99, 98, 94];

// let finalMarks = [92, 91, 84];

// const result = [...marks, ...finalMarks];

// console.log(result);

// let state = {
//   counter: 0,
//   result: [],
// };

// let newState = {
//   ...state,
//   counter: 1,
// };

// console.log(newState);

// const createdState = Object.assign({}, state, { counter: 101 });

// console.log(createdState);

// MAP : STORES DATA IN KEY/VALUE FORMAT
// - Any datatype can be supplied as property name
// - Map is iterable, Objects are not
// - Common built-in operations

// let userOne = { id: "u001" };

// const map = new Map();

// map.set("name", "John Doe");

// map.set(userOne, "john@test.com");

// map.set(true, "Boolean");
// map.set(101, "Number");

// console.log(map.get(userOne));

// console.log(map.has("notexist"));

// console.log(map.size);

// for (let [key, value] of map.entries()) {
//   console.log(`${key} - ${value}`);
// }

// for (let val of map.values()) {
//   console.log(val);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

// SET : STORES ONLY UNIQUE VALUES

// const set = new Set();
// let userTwo = { id: "u002" };

// set.add("John");
// set.add("Jenny");
// set.add("Jack");
// set.add("Jack");
// set.add("Jill");
// set.add("Jill");
// set.add("James");
// set.add(userTwo);
// set.add(userTwo);

// console.log(set.size);

// for (let val of set.values()) {
//   console.log(val);
// }

// CLASS

// class Course {
//   #id;
//   #author;

//   static #numberOfCourses = 0;

//   constructor(id, name, duration) {
//     this.#id = id;
//     this.name = name;
//     this.duration = duration;
//     Course.#numberOfCourses += 1;
//   }

//   get author() {
//     return this.#author;
//   }

//   set author(value) {
//     this.#author = value;
//   }

//   static getTotalCourses() {
//     return Course.#numberOfCourses;
//   }

//   #getid() {
//     return this.#id;
//   }

//   getDetails() {
//     return `
// Course ID - ${this.#getid()}
// Course Name - ${this.name}
// Course Duration - ${this.duration}
//         `;
//   }
// }

// let react = new Course("C001", "React 101", 40);
// console.log(react.getDetails());
// react.author = "John Doe";
// console.log(react.author);

// let angular = new Course("C002", "Angular", 60);
// console.log(angular.getDetails());
// angular.author = "James";

// console.log("Courses Enrolled : ", Course.getTotalCourses());

// CLASS - INHERITANCE

// class Person {
//   #name;
//   constructor(name) {
//     this.#name = name;
//   }

//   getDetails() {
//     return this.#name;
//   }
// }

// class Student extends Person {
//   #id;
//   constructor(id, name, course) {
//     super(name);
//     this.#id = id;
//     this.course = course;
//   }

//   getDetails() {
//     return `
// Student ID : ${this.#id}
// Student Name : ${super.getDetails()}
// Course : ${this.course}
//         `;
//   }
// }

// let john = new Student("S001", "John Doe", "React");

// console.log(john.getDetails());

// function demoFn(arr = []) {
//   if (arr.length > 2) {
//     console.log("Greater than two");
//   }
// }

// demoFn();
// demoFn([1, 2, 3]);

// XMLHttpRequest (XHR)
// https://jsonplaceholder.typicode.com/posts

window.onload = function () {
  const btnGetPosts = document.getElementById("btnGetPosts");

  const listContainer = document.getElementById("listContainer");

  function getPosts(method, url, cb) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const posts = JSON.parse(xhr.response);
        cb(null, posts);
      }
    };

    xhr.open(method, url);

    xhr.send();
  }

  btnGetPosts.addEventListener("click", function () {
    getPosts(
      "GET",
      "https://jsonplaceholder.typicode.com/posts",
      function (err, data) {
        if (err) {
          console.error(err);
          return;
        }
        data.forEach((post) => {
          const liElement = document.createElement("li");

          liElement.innerHTML = `
                  <p>${post.title}</p>
                  `;
          listContainer.appendChild(liElement);
        });
      }
    );
  });
};
