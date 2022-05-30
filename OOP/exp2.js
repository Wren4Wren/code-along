class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  walks() {
    console.log(`Taking ${this.name} the ${this.breed} for a walk`);
  }
  eats() {
    console.log(`${this.name} has had some food`);
  }
}

const stanley = new Dog("Stanley", "Bulldog");

stanley.walks();
stanley.eats();
