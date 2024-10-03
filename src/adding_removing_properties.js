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

// Iterating over properties of an object
console.log("------------");
for (key in circle) {
    // Exclude functions
    if (typeof circle[key] !== "function") {
        console.log(key, ":", circle[key]);
    }
}

// Returns an array of keys
const keys = Object.keys(circle);
console.log(keys);

// Checking if a key exists in an object
if ("radius" in circle) {
    console.log("Circle has aa radius.");
}
