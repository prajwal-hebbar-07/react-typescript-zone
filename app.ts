//array types

let hobbies: Array<string>;

hobbies = ["Sports", "Music"];

let hobbies2: string[]; // number[], boolean[], {name: string}[]

hobbies2 = ["sports"];

// constant types
const username = "Prajwal";

// function argument & return types
function add(a: number, b: number) {
  const result = a + b;
  return result;
}

function subtract(a: number, b: number): void {
  const result = a - b;
  console.log(result);
}

function calculate(
  a: number,
  b: number,
  addFn: (a: number, b: number) => number
) {
  addFn(a, b);
}

calculate(2, 5, add);
