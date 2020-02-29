"use strict"

//basic use of nested function inisde object

// const training= {
//     teach: function(){
//         function teachJS(){
//             return this;
//         }
//         //console.log(teachJS.call(training));
//         //console.log(teachJS.call(this));
//     }
// }
// training.teach();

// const training = {
//     firstName: 'Subramanian',
//     teach: function () {
//         // console.log(this.firstName)
//         //learn function
//         let self = this;
//         return function () {
//             //console.log(`Trainer name ${this.firstName}`)
//            // console.log(`Trainer name ${self.firstName}`)
//            console.log(`Trainer name ${this.firstName}`)
//         }
//     }
// }
// let learn = training.teach();
// learn.call(training)


const sayHello = () => {
    return this;
}
console.log(sayHello());

const training = {
    firstName: 'Subramanian',
    teach: function () {
        return () => {
            console.log(`Trainer name ${this.firstName}`)
        }
    }
}
let learn = training.teach();
//learn.call(training)
learn();








