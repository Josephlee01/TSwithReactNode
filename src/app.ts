class Department {
  // private id: string;
  // public name: string;
  protected employees: string[] = [];

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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT")
  }
  addEmployee(name: string): void {
    if(name==="Kelly"){
      return;
    }
    // this.employees.push(name) 
    // private이면 실행 불가. but protected에서는 extends에서 접근가능함.
    this.employees.push(name)
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

const it = new ITDepartment("A2", ["Brian", "Danny"])
it.addEmployee("Chris")
it.addEmployee("Kelly") // 추가되지 않음. Ln 25-31
it.addEmployee("Elle")

console.log(it)