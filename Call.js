Function.prototype.myCall = function (context) {
    context = (context === undefined || context === null) ? window : context;
    var args = [...arguments].slice(1)
    context.func = this;
    var result = context.func(...args)
    delete context.func
    return result
}

var obj = {
    a: 1,
}
var printObj = function (b, c) {
    console.log(`a=${this.a},b=${b},c=${c}`)
}

printObj.call(obj, 2, 3)