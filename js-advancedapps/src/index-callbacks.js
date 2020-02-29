//async implementation

function sayHello() {
    console.log('hello')
}
console.log('start')
setTimeout(() => console.log('i am delayed'), 1000)
sayHello();
console.log('end')
////////////////////////////////////////////////////////////////////////////////

function sayGreeter(cb) {
    setTimeout(cb, 3000);
}
sayGreeter(function () {
    console.log('greet will be done after 3000ms!')
})

function getValue(cb) {
    setTimeout(cb, 0);
}
getValue(() => console.log('GetValue'));

function getStock(cb) {
    setTimeout(() => {
        let stockvalue = cb()
        console.log(stockvalue * 100);
    }, 1500);
}
getStock(() => 1000);
