class Vehicle {
  drive(): void {
    console.log('Vroooommmm!');
  }
  honk(): void {
    console.log('Honk!!');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('..........');
  }
}

const vehicle = new Car();
vehicle.drive();
vehicle.honk();
