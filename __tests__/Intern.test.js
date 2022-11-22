/** @format */

const Intern = require("../lib/intern");

describe("Intern", () => {
  it("should be able to set the school of an employee", () => {
    const intern = new Intern(
      "Peter Parker",
      3,
      "notspiderman@gmail.com",
      "Empire State University"
    );
    expect(intern.school).toEqual("Empire State University");
  });

  it("should return the school of an employee", () => {
    const intern = new Intern(
      "Peter Parker",
      3,
      "notspiderman@gmail.com",
      "Empire State University"
    );
    expect(intern.getSchool()).toEqual(
      "Intern School: Empire State University"
    );
  });

  it("should return the role of an intern", () => {
    const intern = new Intern(
      "Peter Parker",
      3,
      "notspiderman@gmail.com",
      "Empire State University"
    );
    expect(intern.getRole()).toEqual("Intern");
  });
});
