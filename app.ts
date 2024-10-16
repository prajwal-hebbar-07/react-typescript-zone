// literal types

type Role = "admin" | "user" | "editor";

let role: Role;

role = "admin";
role = "user";

// role = "editor" - error.

// adding type guards

function performSomething(something: string | number, role: Role) {
  if (role === "admin" && typeof something === "string") {
    //...
  }
}
