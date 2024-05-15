
//Deffination of Destructuring :- to extract values from arrays and objects into variables using concise syntax is called Destructuring


{/************ Array Destructuring **************/}

const numbers = [1, 2, 3, 4, 5];

// Traditional way
// const first = numbers[0];
// const second = numbers[1];

// Using array destructuring
const [first, second] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2



{/************ object Destructuring **************/}

const person = {
    name:'naveen',
    age:30,
    country:'USA'
}

// Traditional way
// const name = person.name;
// const age = person.age;
// const country = person.country;
// console.log(name, age, country)



//Using object destructuring  
const {name, age, country} = person

console.log(name, age, country) // naveen 30 USA






//************ Combined Example for destructuring of array and object  **************/

const data = {
    orders: [1, 2, 3, 4, 5],
    persondetails: {
      lastname: 'Alice',
      presentage: 25
    }
  };
  
  const { orders, persondetails } = data;
  const [firstvalue, secondvalue] = orders; // extracted from an array
  const { lastname, presentage } = persondetails;// extracted from an object


  console.log(firstvalue, secondvalue);// extracted from an array
  console.log(lastname, lastname);// extracted from an object






































