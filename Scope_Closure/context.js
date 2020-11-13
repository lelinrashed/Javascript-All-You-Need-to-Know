function a() {
    b()
    console.log('I am function A');
}

function b() {
    d()
    console.log('I am function B');
}

function c() {
    console.log('I am function C');
}

function d() {
    c()
    console.log('I am funciton D');
}

var x = 100
a()
console.log('I am global');



// Creational Phase
// Executional Phase


// 100
// 10
// 45
// 100


