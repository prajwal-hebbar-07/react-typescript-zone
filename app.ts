// custom type or type aliases

type StringOrNum = string | number;

type User = {
  name: string;
  age: number;
  id: StringOrNum;
};

type AddFn = (a: number, b: number) => number;

let userId: StringOrNum;

let user: User;

function calculate(a: number, b: number, addFn: AddFn) {
  addFn(a, b);
}
