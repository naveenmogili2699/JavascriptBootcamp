//************* Promise chaining ************//


// ------------ Example one ----------------//

const cart = ['shoes', 'pants', 'kurtas'];

const validateCart = () => {
    return true;
}

const createOrder = (cart) => {
    const pr = new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = '123456';
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000)
        }
    });
    return pr;
};


// Promise chaining form createOrder promis method
createOrder(cart).then((orderId) => { // create order funtion is a promise metehod. create order API will return a promise method 
    console.log(orderId)
    return orderId
}).catch((err) => {
    console.error(err.message)
}).then((orderId) => {  // to create order promise object we are attaching proceed to payment API as chaing 
    return proceedToPayment(orderId);
}).then((paymentInfo) => {
    console.log(paymentInfo)
}).catch((err) => {
    console.error(err.message)
}).then((orderId) => {
    console.log("No matter what happenes, I will definetely be called.")
});


const proceedToPayment = () => {
    const pr = new Promise((resolve, reject) => {
        resolve('payment successful');
    })
    return pr;
}


// ---------------------- Example Two ----------------------------------//

// ---> Q1. Create promise chaining with these promise methods {createOrder, proceedToPayment, showOrderSummary, updateWallet}

const cart2 = ['tamatos', 'fruites', 'sweets', 'drinks'];

const createOrder2 = (cart) => {
    const pr = new Promise((resolve, reject) => {
        if (!validateCart2(cart)) {
            const err = new Error('Create order failed');
            reject(err)
        } else {
            const orderId = 12345678
            resolve(orderId);
        }
    })
    return pr;
}

const validateCart2 = (cart) => {
    return true
}

const proceedToPayment2 = (orderId) => {

    const pr = new Promise((resolve, reject) => {
        if (true) {
            resolve('Payment successfull for this order');
        } else {
            const err = new Error('Pyament was not successfull')
            reject(err);
        }
    })
    return pr
}

const showOrderSummary = () => {
    const pr = new Promise((resolve, reject) => {
        if (true) {
            console.log('order summery is ready')
            resolve('order summery is ready')
        } else {
            const err = new Error('Failed to load order summery')
            reject(err)
        }
    })
    return pr
}

const updateWallet = () => {
    const pr = new Promise((resolve, reject) => {
        if (false) {
            console.log('Wallet updated')
            resolve('Wallet updated')
        } else {
            const err = new Error('Fail to update wallet balnce')
            reject(err);
        }
    })
    return pr
}

createOrder2(cart2).then((orderId) => {
    console.log(orderId)
    return orderId
}).then((orderId) => {
    return proceedToPayment2(orderId)
}).catch((err) => {
    console.error(err.message)
}).then((paymentinfo) => {
    console.log(paymentinfo)
    return showOrderSummary()
}).catch((err) => {
    console.error(err.message)
}).then((ordersummery) => {
    console.log(ordersummery)
    return updateWallet()
}).catch((err) => {
    console.error(err.message)
})






//------------------------- Promise.all, Promise.settled, Promise.race, Promise.any -----------------//

const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('P1 success'), 3000);
    setTimeout(() => reject('P1 Failed'), 3000);
});

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('P2 success'), 5000);
    setTimeout(() => reject('P2 Failed'), 5000);
});

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('P3 success'), 2000);
    setTimeout(() => reject('P3 Failed'), 2000);
});









{/* 
--> Promise.all anedi ye okka API fail ainaaaa aaa fail API error throw chsthundi. 
   =>outPut: P2 Failed ani console print chestuni 
--> ledante anni API lu success avvali appudu matrame success result vastundi.
 =>outPut:
[{status: 'fulfilled', value: 'P1 success'}
{status: 'fulfilled', value: 'P1 success'}
{status: 'fulfilled', value: 'P3 success'}]

*/}

Promise.all([p1, p2, p3]).then((res) => {
    console.log(res, 'Promis.all Printed')
}).catch((err) => {
    console.error(err);
})






{/* 
--> Promise.allSettled anedi fail aina, success ainaa anni API lu load ayyedaaaka wait chesi all API's result oka array lo petti print chestundi 
=> outPut all scceded
[{status: 'fulfilled', value: 'P1 success'}
{status: 'rejected', reason: 'P2 Failed'}  
{status: 'fulfilled', value: 'P3 success'}]

=> outPut P2 failed
[{status: 'fulfilled', value: 'P1 success'}
{status: 'rejected', reason: 'P2 Failed'}  // falied
{status: 'fulfilled', value: 'P3 success'}]

*/}

Promise.allSettled([p1, p2, p3]).then((res) => {
    console.log(res, 'allsettled')
}).catch((err) => {
    console.log(err);
});






{/*
 --> Promise.race edi takkuva time lo reaponse vaste ade print avutundi weather it is failed or success.
 --> 
*/}

Promise.race([p1, p2, p3]).then((res) => {
    console.log(res, 'race')
}).catch((err) => {
    console.log(err);
});







{/* 
 ---> Promise.any only succes kosam matrame wait chestundi Kaneesam oka API aina success aite success result print chestundi. 
 ---> okavela anni API lu errors vasthe ilaaa  AggregateError: All promises were rejected ani print chestundi  
*/}
Promise.any([p1, p2, p3]).then((res) => {
    console.log(res, 'any')
}).catch((err) => {
    console.log(err);
    console.log(err.errors); // To gett all the Errors in Array => [ "P1 Failed", "P2 Failed", "P3 Failed" ]
})






























