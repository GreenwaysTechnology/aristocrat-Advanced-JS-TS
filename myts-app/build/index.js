function add(a, b) {
    return a + b;
}
console.log(add("Hello ", "Subramanian")); // returns "Hello Subramanian" 
console.log(add(10, 20)); // returns 30 
var MathApi = /** @class */ (function () {
    function MathApi() {
    }
    MathApi.prototype.add = function (a, b) {
        return a + b;
    };
    return MathApi;
}());
var math = new MathApi();
console.log(math.add("Hello ", "Ram")); // returns "Hello Subramanian" 
console.log(math.add(10, 30)); // returns 30 
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.add = function (a, b) {
        return a + b;
    };
    return Utility;
}());
console.log(Utility.add("Hello ", "Ram")); // returns "Hello Subramanian" 
console.log(Utility.add(10, 30)); // returns 30 
