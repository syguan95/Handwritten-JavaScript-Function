var clickHandler = function (event) {
    console.log(event)
}

var throttle = function (fn, delay) {
    let valid = true;
    return function (event) {
        if (valid) {
            valid = false
            setTimeout(() => {
                valid = true
                fn.call(null, event)
            }, delay)
        }
    }
}
var div = document.getElementsByClassName("xxx")[0];
div.addEventListener("click", throttle(clickHandler, 2000))