let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = false;

let hasNothing: null = null;
let nothing: undefined = undefined;

// built in object
const now: Date = new Date();

// Array
const colors: string[] = ['red', 'green', 'blue'];
const numbers: number[] = [1, 2, 3, 4];

// Classes
class Car {}
const car: Car = new Car();

// Object literal
const point: { x: number; y: number } = {
    x: 10,
    y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use type annotation
// 1) Functions that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) Delayed initialization
const names = ['john', 'matt', 'luna'];
let foundName: boolean;

names.map((name) => {
    if (name === 'matt') foundName = true;
});

// 3) Variable whose can not be inferred correctly
let randomNumbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (const number of randomNumbers) {
    if (number > 0) {
        numberAboveZero = number;
    }
}
