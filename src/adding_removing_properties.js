function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw", this.radius);
    };
}

const circle = new Circle(10);

// Adding properties
circle.location = { x: 1 };

const propertyName = "location";
circle[propertyName] = { x: 1 };

console.log(circle);

// Removing properties

delete circle.location;
// or delete circle[propertyName]

console.log(circle);
