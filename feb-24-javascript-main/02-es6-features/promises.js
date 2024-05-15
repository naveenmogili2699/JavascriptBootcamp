// Promise

// Create Promise

// const buildPromise = () => {
//   const promise = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve({ message: "SUCCESS" }), 1500);
//     setTimeout(() => reject(new Error("Something went wrong")), 1000);
//   });
//   return promise;
// };

// Consume Promise
// - then()...catch()
// - Async...await - Simple and more readable

// const consumePromise = async () => {
//   try {
//     console.log("Start");
//     const response = await buildPromise();
//     console.log("RESP : ", response);
//     const responseTwo = await buildPromise();
//     console.log("RESP 2 : ", responseTwo);
//     console.log("End");
//   } catch (err) {
//     console.error(err);
//   }
// };

// const consumePromise = () => {
//   console.log("Start");
//   buildPromise()
//     .then((response) => {
//       console.log("RESPONSE : ", response);
//       return response.message;
//     })
//     .then((message) => console.log("Second THEN Statement - ", message))
//     .catch((err) => console.error(err))
//     .finally(() => console.log("FINALLY"));
//   console.log("End");
// };

// consumePromise();

// PROMISE STATIC METHODS
// - resolve : immediately resolved
// - reject : immediately rejected
// - all : all or nothing
// - allSettled : all settled result -> fulfilled / rejected with reason
// - race : will output first settled promise, no matter it is rejected or succeed
// - any: will output first succussfully settled promise;

// console.log("Start");
// Promise.resolve({ message: "DONE" }).then(console.log);
// Promise.reject(new Error("Bad Creds")).catch(console.error);
// console.log("End");

function buildPromise(data, time) {
  return new Promise((resolve, reject) => {
    if (time === 1000) {
      return reject(new Error("1000ms time failed"));
    } else {
      setTimeout(() => resolve(data), time);
    }
  });
}

const p1 = buildPromise("Promise 1", 1000);
const p2 = buildPromise("Promise 2", 1500);
const p3 = buildPromise("Promise 3", 2000);

const promiseArray = [p1, p2, p3];

// Promise.all(promiseArray).then(console.log).catch(console.error);
// Promise.allSettled(promiseArray).then(console.log).catch(console.error);
Promise.race(promiseArray).then(console.log).catch(console.error);
// Promise.any(promiseArray).then(console.log).catch(console.error);
