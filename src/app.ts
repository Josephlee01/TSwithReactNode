abstract class Department {
  // private id: string;
  // public name: string;
  protected employees: string[] = [];

  // private이면 실행 불가. but protected에서는 extends에서 접근가능함.
  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  // static -> class 외부에서 접근 가능.
  static fiscalYear = 2022;
  static createEmployee(name: string) {
    return { name };
  }
}

//static method 사용 시 class 이름 꼭 사용해야함.
const employee1 = Department.createEmployee("Smith");
console.log(employee1, Department.fiscalYear);

// const Operation = new Department("C3", "Operation Department");
// abstract class에서는 new로 새로운 인스턴스 생성 불가!



class accountingDepartment extends Department {
  describe() {
    console.log("Accountind Department - ID: " + this.id); // id -> protected로 해야 접근가능.
  }
}

const accounting = new accountingDepartment("D1", "Accounting Department");

accounting.addEmployee("Max");
accounting.addEmployee("Joe");
// accounting.employees[2] = 'Manu' 
// employees가 private, protected 이기 때문에 추가 안됨.

accounting.describe();
accounting.printEmployeeInfo();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();


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

  describe() {
    console.log("IT Department - ID: " + this.id); // id -> protected로 해야 접근가능.
  }

  addEmployee(name: string) {
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


const it = new ITDepartment("A2", ["Brian", "Danny"], []);
it.mostRecentReport = "Report by setter";
it.addReport("Report 1");
console.log(it.mostRecentReport);

it.addEmployee("Chris");
it.addEmployee("Kelly"); // 추가되지 않음. it class 참조.
it.addEmployee("Elle");
console.log(it);

it.describe();
