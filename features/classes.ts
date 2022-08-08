class Vehicle {
    protected honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    private drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

// create object from a class
const car = new Car();
car.startDrivingProcess();
