// function add(a, b, c) {
//     return a + b + c
// }

// add(2, 4, 5)

function curring(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

var result = curring(3)(4)(2)

console.log(result);
