Function.prototype.myBind = function (context) {
    context = context || window
    var that = this
    var args1 = Array.prototype.slice.call(arguments, 1)
    var returnFn = function () {
        var args2 = Array.prototype.slice.call(arguments)
        return that.apply(this instanceof that ? this : context, args1.concat(args2))
    }
    var temp = function () { }
    temp.prototype = this.prototype
    returnFn.prototype = new temp()
    return returnFn
}