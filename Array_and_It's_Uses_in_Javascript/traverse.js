
var arr = [4, 5, 5, 3, 2, 6]


// for (let i = 0; i < arr.length; i++) {
//     arr[i] += 2
//     console.log(arr[i]);
// }

var sum = 0

for(var i = 0; i < arr.length; i++) {
    sum += arr[i]
}

console.log(sum);

for(var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        console.log(arr[i]);
    }
}

