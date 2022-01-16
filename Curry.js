var curry = function (fn) {
    return storeParams(fn, fn.length, [])
}

var storeParams = function (fn, length, args) {
    return function (...newArgs) {
        var params = [...args, ...newArgs]
        if (params.length >= length) {
            fn(...params)
        } else {
            return storeParams(fn, length, params)
        }
    }
}

var sum = function (a, b, c, d) {
    console.log(a + b + c + d)
}

var func = curry(sum)
console.log(func(1, 2, 3, 4))
console.log(func(1, 2)(3, 4))
console.log(func(1, 2, 3)(4))
console.log(func(1)(2)(3)(4))