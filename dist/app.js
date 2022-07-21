"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department: [${this.id}] ${this.name} `);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    addEmployee(name) {
        if (name === "Kelly") {
            return;
        }
        this.employees.push(name);
    }
}
const accounting = new Department("D1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Joe");
accounting.describe();
accounting.printEmployeeInfo();
const it = new ITDepartment("A2", ["Brian", "Danny"]);
it.addEmployee("Chris");
it.addEmployee("Kelly");
it.addEmployee("Elle");
console.log(it);
