
var arr = [4, 5, 6, 3, 4]

var find = 10
var isFound = false

for(var i = 0; i < arr.length; i++) {
    if(arr[i] === find) {
        console.log(i);
        isFound = true
    }
}

if(!isFound) {
    console.log('Data not found')
}

