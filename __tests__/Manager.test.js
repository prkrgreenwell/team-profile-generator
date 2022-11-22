/** @format */

const Manager = require("../lib/manager");

describe("Manager", () => {
  it("should be able to set the office number of the manager", () => {
    const manager = new Manager(
      "Peter Parker",
      3,
      "notspiderman@gmail.com",
      111
    );
    expect(manager.office).toEqual(111);
  });
  it("should be able to return the office number of the manager", () => {
    const manager = new Manager(
      "Peter Parker",
      3,
      "notspiderman@gmail.com",
      111
    );
    expect(manager.getOfficeNumber()).toEqual("Manager's Office Number: 111");
  });

  it("should return the role of a manager", () => {
    const manager = new Manager(
      "Peter Parker",
      3,
      "notspiderman@gmail.com",
      111
    );
    expect(manager.getRole()).toEqual("Manager");
  });
});
