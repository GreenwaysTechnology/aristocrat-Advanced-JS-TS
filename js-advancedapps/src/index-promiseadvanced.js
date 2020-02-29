

function getAccumlator() {
    return Promise.resolve(1)
}

getAccumlator()
    .then(value => Promise.resolve(value))
    .then(value => Promise.resolve(value * 2))
    .then(value => Promise.resolve(value * 2))
    .then(value => Promise.resolve(value * 2))
    .then(value => console.log(value))


Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(r => console.log(r)); // 1,2,3 when promises are ready: each promise contributes an array membe


Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log); // 1