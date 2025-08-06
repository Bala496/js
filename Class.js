// Define a class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display details
    describe() {
        return (`${this.name} is ${this.age} years old.`);
    }
}

// Create objects
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Display object details
console.log(person1.describe());
console.log(person2.describe());




class Cars {
    // constructor(name1 , age ){
    //        this.name1 = name1;
    //        this.age =  age;
    // }
    
    parts(name1, age){
       return(`My name is ${name1} and am ${age} years old`)
    }

}

const c1 = new Cars();
const c2 = new Cars();

console.log(c1.parts("vignesh", 25));
console.log(c2.parts("Bala", 24));



