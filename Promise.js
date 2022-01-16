var MyPromise = function (func) {
    this.status = "pending"
    this.value = undefined
    this.error = undefined
    var self = this
    function resolved(val) {
        if (self.status === "pending") {
            self.status = "fullfilled"
            self.value = val
        }
    }
    function rejected(err) {
        if (self.status === "pending") {
            self.status = "rejected"
            self.error = err
        }
    }
    try {
        func(resolved, rejected)
    } catch (err) {
        rejected(err)
    }
}
MyPromise.prototype.then = function (onFullfilled, onRejected) {
    switch (this.status) {
        case "fullfilled":
            onFullfilled(this.value)
            break;
        case "rejected":
            onRejected(this.error)
            break;
        default:
            break;

    }
}
var p = new MyPromise((resolved, rejected) => {
    resolved(1)
})
p.then(value => {
    console.log(value)
}, err => {
    console.log(err)
})