function main() {
    // var result = calculate(10, 10);
    // console.log("Add", result)
    //var result = MyApp.calculate(10, 10);
    //console.log("Add", result)
    //main.js
    require(["./calculate"], function (calculate) {
        var result = calculate(10, 10);
        console.log(result);
    });
}
main()