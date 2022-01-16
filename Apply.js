Function.prototype.myApply = function (context) {
    context = (context === undefined || context === null) ? window : context;
    context.func = this;
    var result = arguments[1] ? context.func(...arguments[1]) : context.func()
    delete context.func
    return result
}

var obj = {
    a: 1,
}
var printObj = function (b, c) {
    console.log(`a=${this.a},b=${b},c=${c}`)
}

printObj.myApply(obj, [2, 3])