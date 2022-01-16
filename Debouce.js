var div = document.getElementsByClassName("xxx")[0];
var clickHandler = function (event) {
    console.log(event)
}

var debounce = function (fn, delay) {
    let time = null;
    return function (event) {
        if (time) {
            clearTimeout(time)
        }
        time = setTimeout(fn.bind(null, event), delay)
    }
}
div.addEventListener("click", debounce(clickHandler, 2000))