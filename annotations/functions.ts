// the passing of parameters: inference doesn't work
// tthe return value: inference works, but a good practice is to not use it

const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// void & never

const logger = (message: string): void => {
  console.log(message);
};
// in cases where the function would abruptly end
const throwErr = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  // object destructuring
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

logWeather(forecast);
