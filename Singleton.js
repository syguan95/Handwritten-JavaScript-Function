var singleton = (function () {
    let instance;
    return function (name) {
        if (instance) {
            return instance
        }
        this.name = name;
        instance = this
    }
})()
var item1 = new singleton("hhh")
var item2 = new singleton("nnn")
console.log(item1 === item2)
console.log(item1.name)
console.log(item2.name)