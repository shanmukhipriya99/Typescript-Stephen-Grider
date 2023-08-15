interface Reportable {
  summary(): string;
}
// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
//   summary(): string;
// }

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink contains ${this.sugar} grams of sugar.`;
  },
};
// a generic function that allows us to deal with different categories
// using the same interface
const printSummary = (item: Reportable): void => {
  console.log(`Name: ${item.summary()}`);
};

printSummary(oldCivic);
