// const person: {
//   name:string,
//   age:number,
//   hobbies: string[]
// } = {
var person = {
    name: "Joseph",
    age: 35,
    hobbies: ['go for a drive', 'swimming', 'making coffee'],
    role: [2, 'author']
};
person.role[0] = 5;
person.role.push('admin');
console.log(person.name);
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
