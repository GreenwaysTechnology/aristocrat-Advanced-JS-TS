//link files
//let result = require('./mylib')
const { name, sayGreet, addr } = require('./mylib')
let Employee = require('./Employee')

//console.log(result.name,result.sayGreet(),result.addr.city);
console.log(name,sayGreet(),addr.city);
let emp = new Employee();