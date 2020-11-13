

function test() {
    var msg = 'I am learning lexical scope and closure'

    return function() {
        console.log(msg);
    }
}

console.log(test());



// console.log(e());



