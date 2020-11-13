// Filter function make a new array based on condition

var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]

// var filterdArr = arr.filter(function(value, index, arr) {
//     return value % 2 === 0
// })

// console.log(filterdArr);


function myFilter(arr, cb) {
    var newArr = []

    for(var i = 0; i < arr.length; i++) {
        if(cb(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }

    return newArr
}


console.log(myFilter(arr, function(value, index, arr){
    return value % 2 === 0
}));

