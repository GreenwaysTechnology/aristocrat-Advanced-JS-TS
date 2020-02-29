//static scope

var a = 10;
var b = 20;

function foo() {
    var a = 100;
    console.log(`foo ${a}`);
    function bar() {
        var a = 200;
        console.log(`bar ${a}`);
        console.log(`b ${b}`);
    }
    bar();
}
foo();