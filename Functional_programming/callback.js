function sample(a, b, cb) {
    var c = a + b
    var d = a - b

    return cb(c, d)
}

// function sum(a, b) {
//     return a + b
// }


console.log(sample(6, 8, function (a, b) {
    return a - b
}));