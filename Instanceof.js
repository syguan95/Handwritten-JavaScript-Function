var myIntanceOf = function (left, right) {
    if (typeof left !== "object" || left === null) {
        return false
    }
    var leftProto = left.__proto__;
    var rightProto = right.prototype;
    while (1) {
        if (leftProto === null) {
            return false
        }
        if (leftProto === rightProto) {
            return true
        }
        leftProto = leftProto.__proto__
    }
}

var SuperFunc = function () {

}

var SubFunc = function () {

}
SubFunc.prototype = new SuperFunc()

var obj = new SubFunc()
console.log(myIntanceOf(obj, SubFunc))
console.log(myIntanceOf(obj, SuperFunc))
console.log(myIntanceOf(obj, Object))