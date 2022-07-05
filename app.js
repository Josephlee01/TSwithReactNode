// enum은 객체에 순번을 부여함
var Level1;
(function (Level1) {
    Level1[Level1["admin"] = 0] = "admin";
    Level1[Level1["readOnly"] = 1] = "readOnly";
    Level1[Level1["author"] = 2] = "author";
})(Level1 || (Level1 = {}));
var Level2;
(function (Level2) {
    Level2["admin"] = "ADMIN";
    Level2[Level2["readOnly"] = 100] = "readOnly";
    Level2[Level2["author"] = 999] = "author";
})(Level2 || (Level2 = {}));
var person = {
    name: "Joseph",
    age: 35,
    hobbies: ["go for a drive", "swimming", "making coffee"],
    role: [2, "author"],
    level: Level1.readOnly
};
var person2 = {
    level: Level2.author
};
// person.role[1] = 5; // role 배열의 두번째는 string 이어야 함.
person.role = [3, "police"]; // number, string 순서 맞으니까 가능.
person.role.push("admin"); // 근데 왜 push는 되는거야?
console.log(person.name);
console.log(person.role);
console.log("Person1 Access Level = ".concat(person.level));
console.log("Person2 Access Level = ".concat(person2.level));
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
