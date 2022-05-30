class Person {
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
const dave = new Person("Dave", 41, "Builder");

dave.talks();
dave.work();
