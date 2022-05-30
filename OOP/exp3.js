class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  walks() {
    console.log(`Taking ${this.name} the ${this.breed} for a walk`);
    return this;
  }
  eats() {
    console.log(`${this.name} has had some food`);
    return this;
  }
}
const stanley = new Dog("Stanley", "Bull Dog");

stanley.walks().eats();
