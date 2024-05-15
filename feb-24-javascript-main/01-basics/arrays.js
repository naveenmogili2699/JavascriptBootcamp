// Arrays - collection of homogeneous elements

let friends = ["Monica", "Ross", "Rachel"];

// let fruits = new Array("apple", "oranges", "guava");

// console.log(fruits.length);

// let marks = new Array(99);

// console.log(marks.length); //?

// let arr = [
//   "John",
//   32,
//   true,
//   function () {
//     console.log("Function");
//   },
//   new Date("Jan 20, 2024"),
// ];

// console.log(arr["hi"]); // ?
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]());

// let users = [
//   // xixix0001
//   {
//     name: "John",
//     address: {
//       city: "Pune",
//       street: "201 Main Road, Wakad",
//     },
//   },
//   //   xixix0002
//   {
//     name: "Jenny",
//     address: {
//       city: "Mumbai",
//       street: "Some street, Malad",
//     },
//   },
// ];
// let [
//   userOne, // xixix0001
//   userTwo, // xixix0002
// ] = users;

// userOne.name = "Jack";

// console.log(users[0]);

// console.log(JSON.stringify(users));

// Deep Copy :
// JSON Method -> Date, function
// let deepCopy = JSON.parse(JSON.stringify(users));

// console.log(deepCopy);

// deepCopy[1].name = "Mary Public";
// deepCopy[1].address.city = "Bengaluru";

// console.log(users[1]); // ?

// let user = {
//   name: "John",
//   dob: new Date("Jan 01, 1986"),
//   sayHello: function () {
//     return "Hello";
//   },
// };

// let anotherUser = user;     // shallow copy

// console.log(user);

// let secondUser = JSON.stringify(user);

// const deepCopyUser = JSON.parse(JSON.stringify(user));

// console.log(deepCopyUser);

let marks = [95, 94, 97, 92, 91, 84];

console.log(marks);

// marks.push(99);

// marks.pop();

// marks.unshift(90);

// marks.shift();

// let deletedElements = marks.splice(1, 2);
// console.log(deletedElements);

// marks.reverse();

// marks.fill(0, 3, 5);

// marks.sort(function (a, b) {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// let transformedArray = marks.map(function (value) {
//   return 100 - value;
// });

// let filteredArray = marks.filter(function (value) {
//   return value % 2 == 0;
// });

// let portion = marks.slice(2, 5);

// let concatenatedArray = marks.concat(99, 98, 97);

// console.log(concatenatedArray);

// let position = marks.indexOf(97);
// console.log(position);

// let position = marks.findIndex(function (value) {
//   return value > 94;
// });

// console.log(position);

// let element = marks.find(function (value) {
//   return value === 91;
// });

// console.log(element);

// let isIncluded = marks.includes(110);
// console.log(isIncluded);

// let isMatched = marks.some(function (value) {
//   return value > 96;
// });

// let isMatched = marks.every(function (value) {
//   return value > 80;
// });
// console.log(isMatched);

// let joinedArray = marks.join(" ");
// console.log(joinedArray);

// let reducedValue = marks.reduce(function (prevVal, currVal) {
//   console.log(prevVal, currVal);
//   return (prevVal += currVal);
// }, 0);

// console.log(reducedValue);

// let iteratedValue = marks.forEach(function (value) {
//   console.log(value * 2);
//   return value * 2;
// });

// console.log(iteratedValue);

const employess = [
  { id: "e001", name: "John", salary: 1000, age: 32 },
  { id: "e002", name: "Jenny", salary: 1200, age: 37 },
  { id: "e003", name: "Jack", salary: 1900, age: 33 },
  { id: "e004", name: "Jill", salary: 800, age: 23 },
];

// - Total Salary of all employess
let totalSalary = employess.reduce(function (prev, curr) {
  return (prev += curr.salary);
}, 0);

console.log("Total Salary : ", totalSalary);

// - Average age of employees

let totalAge = employess.reduce(function (prev, curr) {
  return (prev += curr.age);
}, 0);

let averageAge = totalAge / employess.length;

console.log("Average Age : ", averageAge);

// - Remaining year in retirements (60)

let transformedArray = employess.map(function (employee) {
  return {
    name: employee.name,
    age: employee.age,
    remainingYears: 60 - employee.age,
  };
});

console.log(transformedArray);

// - Remove the employee having the ID - e003

let position = employess.findIndex(function (employee) {
  return employee.id === "e003";
});
employess.splice(position, 1);

console.log(employess);

// - Display below format string for each employee-
// "Mr/s. {name} is having {years} in his/her retirement";
transformedArray.forEach(function (employee) {
  console.log(
    `Mr/s. ${employee.name} is having ${employee.remainingYears} years in his/her retirement.`
  );
});
