function Circle0(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw", this.radius);
    };
}

// Equivalent to:
const Circle1 = new Function(
    "radius",
    `
    this.radius = radius;
    this.draw = function() {
        console.log('draw', this.radius);
    };
`
);

// Equivalent to:
let Circle = Function.call(
    Function,
    "radius",
    `
    console.log('this is ', this, radius);
    this.radius = radius;
    this.draw = function() {
        console.log('draw', this.radius);
    };
`
);

// const circle1 = new Circle1(1);

const circle2 = {};
Circle.call(circle2, 10);

const circle1 = new Circle(12);

console.log(circle1);
console.log(circle2);

// If you want to declare stuff globally - not recommended

const circle_g = Circle(100);
// equivalent to:
const circle_g_2 = Circle.call(global, 200);

console.log(circle_g); // undefined
console.log(circle_g_2); // undefined

console.log(global.radius);
global.draw();

// circle0.draw();
// circle1.draw();

circle2.draw.call(circle1);
