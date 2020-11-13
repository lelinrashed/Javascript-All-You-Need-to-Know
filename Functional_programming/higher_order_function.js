// 5. We can pass function as an arguments
function add(a, b) {
    return a + b
}


function manipulate(a, b, func) {
    var c = a + b
    var d = a - b

    // function multiply() {
    //     var m = func(a, b)
    //     return c * d * m
    // }

    return function() {
        var m = func(a, b)
        return c * d * m
    }
}


var multiply = manipulate(3, 4, add)
console.log(multiply());