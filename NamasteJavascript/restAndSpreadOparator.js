//-------------- Spread Oparator -------------------------//

// 1.  can Combine two or more arrays and objects using (...) oparator 
const arr1 = [1, 2, 3, 4, 5, 5];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [...arr1, ...arr2];
console.log(arr3, 'two arrays merged using spread oprator');

const obj1 = { a: 1, b: 2 };
const obj2 = { d: 3, c: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3, 'two objects mereged using spread oparator');


// 2. Paassing arguments to a function.  we can use the spread operator to unpack an array of values into function parameters.

const myFunc = (a, b, c, ...arr) => { // this is rest oparator
    console.log(a , b , c,'a b c are upacked from an array using spread oparator');
    console.log(arr,'packked all elements into an array using rest oparator');
    
}

const arr4 =[1,2,3,4,5,6];
myFunc(...arr4); // this is spread oparator unpacked the valuse of arr4



// 3. Copying Arrays unsing spread oparator 

const originalArr = [1,2,3,4,5];

const copy = [...originalArr] // simply copied all values of original array to copy array using spread oparator 

console.log(copy,'copied all values of original array unpacked');


















//-------------- rest Oparator -------------------------//

// geeting all numbers as arguments individually and printing them in console 
const sum1 = (num1, num2, num3, num4, num5, num6) => {
    console.log(num1, num2, num3, num4, num5, num6, 'geeting all numbers as arguments individually and printing them');
}

sum1(8, 1, 10, 14, 5, 7); // 8 1 10 14 5 7

// 1 //
//restOparator converts the individual arguments into an array.
const sum2 = (...nums) => {
    console.log(nums, 'using rest oparator geeting all numbers as an array');
}

sum2(8, 1, 10, 14, 5, 7); // [8 1 10 14 5 7]

// 2 //
// getting first two arguments individually and converting them into as an array 
const sum3 = (num1, num2, ...nums) => {
    console.log(num1, num2, nums, 'using rest oparator geeting all numbers as an array');
    let count = nums.reduce((acc, curr, i, arr) => {
        return acc + curr;
    });
    console.log(count, 'return Total num usning rest oparator');
};

sum3(8, 1, 10, 14, 5, 7);









const handleData = async () => {
    await fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json) => console.log(json));
    
  };
  handleData()









