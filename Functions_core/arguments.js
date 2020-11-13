// function add(a, b) {
//     var result = a + b
//     return result
// }

// console.log(add(5, 8));


// Sum of array

// function sumOfArray(arr){
//     var sum = 0

//     for(var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }

//     console.log(sum);
// }


// sumOfArray([5, 6, 7, 8, 9])

function test(a, b, c) {
    // console.log(arguments);
    // console.log(typeof a);

    for(var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }

}

test(10, 20, 70)
