const fs = require('fs');

//callback version
// function getContent(fileName, resolve, reject) {
//     fs.readFile(fileName, "utf-8", (err, data) => {
//         err ? reject(err) : resolve(data);
//     });
// }

//promise version
function getContent(fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, "utf-8", (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}
module.exports = getContent;