//merging types

// using the type keyword
// type User = {
//   userName: string;
// };

// type Creds = {
//   password: string;
// };

// type Admin = User & Creds;

// let admin: Admin;

// admin = {
//   userName: "Prajwal",
//   password: "Test",
// };

// using the interface keyword
interface User {
  username: string;
}

interface Creds {
  password: string;
}

interface Admin extends User, Creds {}

let admin: Admin;

admin = {
  username: "Prajwal",
  password: "Test",
};
