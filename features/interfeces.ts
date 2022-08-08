interface Vehicle {
    name: string;
    year: number;
    isBroken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    isBroken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};

const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
};

printVehicle(oldCivic);
