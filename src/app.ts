class Department {
  // private id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }
  describe(this: Department) {
    console.log(`Department: [${this.id}] ${this.name} `);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("D1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Joe");
// accounting.employees[2] = 'Manu' => private이기 때문에 추가안됨.

accounting.describe();
accounting.printEmployeeInfo();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();
