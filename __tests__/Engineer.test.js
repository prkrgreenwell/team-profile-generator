/** @format */

const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("should be able to set the GitHub of an engineer", () => {
    const engineer = new Engineer(
      "Peter Parker",
      3,
      "notspiderman@gmail.com",
      "noSuperHeroHere"
    );
    expect(engineer.github).toEqual("noSuperHeroHere");
  });

  it("should be able to return the GitHub of an engineer", () => {
    const engineer = new Engineer(
      "Peter Parker",
      3,
      "notspiddell@gmail.com",
      "noSuperHeroHere"
    );
    expect(engineer.getGitHub()).toEqual("Engineer GitHub: noSuperHeroHere");
  });

  it("should be able to return the role of an engineer", () => {
    const engineer = new Engineer(
      "Peter Parker",
      3,
      "notspiddell@gmail.com",
      "noSuperHeroHere"
    );
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
