function Circle0(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw', this.radius);
    };
}

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw', this.radius);
    };
`);

let Circle = Function.apply(Function, ['radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw', this.radius);
    };
`]);


// const circle1 = new Circle1(1);

const circle1 = {};
Circle.call(circle1, 0);

const circle1_2 = new Circle(12);


// circle0.draw();
circle1.draw();