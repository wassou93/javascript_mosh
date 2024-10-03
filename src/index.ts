// Javascript types:
function main() {
    let name = "Wassim Akkari";
    console.log(name);

    let age: number = 30;
    console.log(age); // Number litteral

    let isApproved = true;
    console.log(isApproved);

    let firstName: undefined | null;
    console.log(firstName);

    let selectedColor: undefined | null = null;
    console.log(selectedColor);

    let person1: { name: string; age: number } = {
        name: "hello",
        age: 22,
    };

    interface PersonInt {
        name: string;
        age: number;
    }

    let person2: PersonInt = {
        name: "hello",
        age: 22,
    };

    console.log(person1);
    console.log(person2);

    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        greet() {
            return `Hello, my name is ${this.name}`;
        }
    }

    const person3: Person = new Person("Wassim Akkari", 31);
    console.log(person3);
    console.log(person3.greet());

    person3.name = "wassou";
    console.log(person3.greet());

    person3["name"] = "Wassim Akkakri";
    console.log(person3.greet());

    let selection = "name";
    console.log(person3[selection as "name"]);

    // Arrays
    type array_type = string | number | undefined | null;
    let list: array_type[] = ["first", "second", "third", 1, 2, 3, undefined];
    console.log(list);
}

main();
