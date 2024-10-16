//merging types

type User = {
  userName: string;
};

type Creds = {
  password: string;
};

type Admin = User & Creds;

let admin: Admin;

admin = {
  userName: "Prajwal",
  password: "Test",
};
