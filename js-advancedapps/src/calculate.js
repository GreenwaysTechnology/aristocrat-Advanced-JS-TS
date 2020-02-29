// function calculate(a, b) {
//     return add(a, b);
// }
// MyApp.calculate = function (a, b) {
//     return MyApp.add(a, b);
// };
define(['./add'], function (add) {
    return function calculate(a, b) {
        return add(a, b);
    }
})