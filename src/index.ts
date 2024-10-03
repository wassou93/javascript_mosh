// Javascript types:
function main() {
    let obj1 = {
        name: "Alice",
        greet: function () {
            console.log("Hello, " + this.name + "!");
        },
    };

    let obj2 = {
        name: "Not Alice",
        greet: obj1.greet,
    };

    let greet: () => void = obj2.greet.bind(obj1);

    obj2.greet();
    greet();

    // Three ways to create classes in Javascript

    // Factory function
    function createCircle(radius: number) {
        return {
            radius,
            draw: function () {
                console.log("draw: ", this.radius);
            },
        };
    }
    let circle1 = createCircle(1);
    circle1.draw();

    interface Circle1 {
        radius: number;
        draw: () => void;
    }

    // Constructor function
    const Circle1: new (radius: number) => Circle1 = function (
        this: Circle1,
        radius: number
    ) {
        this.radius = radius;
        this.draw = function () {
            console.log("draw", this.radius);
        };
    } as any; // Use 'as any' to bypass TypeScript errors for the constructor function

    let circle2 = new Circle1(2);
    circle2.draw(); // Outputs: draw 2

    // Using classes
    class Circle {
        radius: number;

        constructor(radius: number) {
            this.radius = radius;
        }

        draw() {
            console.log("draw", this.radius);
        }
    }

    let circle3 = new Circle(3);
    circle3.draw();
}

main();
