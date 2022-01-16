class EventEmitter {
	constructor() {
		this.listener = {}
	}
	on(event, cb) {
		if (!this.listener[event]) {
			this.listener[event] = []
		}
		this.listener[event].push(cb)
	}
	off(event, cb) {
		if (this.listener[event]) {
			var index = this.listener[event].findIndex(fn => fn === cb)
			if (index !== -1) {
				this.listener[event].splice(index, 1)
			}
			if (this.listener[event].length === 0) {
				delete this.listener[event]
			}
		}
	}
	emit(event, ...args) {
		if (this.listener[event]) {
			this.listener[event].forEach(fn => {
				fn(...args)
			})
		}
	}
}

var emitter = new EventEmitter()
var func1 = function () {
	console.log("test no arguments")
}
var func2 = function (...args) {
	console.log("test with arguments", ...args)
}
var func3 = function () {
	console.log("another event with no arguments")
}
emitter.on("test", func1)
emitter.on("test", func2)
emitter.on("ceshi", func3)
emitter.emit("test", 1, 2, 3)
emitter.emit("ceshi")
emitter.off("test", func2)
emitter.emit("test")
emitter.emit("ceshi")