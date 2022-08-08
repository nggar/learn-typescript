class Vehicle {
    drive(): void {
        console.log('chugga chugga');
    }
    honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log('vroom');
    }
}

// create object from a class
const car = new Car();
car.drive();
car.honk();
