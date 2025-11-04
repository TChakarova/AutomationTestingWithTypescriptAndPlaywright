//class declaration

class Person {
    //name: string;
    //age: number;
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
    introduction(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person1 = new Person("Alice", 30);
person1.introduction(); // Hello, my name is Alice and I am 30 years old.
person1.name;
console.log(person1.name);
person1.age;
console.log(person1.age);
person1.name = "Bob";
console.log(person1.name);

//readonly access modifier
class ReadOnlyPersonData {
    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    intro(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person2 = new ReadOnlyPersonData("Charlie", 25);
person2.intro(); // Hello, my name is Charlie and I am 25 years old.
console.log(person2.name); // Charlie
console.log(person2.age);  // 25
//person2.name = "David"; // Error: Cannot assign to 'name' because it is a read-only property.

//private access modifier
class PrivatePersonData {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    private displaySecretMessage(): string {
        return "This is a  message from private method.";
    }

    intro(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. ${this.displaySecretMessage()}`;
    }
}
const person3 = new PrivatePersonData("Eve", 28);
//person3.name; // Error: Property 'name' is private and only accessible within class 'PrivatePersonData'.
//person3.age; // Error: Property 'age' is private and only accessible within class 'PrivatePersonData'.
console.log(person3.intro()); // Hello, my name is Eve and I am 28 years old.
//person3.displaySecretMessage(); // Error: Property 'displaySecretMessage' is private and only accessible within class 'PrivatePersonData'.

//Class inheritance
class User {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    intro(): void {
        console.log(`Nice to meet you.`);
}
}

class UserDetails extends User {    
    constructor(name: string) {
        super(name);
    }
    showDetails(): void {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
const user =  new UserDetails('Frank');
console.log(user.name); // Frank
user.showDetails(); // Hello, my name is Frank.
user.intro(); // Nice to meet you.

//protected access modifier
class ProtectedPerson {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
   protected getProtectedData(): string {
        return `Protected Name: ${this.name}, Protected Age: ${this.age}`;
    }   

}

class Student extends ProtectedPerson {
    private grade: number;
    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }
    studentInfo(): void {
        console.log(`Student Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
        console.log(this.getProtectedData());
    }
   }
   const student = new Student("George", 20, 3);
   //student.name; // Error: Property 'name' is protected and only accessible within class 'ProtectedPerson' and its subclasses.
   //student.age; // Error: Property 'age' is protected and only accessible within class 'ProtectedPerson' and its subclasses.
   student.studentInfo();
// Student Name: George, Age: 20, Grade: 3
// Protected Name: George, Protected Age: 20