//callback hell: callback chaining: the out put of one callback is
// input to another callback and so on...

const getUser = (resolve, reject) => {
    //biz logic
    let fakeUser = {
        name: 'admin',
        password: 'admin'
    }
    if (fakeUser) {
        setTimeout(() => {
            resolve(fakeUser);
        }, 1000);
    } else {
        setTimeout(() => {
            reject({ err: 'User not Found' })
        }, 1000);
    }

}

const login = (user, resolve, reject) => {
    if (user.name === 'admin' && user.password === 'admin') {
        setTimeout(() => {
            resolve({ message: 'login successfull' });
        }, 1000);
    } else {
        setTimeout(() => {
            reject({ err: 'login failed' })
        }, 1000);
    }
}

const isGuest = (user,resolve,reject)=>{
    //fill
}

console.log('start')
getUser(fakeUser => {
    login(fakeUser, status => console.log(status), err => console.log(err))
}, () => console.log(err));
console.log('going on')

