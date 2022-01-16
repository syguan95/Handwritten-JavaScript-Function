var myNew = function (constructor, ...args) {
    var obj = {}
    obj.__proto__ = constructor.prototype;
    var result = constructor.apply(obj, args)
    return typeof result === "object" ? result : obj
}

var Person = function (name) {
    this.name = name;
}

var person = myNew(Person, "javascript")
console.log(person instanceof Person)
console.log(person.name)