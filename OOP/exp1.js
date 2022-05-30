class Person {
  // constructor function constructs our new object and sets the properties and methods
  constructor(name, age, job) {
    //properties here
    this.name = name;
    this.age = age;
    this.job = job;
  }
  //methods here
  talks() {
    console.log(
      `Hi, my name is ${this.name}, I am ${this.age} and I work as a ${this.job}`
    );
  }
  work() {
    console.log(`I am going to build a house, because I am a ${this.job}`);
  }
}
//  creating a new INSTANCE of the class.
const dave = new Person("Dave", 41, "Builder");
// the 'new' keywork
// 1 - creates an empty object
// 2 - binds the value of this to the new empty object
// 3 - calls the constructor function to build the new object
dave.talks();
dave.work();
