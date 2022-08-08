const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const coffee: Drink = ['black', false, 0];

const carSpecsTuple: [number, number] = [400, 3341];
const carSpecsObject = {
    horsepower: 400,
    weight: 3341,
};
