
{/**

In JavaScript, modules are a way to organize code into separate files, making it easier to manage and maintain larger projects. 
Modules allow you to encapsulate related functionality, variables, and classes, and then import and export them as needed between files.

JavaScript modules can be written in two main formats:

1.ES6 Modules (ESM): This is the modern standard for JavaScript modules, defined in ECMAScript 2015 (ES6). 
ES6 modules use import and export statements to control the scope of variables and functions. 
They provide a clean and efficient way to structure code


*/}



// 1 //
// this new/modren way of importing the function from the  main.js file
import { add } from "./math";
console.log(add(2, 3)); // Output: 5



{/**

2.CommonJS Modules: CommonJS is a module system used in Node.
js and other environments. Unlike ES6 modules, CommonJS modules use require() to import modules and module.
exports or exports to export them

*/}

// 2 //
// this on way of importing the function from the  main.js file
var math = require('./math.js');
console.log(math.add(2, 3)); // Output: 5

