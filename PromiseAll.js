var promiseAll = function (promises) {
    return new Promise((resolve, reject) => {
        var result = new Array(promises.length);
        var count = 0;
        for (let i = 0; i < promises.length; i++) {
            if (isPromise(promises[i])) {
                promises[i].then(data => {
                    result[i] = data
                    count++
                    if (count === promises.length) {
                        resolve(result)
                    }
                }).catch(err => {
                    reject(err)
                })
            } else {
                result[i] = promises[i]
                count++
                if (count === promises.length) {
                    resolve(result)
                }
            }
        }
    })
}

var isPromise = function (item) {
    return !!item && typeof item === "object" && typeof item.then === "function";
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
promiseAll([promise1, promise2, 100, promise3]).then(data => console.log(data)).catch(err => console.log(err))