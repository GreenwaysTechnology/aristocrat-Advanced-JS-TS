const EventEmitter = require('events');

//producer + subscriber
const events = new EventEmitter();

//Subscribers
events.on('hello', function (data) {
    console.log(`Hello ${data}`);
});

//Producer
events.emit('hello', 'Subramanian')
events.emit('hello', 'Ram')

////////////////////////////////////////////////////////////////////////////////

//Async event driven
class Inventory extends EventEmitter {
    constructor() {
        super();
        this.on('sale', function (product) {
            setImmediate(() => {
                console.log('this happens asynchronously',product);
            });
        });
    }
    //biz apis
    sale(product) {
        //
        this.emit('sale', product)
    }
}
const inv = new Inventory();
for (let i = 0; i < 10; i++) {
    inv.sale({ id: i, name: `Product-${i}` });

}
