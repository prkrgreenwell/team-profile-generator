/** @format */

const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should be able to set the name of an employee", () => {
    const employee = new Employee("Peter Parker", 3, "notspiderman@gmail.com");
    expect(employee.name).toEqual("Peter Parker");
  });

  it("should be able to set the id of an employee", () => {
    const employee = new Employee("Peter Parker", 3, "notspiderman@gmail.com");
    expect(employee.id).toEqual(3);
  });

  it("should be able to set the name of an employee", () => {
    const employee = new Employee("Peter Parker", 3, "notspiderman@gmail.com");
    expect(employee.email).toEqual("notspiderman@gmail.com");
  });

  it("should return the name of an employee", () => {
    const employee = new Employee("Peter Parker", 3, "notspiderman@gmail.com");
    expect(employee.getName()).toEqual("Employee Name: Peter Parker");
  });

  it("should return the id of an employee", () => {
    const employee = new Employee("Peter Parker", 3, "notspiderman@gmail.com");
    expect(employee.getId()).toEqual("Employee Id: 3");
  });

  it("should return the email of an employee", () => {
    const employee = new Employee("Peter Parker", 3, "notspiderman@gmail.com");
    expect(employee.getEmail()).toEqual(
      "Employee email: notspiderman@gmail.com"
    );
  });

  it("should return the role of an employee", () => {
    const employee = new Employee("Peter Parker", 3, "notspiderman@gmail.com");
    expect(employee.getRole()).toEqual("Employee");
  });
});
