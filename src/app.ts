class Department {
  // private id: string;
  // public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  // static -> class 외부에서 접근 가능.
  static fiscalYear = 2022;
  static createEmployee(name: string) {
    return { name };
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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value.");
    }
    this.addReport(value);
  }

  constructor(id: string, public admins: string[], public reports: string[]) {
    super(id, "IT");
    this.lastReport = reports[0];
  }

  addEmployee(name: string): void {
    if (name === "Kelly") {
      return;
    }
    // this.employees.push(name)
    // private이면 실행 불가. but protected에서는 extends에서 접근가능함.
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

//static method 사용 시 class 이름 꼭 사용해야함.
const employee1 = Department.createEmployee("Smith");
console.log(employee1, Department.fiscalYear);

const accounting = new Department("D1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Joe");
// accounting.employees[2] = 'Manu' => private이기 때문에 추가안됨.

accounting.describe();
accounting.printEmployeeInfo();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();

const it = new ITDepartment("A2", ["Brian", "Danny"], []);
it.mostRecentReport = "Report by setter";
it.addReport("Report 1");
console.log(it.mostRecentReport);

it.addEmployee("Chris");
it.addEmployee("Kelly"); // 추가되지 않음. Ln 25-31
it.addEmployee("Elle");

console.log(it);
