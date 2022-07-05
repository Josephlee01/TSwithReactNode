const person: {
  name:string,
  age:number,
  hobbies: string[],
  role:  [number, string]
} = {
  name: "Joseph",
  age: 35,
  hobbies: ['go for a drive', 'swimming', 'making coffee'],
  role: [2, 'author']
};

person.role[1] = 5 // role 배열의 두번째는 string 이어야 함.
person.role = [3, "police"] // number, string 순서 맞으니까 가능.
person.role.push('admin') // 근데 왜 push는 되는거야?

console.log(person.name);
console.log(person.role);

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase())
}