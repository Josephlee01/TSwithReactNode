// type 사용 시

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// interface 사용 시 
// interface Admin {
//   name: string;
//   privileges: string[];
// };

// interface Employee {
//   name: string;
//   startDate: Date;
// };

// interface ElevatedEmployee extends Admin, Employee {}


const e1: ElevatedEmployee = {
  name: "Joe",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number
type Numeric = number | boolean
type Universal = Combinable & Numeric


