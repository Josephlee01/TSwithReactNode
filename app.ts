// enum은 객체에 순번을 부여함
enum Level1 {
  admin, // 0
  readOnly, // 1
  author, // 2
}

enum Level2 {
  admin = "ADMIN",
  readOnly = 100,
  author = 999,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  level: Level1;
} = {
  name: "Joseph",
  age: 35,
  hobbies: ["go for a drive", "swimming", "making coffee"],
  role: [2, "author"],
  level: Level1.readOnly,
};

const person2 = {
  level: Level2.author,
};

// person.role[1] = 5; // role 배열의 두번째는 string 이어야 함.
person.role = [3, "police"]; // number, string 순서 맞으니까 가능.
person.role.push("admin"); // 근데 왜 push는 되는거야?

console.log(person.name);
console.log(person.role);
console.log(`Person1 Access Level = ${person.level}`);
console.log(`Person2 Access Level = ${person2.level}`);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}


// any
let favWords: any[];
favWords = [1, "blue", false, null, undefined];
