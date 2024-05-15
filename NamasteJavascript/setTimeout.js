
// Print 1 at 1 second, 2 at 2 second, 3 at 3 second, 4 at 4 second so on using var and let?

for (var i = 0; i <= 5; i++) { // var - is raplacing the variable same memory wtih new value. that is why it is pringitng (6) evry time. the loop has been finished before setTimeout
    setTimeout(() => {
        console.log(i); // 6 times 6
    }, i * 1000);
}



// Print 1 at 1 second, 2 at 2 second, 3 at 3 second, 4 at 4 second so on using let keyword?
for (let i = 0; i <= 5; i++) { // let - is a blocke scoped variable so that it is creating new copy of the variable evry time creating new memory. that is why it is pringitng (012345)
    setTimeout(() => {
        console.log(i); // 0 1 2 3 4 5
    }, i * 1000);
}



// Print 1 at 1 second, 2 at 2 second, 3 at 3 second, 4 at 4 second so on using var keyword?
for (var i = 0; i <= 5; i++) {
    function close(x) { // With var keyword also we can do this with closure like this. Closure will create seperate copy of the set time out. 
        setTimeout(() => {
            console.log(x) // 0 1 2 3 4 5
        }, x * 1000)
    }
    close(i) // closure will create every time a new copy of i variable that is why it is pringting 0123456
}



