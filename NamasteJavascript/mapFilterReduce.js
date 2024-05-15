

const arr = [5, 3, 2, 1, 8, 10];
//------------- Map method ------------------//

//Double - [10,6,4,2,16,20] returns array
const output1 = arr.map((item, i) => { return item * 2 });
console.log(output1);

// Triple - [15,9,6,3,24,30 ] return array
const output2 = arr.map((item, i) => { return item * 3 });
console.log(output2);

// get the binary code of this array
const output3 = arr.map((item, i) => { return item.toString(2) });
console.log(output3);


//------------- Filter method ------------------//

// [5,8,10]    returns array          
const result = arr.filter((item) => { return item > 3 });
console.log(result);


//------------- Reduce method ------------------//

// we can use rduce method to find total num of array 
let count1 = 0;
arr.reduce((acc, curr, i, arr) => {
    return count1 = acc + curr
});
console.log(count1, 'count1');


// find the max number form an array using reduce method
let maxValue = arr.reduce((max, curr, i, arr) => {
    if (max < curr) {
        max = curr;
    }
    return max;
}, 0)
console.log(maxValue, 'maxValue')

// we can use the for loop for the total num of an array 
let count4 = 0;
for (let i = 0; i < arr.length; i++) {
    count4 = count4 + arr[i];
}
console.log(count4, 'count4');




// we can use the map method for the total num of an array
let count3 = 0;
arr.map((item, i) => {
    count3 = count3 + item
});
console.log(count3, 'count3');


// for can use forEach loop for the total num of array
let count = 0;
arr.forEach(element => {
    count = count + element
});
console.log(count, 'count');





// *************************************************************************************  //

const users = [
    { firstName: 'akshay', lastName: 'saini', age: 28 },
    { firstName: 'donald', lastName: 'trump', age: 35 },
    { firstName: 'elon', lastName: 'musk', age: 80 },
    { firstName: 'dipika', lastName: 'padikone', age: 56 },
    { firstName: 'sujatha', lastName: 'Mogili', age: 28 },
    { firstName: 'Naveen', lastName: 'Mogili', age: 35 },
]


// -------list of fullNames using map method -------------//


//map method will return and array 
const fullname1 = users.map((item, i) => {
    return item.firstName + " " + item.lastName
})
console.log(fullname1, 'fullname1');


// forEach loop we need to push into an array 
const fullName2 = []
users.forEach((item, i, arr) => {
    fullName2.push(item.firstName + " " + item.lastName)
})
console.log(fullName2, 'fullname2');


// --------------------- using reducer method ------------------------//
//----->need to give the out put in object formate below like this 
//outPut : {28:2, 35:1, 80:1, 56:1}

const mydata = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1
    }
    return acc;
}, {})

console.log(mydata, 'accc');  // {28:2, 35:1, 80:1, 56:1}





//---------------------- filter and map Method chaining concept ---------------------------------------//

// filter people who's age is lessthan 30 from this array then show their perticular 30 below people first name 
const youngage = users.filter((item) => {
    return item.age < 30;
}).map((item, i) => { return item.firstName });

console.log(youngage, 'youngage') // [Akshay, sujatha]

const reuslt = users.reduce((acc, curr, i, arr) => {
    if (curr < 30) {
        return curr
    }
})

console.log(result, 'reduce bleow 30 age');













