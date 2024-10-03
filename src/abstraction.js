function Circle(radius) {
    this.radius = radius;
    // this.defaultLocation = { x: 10, y: 0 };
    let defaultLocation = { x: 10, y: 0 };

    // this.computeOptimumLocation = function () {
    let computeOptimumLocation = function (factor) {
        // ...
    };

    this.getDefaaultLocation = function () {
        return defaultLocation;
    };

    this.draw = function () {
        computeOptimumLocation(0.1);
        // defaultLocation
        // this.radius

        console.log("draw", defaultLocation);
    };

    // define an object property (read-only)
    Object.defineProperty(this, "defaultLocation", {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) throw new Error("Invalid location");
            defaultLocation = value;
        },
    });
}

const circle = new Circle(10);
circle.getDefaaultLocation();
circle.draw();
circle.defaultLocation = { x: 1, y: 12 };
circle.draw();
