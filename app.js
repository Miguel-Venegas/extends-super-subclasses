// this cod below is the super class

class Pet {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`
	}
	sayName(){
		return `My name is ${this.name}`
	}
	sayAge(){
		return `I am ${this.age} year(s) old`
	}
}

// these are the inheritors or subclasses and are extending functionality from their super class "Pet"

class Cat extends Pet {
	constructor(name, age, livesLeft = 9){
		super(name, age);
		this.livesLeft = livesLeft;
	}
	meow(){
		const {name} = this;
		return `${name} says "meow!"`
	}
}

class Dog extends Pet {
	bark() {
		const { name } = this;
		return `woof, woof, woof"`
	}
}