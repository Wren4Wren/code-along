class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
	set fullName(value) {
		const names = value.split(' ');
		this.firstName = names[0];
		this.lastName = names[1];
	}
}

let person = new Person('Dave', 'Jones');
//set it
person.fullName = 'Will Smith';

//get it
console.log(person.fullName);
