"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployee(name) {
        return { name };
    }
}
Department.fiscalYear = 2022;
const employee1 = Department.createEmployee("Smith");
console.log(employee1, Department.fiscalYear);
class accountingDepartment extends Department {
    describe() {
        console.log("Accountind Department - ID: " + this.id);
    }
}
const accounting = new accountingDepartment("D1", "Accounting Department");
accounting.addEmployee("Max");
accounting.addEmployee("Joe");
accounting.describe();
accounting.printEmployeeInfo();
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
            throw new Error("Please pass in a valid value.");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (ITDepartment.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment("A2", ["Andy", "Molten"], []);
        return this.instance;
    }
    describe() {
        console.log("IT Department - ID: " + this.id);
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
const it = ITDepartment.getInstance();
it.mostRecentReport = "Report by setter";
it.addReport("Report 1");
console.log(it.mostRecentReport);
it.addEmployee("Chris");
it.addEmployee("Kelly");
it.addEmployee("Elle");
console.log(it);
it.describe();
