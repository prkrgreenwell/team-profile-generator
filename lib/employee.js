/** @format */

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return `Employee Name: ${this.name}`;
  }

  getId() {
    return `Employee Id: ${this.id}`;
  }

  getEmail() {
    return `Employee email: ${this.email}`;
  }

  getRole() {
    return `Employee`;
  }
}
module.exports = Employee;
