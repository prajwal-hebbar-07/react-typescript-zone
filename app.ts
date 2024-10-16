//array types

let hobbies: Array<string>;

hobbies = ["Sports", "Music"];

let hobbies2: string[]; // number[], boolean[], {name: string}[]

hobbies2 = ["sports"];

// constant types
const username = "Prajwal";

// function argument & return types
function add(a: number, b: number): undefined {
  const result = a + b;
  console.log(result);
}

function subtract(a: number, b: number): void {
  const result = a - b;
  console.log(result);
}
