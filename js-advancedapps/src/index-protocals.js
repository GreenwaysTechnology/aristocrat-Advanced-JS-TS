


function Person(name = 'default') {
    console.log('Person is called')
    this.name = name;
}
Person.prototype.sayGreet = function () {
    return 'greet'
}
Person.prototype.salary = 8000;

function Employee(name) {
    Person.call(this, name); // super
    console.log('Employee is called')
}
//Linking Objects : establishing inheritance:
Employee.prototype = Object.create(Person.prototype);
console.log(Employee.prototype);
