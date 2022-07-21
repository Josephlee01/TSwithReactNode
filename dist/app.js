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
    constructor(id, admins, reports) {
        super(id, "IT");
        this.admins = admins;
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value.');
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === "Kelly") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
}
const accounting = new Department("D1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Joe");
accounting.describe();
accounting.printEmployeeInfo();
const it = new ITDepartment("A2", ["Brian", "Danny"], []);
it.mostRecentReport = 'Report by setter';
it.addReport("Report 1");
console.log(it.mostRecentReport);
it.addEmployee("Chris");
it.addEmployee("Kelly");
it.addEmployee("Elle");
console.log(it);
