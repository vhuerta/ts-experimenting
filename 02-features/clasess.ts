class Vehicle {
  // Defined class prop on constructor
  constructor(public color: string = "red") {}

  drive(): void {
    console.log("driving...");
  }
  protected honk(): void {
    console.log("piiiii");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number = 4, color: string = "red") {
    super(color);
  }

  drive(): void {
    console.log("driving a car...", this.color, this.wheels);
    this.honk();
  }
}

const myCar = new Car(6);
myCar.drive();

const myCar2 = new Car(3);
myCar2.color = "orange";
myCar2.drive();

const myCar3 = new Car(2, "green");
myCar3.drive();
