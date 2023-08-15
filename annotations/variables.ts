let apples: number = 5; // type annotation
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'green', 'blue'];
// string[] is not creating an array, instead, indicating that the type is array
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

// Classes
class Car {}
let newCar: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i) => {
  // void because the function doesn't return anything
  console.log(i);
};
