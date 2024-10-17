// generic types

type DataStorage<T> = {
  storage: T;
  addFn(data: T): void;
};

type User = {
  name: string;
  age: number;
};

let storageData: DataStorage<string>;

storageData = {
  storage: "Hello",
  addFn(data) {
    this.storage.push(data);
  },
};

let userStorage: DataStorage<User>;

userStorage = {
  storage: {
    name: "Prajwal",
    age: 25,
  },
  addFn(user) {
    this.storage.push(user);
  },
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const data = merge({ name: "Prajwal" }, { age: 25 });
