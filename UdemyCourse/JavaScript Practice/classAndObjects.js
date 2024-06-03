// Exercises Level 1
/*
Create an Animal class. The class will have name, age, color, legs properties and create different methods
Create a Dog and Cat child class from the Animal Class.
*/

class Animal{
    constructor(name, age, color, legs){
        this.animalName = name;
        this.animalAge = age;
        this.animalColor = color;
        this.animalLegs = legs;
    }

    animalSound(){
        console.log("Animal sound!");
    }
}

class Mammal extends Animal{
    constructor(name, age, color, legs, animalClass){
        super(name, age, color, legs)
        this.animalClass = animalClass;
    }

    isAnimalMammal(){
        if(this.animalClass === "Mammal"){
            return `The ${this.animalName} is a Mammalian class`;
        }else{
            return `The ${this.animalName} doesn't belong to the Mammalian class`;
        }
    }
}

let cat = new Animal('Nik', 13, "Black and white", "4 legs");
let dog = new Animal("Sky", 15, "White", "4 legs");

console.log(cat.animalName);
cat.animalSound();
console.log(" ");
console.log(dog.animalName);
dog.animalSound();

let bird = new Mammal("Wood Pecker", 14, "Rainbow", 2, "Mammal");

console.log(bird.animalName);
console.log(bird.isAnimalMammal());