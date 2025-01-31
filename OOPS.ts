//Object Oriented Programming in TypeScript have concepts 
// like classes, objects, inheritance, encapsulation, polymorphism, and abstraction.

//classes
class Person {
    //properties
    name: string;
    age: number;

    //constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    //methods
    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

//objects
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

//accessing properties
console.log(person1.name); //John
console.log(person2.age); //25

//accessing methods
person1.display(); //Name: John, Age: 30
person2.display(); //Name: Jane, Age: 25


//inheritance
class Employee extends Person {
    empCode: number;

    constructor(name: string, age: number, empCode: number) {
        super(name, age);
        this.empCode = empCode;
    }

    display(): void { // Overriding
        super.display();
        console.log(`Employee Code: ${this.empCode}`);
    }
}


const emp = new Employee("John", 30, 123);
emp.display();
// Name: John, Age: 30


//encapsulation
class Account {
    private accNo: number;
    private accName: string;
    private accBalance: number;

    constructor(accNo: number, accName: string, accBalance: number) {
        this.accNo = accNo;
        this.accName = accName;
        this.accBalance = accBalance;
    }

    getAccountInfo(): void {
        console.log(`Account No: ${this.accNo}, Account Name: ${this.accName}, Account Balance: ${this.accBalance}`);
    }
}

const acc = new Account(123, "John", 10000);
acc.getAccountInfo();


//polymorphism
class Animal {
    sound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound(): void {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound(): void {
        console.log("Cat meows");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.sound(); //Dog barks
cat.sound(); //Cat meows



//abstraction
abstract class Shape {
    abstract draw(): void;
}

class Circle extends Shape {
    draw(): void {
        console.log("Circle is drawn");
    }
}

class Rectangle extends Shape {
    draw(): void {
        console.log("Rectangle is drawn");
    }
}

const circle = new Circle();
const rectangle = new Rectangle();

circle.draw(); //Circle is drawn
rectangle.draw(); //Rectangle is drawn
//In the above example, the Shape class is an abstract class that has an abstract method draw().
// The Shape class is not instantiated because it is an abstract class.



//abstract class having function with implementation
abstract class Shape1 {
    abstract draw(): void;
    move(): void {
        console.log("Shape is moved");
    }
}

class Circle1 extends Shape1 {
    draw(): void {
        console.log("Circle is drawn");
    }
}

class Rectangle1 extends Shape1 {
    draw(): void {
        console.log("Rectangle is drawn");
    }
}

const circle1 = new Circle1();
const rectangle1 = new Rectangle1();

circle1.draw(); //Circle is drawn
rectangle1.draw(); //Rectangle is drawn
circle1.move(); //Shape is moved
rectangle1.move(); //Shape is moved
//In the above example, the Shape class is an abstract class that has an abstract method draw() and a non-abstract method move().



//interface
interface Point {
    x: number;
    y: number;
}

interface LabeledPoint extends Point {
    label: string;
}

const points: LabeledPoint = {
    x: 10,
    y: 20,
    label: "A"
};

function printPoints(p: Point): void {
    console.log(`Point(${p.x}, ${p.y})`);
}


//interface with function with declaration 
interface People{
    sound(): String
}
