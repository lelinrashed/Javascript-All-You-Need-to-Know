var add = function(a, b) {
    return a+b
}


// console.log(add(5, 5));


setTimeout(function(){
    console.log(add(4, 5));
}, 5000)


var another = add

console.log(another);

