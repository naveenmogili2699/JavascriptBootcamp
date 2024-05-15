
// remove duplicates form an array using filter method 
const array2 = [1, 2, 3, 4, 1, 2, 3];
const filteredArr = array2.filter((item, i, arr) => {
    return array2.indexOf(item) === i;
});
console.log(filteredArr, 'filteredArr');





//remove duplicate from an array Using spread oparator Set method
let arr1 = ["apple", "mango", "apple", "orange", "mango", "mango"];

const result = [...new Set(arr1)];

console.log(result, 'resultresult');





//remove duplicate from an array Using forEach loop method
let arr2 = ["apple", "mango", "apple", "orange", "mango", "mango"];
let newArr = [];
arr2.forEach((item, i, arr) => {
    if (arr.indexOf(item) === i) {
        newArr.push(item)
    }
})
console.log(newArr, 'newArrnewArr');


//remove duplicate from an array Using forEach loop method






// reverse this array using for loop
const array1 = [1, 2, 3, 4, 10, 20, 30];

for (var i = array1.length; i >= 0; i--) {
    console.log(array1[i]);
};

/// Find the unique authors from this array 
const data = [
    { tweet: { id: "101", author: { id: "1", name: "Michael" } } },
    { tweet: { id: "102", author: { id: "2", name: "Gob" } } },
    { tweet: { id: "103", author: { id: "1", name: "Michael" } } },
    { tweet: { id: "104", author: { id: "3", name: "Buster" } } },
    { tweet: { id: "105", author: { id: "2", name: "Gob" } } },
];

const newData = data.reduce((acc, curr, i, arr) => {
    const authorExist = arr.find((item) => item.tweet.author.name === curr.tweet.author.name);
    console.log(authorExist, 'authorExist');
    if (!authorExist) {
        acc.push(curr);
    }
    return acc
})

console.log(newData, 'authors')















