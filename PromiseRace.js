var promiseRace = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            if (isPromise(promises[i])) {
                promises[i].then(data => {
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            } else {
                resolve(promises[i])
            }
        }
    })
}
let promise1 = new Promise(function (resolve) {
    setTimeout(() => {
        resolve(1)
    }, 400)
});
let promise2 = new Promise(function (resolve) {
    setTimeout(() => {
        resolve(2)
    }, 300)
});
let promise3 = new Promise(function (resolve) {
    setTimeout(() => {
        resolve(3)
    }, 500)
});
promiseRace([promise1, promise2, promise3]).then(data => console.log(data)).catch(err => console.log(err))
