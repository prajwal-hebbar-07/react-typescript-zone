let username = "Prajwal";

// username = 36 - will throw an error

let lastname;
lastname = 33;
lastname = "Hebbar";

let firstname: string;
// firstname = 33 - will throw an error
firstname = "Prajwal";

// Basic Primitive Types
let justString: string;
let justNumber: number;
let justBoolean: boolean;

// union of types
let userId: string | number = "abc123";
userId = 123;

// object types
// let user;
// user = {
//   name: "Prajwal",
//   age: 25,
//   isAvailable: true,
//   id: 123, // "abc"
// };

let user: object;
user = {
  name: "Prajwal",
};

user = {
  age: 12,
};

let user2: {
  name: string;
  age: number;
  isAvailable: boolean;
  id: string | number;
};

// user2 = {} - Error
user2 = {
  name: "Prajwal",
  age: 25,
  isAvailable: false,
  id: 123,
};
