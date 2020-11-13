/**
 * Pure Function
 * 
 * It returns the same result if given the same arguments
 * It does not cause any observable side effects * 
 */


function sqr(n) {
    return n * n
}


console.log(sqr(7));


var n = 10

function change() {
    n = 100
}

change()

console.log(n);



var point = {
    x: 45,
    y: 30
}


function printPoint() {
    point.x = 100
    point.y = 200
}

printPoint()

console.log(point);


