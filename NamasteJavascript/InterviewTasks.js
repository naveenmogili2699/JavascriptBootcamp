



//--------- what is the result of these lines --------------------------------//
// console.log(array.at(null),'3');
// console.log(array.at(undefined),'2');
// console.log(array.at(NaN),'1');




//----------------------- print the multiples of 5 from a number ----------------------------------//

const findMultiples = (num) => {
    for (var i = 1; i <= num; i++) {
        if ((i % 5 === 0) || (i % 3 === 0) || (i % 3 === 0 && i % 5 === 0)) {
            console.log(i)
        }
    }
};

findMultiples(50);


// -------------- reverse a string --------------------//
let str = 'JavaScript'
let reverseStr = ''
for (let i = str.length - 1; i > 0; i--) {
    reverseStr += str[i]
}
console.log(reverseStr, '=====>string reversed')


// -------------- reverse an array without using array method --------------------//
const arr2 = [1, 2, 3, 4, 5, 9, 10, 14];

// without using array method 
const reverseArr2 = [];
for (let i = arr2.length - 1; i >= 0; i--) {
    reverseArr2.push(arr2[i]);
};
console.log(reverseArr2, 'reversed an array without using array method');
// using an array method reverse it
const reverseArr1 = arr2.reverse();
console.log(reverseArr1, 'reversed with using array method');







// // ---------------------- separate  odd and even number -------------------------//

// Example 1:-
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenNum = [];
// const oddNum = [];
// for (var i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 2 === 0) {
//         evenNum.push(arr1[i])  // 'evennumbers'
//     } else {
//         oddNum.push(arr1[i]) // 'oddnumbers'
//     }
// }

// console.log(evenNum, "// evennumbers ");
// console.log(oddNum, "// oddnumbers");


// Example 2:-
// function separateOddEven(numbers) {
//     let oddNumbers = [];
//     let evenNumbers = [];
    
//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//             evenNumbers.push(number);
//         } else {
//             oddNumbers.push(number);
//         }
//     });
    
//     return {
//         odd: oddNumbers,
//         even: evenNumbers
//     };
// }

// // Example usage:
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = separateOddEven(numbers);

// console.log("Odd numbers:", result.odd);
// console.log("Even numbers:", result.even);









// //---------- min and max values using JS array method -------------//

// const arryMathMethod = () => {
//     const arr = [10, 15, 63, 78, 85, 92];


// let numbers = Math.max(...arr)
// console.log(numbers, 'hello')

//     var min = Math.min.apply(null, arr.filter(Boolean));
//     var secondMin = Math.min.apply(null, arr.filter(n => n != min));
//     console.log(min, 'minimum value')
//     console.log(secondMin, 'secondMin value')


//     var max = Math.max.apply(null, arr.filter(Boolean));
//     var secondMax = Math.max.apply(null, arr.filter(n => n != max));
//     console.log(max, ' max value')
//     console.log(secondMax, 'secondMax value')
// }

// arryMathMethod()


// // find the larget number in array

// const arr1 = [91, 10, 15, 63, 78, 85, 92];

// const getLargestNumber = (arr) => {
//     let largestNumber = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largestNumber) {
//             largestNumber = arr[i]
//         }
//     }
//     return largestNumber
// }
// const result = getLargestNumber(arr1);

// console.log(result, 'this is the largest number');

// const getLargestNumber1 = (arr) => {
//     let largestNumber = [];
//     arr1.forEach((item) => {
//         if (item > largestNumber) {
//             largestNumber = item
//         }
//     })
//     console.log(largestNumber, 'largestNumber111');
// }
// getLargestNumber1(arr1)



// find the secondlarget number in array

const arry2 = [91, 10, 15, 63, 78, 85, 92];

const getsecondLargestNumber = (arry) => {
    let largestNumber = Infinity;
    let secondlargestNumber = Infinity;

    for (let i = 0; i < arry.length; i++) {
        if (arry[i] > largestNumber) {
            secondlargestNumber = largestNumber;
            largestNumber = arry[i]
        } else if (arry[i] > secondlargestNumber) {
            secondlargestNumber = arry[i]
        }
    }
    return secondlargestNumber
}

const secondresult = getsecondLargestNumber(arry2);

console.log(secondresult, 'this is the secondlargest number');






// // --------- find smallest number in this array -------------------//
// const arry3 = [91, 10, 15, 63, 78, 85, 92];

// const getSmallestNum = () => {
//     let samllestNum = arry3[0]
//     for (let i = 0; i <= arry3.length; i++) {
//         if (arry3[i] < samllestNum) {
//             samllestNum = arry3[i]
//         }
//     }
//     return samllestNum
// }

// const mySmallNum = getSmallestNum()
// console.log(mySmallNum, 'mySmallNum')








// //--------------- secondsmallest number ---------------------//


// // const arry4 = [91, 10, 15, 63, 78, 85, 92];
// const arry4 = [12, 35, 10, 35, 10, 34, 1, 90];

// const getSecondMin = (arr) => {
//     let smallestnum = arr[0];
//     let secondMin = arr[0];
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] < smallestnum) {
//             secondMin = smallestnum
//             smallestnum = arr[i]
//         } else if (arr[i] < secondMin) {
//             secondMin = arr[i]
//         }
//     }
//     return { secondMin, smallestnum }
// }

// const secondMin = getSecondMin(arry4)
// console.log('Min valu is ', secondMin.smallestnum)
// console.log('Second Min valu is ', secondMin.secondMin)









