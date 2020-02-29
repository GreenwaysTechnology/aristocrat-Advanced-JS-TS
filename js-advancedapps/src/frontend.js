const getContent = require('./backend');

//callback version
function fetch() {
    getContent('./src/hello.txt', err => console.log(err), res => console.log(res))
}

//promise version
// function fetch() {
//     getContent('./src/hello.txt')
//         .then(console.log)
//         .catch(console.log)
//         .finally(_ => console.log('file operation done'))
// }

//async and await
async function fetch() {
    const res = await getContent('./src/hello.txt')
    console.log(res);
}

fetch()
