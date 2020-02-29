
//Promise

function getStock() {
    return Promise.resolve(10); // returns Promise Object
}

function getError() {
    return Promise.reject({ error: 'somethin went wrong' })
}

function auth() {
    let user = 'admin';
    if (user === 'admin') {
        return Promise.resolve(user)
    }
    return Promise.reject('auth failed')
}
//constructor pattern:
function getMyApi() {
    return new Promise((resolve, reject) => {
        let fakeapi = 'foo';
        if (fakeapi) {
            setTimeout(() => {
                resolve(fakeapi)
            }, 1000);
        } else {
            setTimeout(() => {
                reject('something went wrong in getMyApi')
            }, 1000);
        }
    })
}



console.log('start')
let promise = getStock();
promise.then(res => console.log(res))
let promise2 = getError();
promise2.catch(err => console.log(err));

//builder pattern/chan/Fluent api
auth().then(res => console.log(res)).catch(err => console.log(err)).finally(() => console.log('done'))

getMyApi().then(res => console.log(res)).catch(err => console.log(err)).finally(() => console.log('done'))

console.log('end')