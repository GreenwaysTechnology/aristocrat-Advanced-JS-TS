//di

class Product {
     constructor(){
         console.log('Product constructor is called')
     }
}
class Order {
    //di
    constructor(product: Product) {  
        console.log(product);
     }
     placeOrder(){

     }
}

class Dog{
    constructor(){}
    bark(){

    }
}

let product = new Product();
let order=new Order(product)
let order1 = new Order(new Dog())
