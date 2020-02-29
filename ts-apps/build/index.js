function add(a, b) {
    return a + b;
}
console.log(add("Hello ", "Steve")); // returns "Hello Steve" 
console.log(add(10, 20)); // returns 30 
var Sum = /** @class */ (function () {
    function Sum() {
    }
    //the combined implementation
    Sum.prototype.sum = function (x, y, z) {
        if (typeof z == 'undefined') {
            return x + y;
        }
        else {
            return x + y + z;
        }
    };
    return Sum;
}());
var sumObj = new Sum();
var n = sumObj.sum(1, 2); //calling first overloaded function
console.log(n);
n = sumObj.sum(1, 2, 3); //calling second overloaded function
console.log(n);
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.divide = function (x, y) {
        if (typeof x === 'number') {
            return x / y;
        }
        else if (typeof x == 'string') {
            return [x.substring(0, y), x.substring(y)];
        }
    };
    return Util;
}());
var r = Util.divide(6, 2);
console.log(r);
var s = Util.divide("football", 4);
console.log(s);
var Foo = /** @class */ (function () {
    function Foo() {
    }
    // myMethod(a: any, b?: string) {
    //     alert(a.toString());
    // }
    //Using Union operator
    Foo.prototype.myMethod = function (a, b) {
        if (a) {
            console.log("a = " + a);
        }
        if (a && b) {
            console.log("a = " + a + "  b= " + b);
        }
    };
    return Foo;
}());
var f = new Foo();
f.myMethod('hello foo');
f.myMethod(1000);
f.myMethod(89, 'hello foo again');
