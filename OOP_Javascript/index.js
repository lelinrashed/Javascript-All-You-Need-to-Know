// var rect = {
//     width: 100,
//     height: 50,
//     draw: function(){
//         console.log('I am a rectangle');
//         this.printProperties()
//         console.log(this);
//     },
//     printProperties: function() {
//         console.log('My width is : ' + this.width);
//         console.log('My height is : ' + this.height);
//     }
// }

// rect.draw()


// function myFunc() {
//     console.log(this);
//     rect.printProperties()
// }

// new myFunc()


// var another = {
//     width: 47,
//     height: 56,
//     print: rect.printProperties
// }

// console.log(another.print);

// another.print()



// var rect = {
//     width: 100,
//     height: 50,
//     draw: function () {
//         console.log('I am a rectangle');
//         this.printProperties()
//         console.log(this);
//     },
//     printProperties: function () {
//         console.log('My width is : ' + this.width);
//         console.log('My height is : ' + this.height);
//     }
// }


// Factory pattern class

// var createRect = function (width, height) {
// return {
// width: width,
// height: height,
// draw: function () {
//     console.log('I am a rectangle');
//     this.printProperties()
//     console.log(this);
// },
// printProperties: function () {
//     console.log('My width is : ' + this.width);
//     console.log('My height is : ' + this.height);
// }
// }
// }

// var rect1 = createRect(45, 85)
// console.log(rect1.draw());


// var rect2 = createRect(70, 10)
// console.log(rect2.draw());



// Constructor pattern class

// var Rectangle = function (width, height) {
//     this.width = width
//     this.height = height
//     this.draw = function () {
//         console.log('I am a rectangle');
//         this.printProperties()
//         console.log(this);
//     }
//     this.printProperties = function () {
//         console.log('My width is : ' + this.width);
//         console.log('My height is : ' + this.height);
//     }
// }

// var rect3 = new Rectangle(4, 5)

// rect3.draw()


// function myNew(constructor) {
//     var obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     var argsArray = Array.prototype.slice.apply(arguments)
//     constructor.apply(obj, argsArray.slice(1))
//     return obj
// }

// var rect4 = myNew(Rectangle, 4, 3)

// rect4.draw()


// var str = new String("str")
// console.log('my string ' + str);


// function test() {
//     console.log('Test');
// }

// test()




var Rectangle = function(width, height) {
    this.width = width
    this.height = height
    var position = {
        x: 56,
        y: -100
    }

    var printProperties = function() {
        console.log('My width is ' + width);
        console.log('My height is ' + height);
    }

    this.draw = function() {
        printProperties()
        console.log(position.x);
        console.log(position.y);
    }
}

var rect7 = new Rectangle(45, 30)

rect7.draw()






