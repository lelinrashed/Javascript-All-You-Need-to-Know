// Make a new array after modifed data

var arr = [1, 2, 3]

// var sqrArr = arr.map(function(value, index, arr) {
//     return value * value
// })

// console.log(sqrArr);
// console.log(arr);


function myMap(arr, cb) {
    var newArr = []
    for(var i = 0; i < arr.length; i++) {
        var temp = cb(arr[i])
        newArr.push(temp)
    }
    return newArr
}

console.log(myMap(arr, function(value){
    return value * value
}));

