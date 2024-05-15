{/***
* What is async ?
* What is await ?
* How async await works behind the senes?
* Examples of using aync/await?
* Error Handling
* Interviews
* Async await Vs .then/ .catch
* 

*/}

// * What is async ?
// --> async is a keyword that is used before a function to create a async function.
// --> async always returns a promise

// * What is await ?
// --> Await can only be used inside async function
// --> 


// * async await basically we use to handle promisess



const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved vale!!");
    }, 5000);
}, 5000);


const handlePromise = async () => {
    console.log("Hello World");
    const val = await p1;// it will load frist but output will not come  and also JS engine doesen't wait for it the call stack will be empty.
    console.log("Namaste JavaScript");
    console.log(val);
    const val2 = await p2; // await keyword will stop for the P1 also. after loading the p2 promise it will start from line num 37. then the output will come for P1 and p2 also 
    console.log("Namaste JavaScript 2");
    console.log(val2);
};

handlePromise();



//-------------------- async and await with API call ----------------------------------//



// USE THIS LINK FOR THE FREE API ==> https://api.github.com/ 
// This is my github userId ==> naveenmogili2699
// example API ==> https://api.github.com/users/naveenmogili2699


const API_URL = "https://api.github.com/users/naveenmogili2699";

// -------- this is the new way of writing code best way to follow this -------//
const handleAPI_Promise = async () => {
    //Error hadling with try/catch block
    try {
        const data = await fetch(API_URL);
        const user = await data.json(); // await will wait for the response for a while 
        console.log(user);
    } catch (err) {
        console.log(err);
    }
}

handleAPI_Promise();






const handleAPI_PromiseErrorHandle = async () => {
    //Error hadling with .then/.catch block
    await fetch(API_URL).then((res) => {
        if (res.ok) {
            return res
        }
        //  throw new Error('Something went wrong'); // we can use throw new Error (' ');
        return Promise.reject(res); // we can use Promise.reject(' ');
    }).then(async (data) => {
        const jsonData = await data.json(); // await will wait for the response for a while 
        console.log(jsonData);
    }).catch((err) => {
        console.log(err);
    })
};

handleAPI_PromiseErrorHandle();



const data = async ()=>{
    try{
        // setTimeout(()=>{
        //     console.log('hello');
        // },1000);
       const response = await fetch("https://api.github.com/users/naveenmogili2699");
       const data = await response.json();
       console.log(data,'mydata');
    }catch(err){
        console.log(err);
    }
}

data ();








