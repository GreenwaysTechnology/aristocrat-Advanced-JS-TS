//function literals : functional style programming

let hai = function (name) {
  //  console.log(`Name ${name}`);
  return `Name ${name}`;
};
console.log(hai('subramanaian'));

//arrow function
let hello = name => {
  console.log(`Hello ${name}`)
}
hello('Ram');
//////////////////////////////////////////////////////////////////////////////////

//passing function as parameter to another function

let sayHello = function (greet) {
  greet()
}

sayHello(function () {
  console.log('Hello')
});

let mygreet = function () {
  console.log('mygreet')
}
sayHello(mygreet)

let stockValue = produce => {
  produce();
}
stockValue(() => console.log('stock value function'))