const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('100');

// Help with 'map'
carMakers.map((car: string): void => {
    return console.log(car);
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push('2030-10-10');
