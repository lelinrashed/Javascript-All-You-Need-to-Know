// First Class Function

function add(a, b) {
    return a + b
}


// 1. A function can be stored in a variable
var sum = add
console.log(sum(4, 5));
console.log(typeof sum);

// 2. A function can be stored in  an array
var arr = []
arr.push(add)
console.log(arr);
console.log(arr[0](5, 3));

// 3. A function can be stored in an object
var obj = {
    sum: add
}

console.log(obj);
console.log(obj.sum(4, 5));

// 4. We can create function as need
setTimeout(function(){
    console.log('I have created');
}, 5000)



// 6. We can return functions from another function




