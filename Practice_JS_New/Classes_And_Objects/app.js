const student = {
  fullName: "Raj Gupta",
  marks: 91.4,
  printMarks: function () {
    console.log("Marks = ", this.marks);
  },
};

const employee = {
  calcTax() {
    console.log("Tax rate is 10%");
  },
};
const karanArjun = {
  salary: 50000,
  calcTax() {
    console.log("Tax rate is 20%");
  },
};
karanArjun.__proto__ = employee;

class ToyotaCar {
  constructor() {
    console.log("creating new object");
  }
  start() {
    console.log("Start");
  }
  stop() {
    console.log("Stop");
  }
  setBrand(brand) {
    this.brand = brand;
  }
}
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("Lexus");

class Person {
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  work() {
    console.log("do nothing");
  }
}
class Engineer extends Person {
  work() {
    console.log("Solve Problem , build something");
  }
}
class Doctor extends Person {
  work() {
    console.log("Treat patients");
  }
}
let RajoObj = new Engineer();

class Person1 {
  constructor() {
    console.log("enter parent constructor");
    this.species = "homo sapies";
  }
  eat() {
    console.log("eat");
  }
}
class Engineer1 extends Person1 {
  constructor(branch) {
    console.log("Enter child constructor");

    super();
    this.branch = branch;
    console.log("Exit child constructor");
  }
  work() {
    console.log("Solve problems");
  }
}
let engObj = new Engineer1("Chemical engg");
