/** @format */

const inquirer = require("inquirer");
const makePage = require("./src/makePage");
const makeCard = require("./src/makeCard");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const companyNameQues = [
  {
    type: "input",
    name: "company",
    message: "What is the name of your company or team?",
  },
];

const employeeQues = [
  {
    type: "input",
    name: "name",
    message: "What is the name of this employee?",
  },
  {
    type: "list",
    name: "role",
    message: "What is this employee's position?",
    choices: ["Manager", "Engineer", "Intern", "Other"],
  },
  {
    type: "input",
    name: "id",
    message: "What is the id for this employee?",
  },
  {
    type: "input",
    name: "email",
    message: "What is this employee's email address?",
  },
];

const managerQues = [
  {
    type: "input",
    name: "office",
    message: "What is this manager's office number?",
  },
];

const engineerQues = [
  {
    type: "input",
    name: "github",
    message: "What is this engineer's GitHub username?",
  },
];

const internQues = [
  {
    type: "input",
    name: "school",
    message: "What school does this intern attend",
  },
];

const enderQues = [
  {
    type: "list",
    name: "repeat",
    message: "Would you like to add another employee?",
    choices: ["Yes", "No"],
  },
];

function init() {
  inquirer.prompt(companyNameQues).then((compData) => {
    const filename = `./dist/${compData.company
      .toLowerCase()
      .split(" ")
      .join("_")}.html`;

    body = makePage(compData);
    fs.writeFile(filename, body, (err) =>
      err ? console.log(err) : employeeInit(filename)
    );
  });
}

function repeatInit(filename) {
  inquirer.prompt(enderQues).then((res) => {
    if (res.repeat === "Yes") {
      employeeInit(filename);
    } else {
      const ending = `
      </div>
      </body>
    </html>
      `;
      fs.appendFile(filename, ending, (err) =>
        err ? console.log(err) : console.log("File Successfully Created")
      );
    }
  });
}

function employeeInit(filename) {
  inquirer.prompt(employeeQues).then((empData) => {
    empName = empData.name;
    id = empData.id;
    email = empData.email;
    role = empData.role;
    const newCard = roleDetails(filename, empName, id, email, role);
  });
}

function roleDetails(filename, empName, id, email, role) {
  if (role === "Manager") {
    inquirer.prompt(managerQues).then((manData) => {
      const manager = new Manager(empName, id, email, manData.office);
      const card = makeCard(
        manager.getName(),
        manager.getRole(),
        manager.getId(),
        manager.getEmail(),
        manager.getOfficeNumber()
      );
      fs.appendFile(filename, card, (err) =>
        err ? console.log(err) : repeatInit(filename)
      );
    });
  } else if (role === "Engineer") {
    inquirer.prompt(engineerQues).then((engData) => {
      const engineer = new Engineer(empName, id, email, engData.github);

      const card = makeCard(
        engineer.getName(),
        engineer.getRole(),
        engineer.getId(),
        engineer.getEmail(),
        engineer.getGitHub()
      );
      fs.appendFile(filename, card, (err) =>
        err ? console.log(err) : repeatInit(filename)
      );
    });
  } else if (role === "Intern") {
    inquirer.prompt(internQues).then((intData) => {
      const intern = new Intern(empName, id, email, intData.school);
      const card = makeCard(
        intern.getName(),
        intern.getRole(),
        intern.getId(),
        intern.getEmail(),
        intern.getSchool()
      );
      fs.appendFile(filename, card, (err) =>
        err ? console.log(err) : repeatInit(filename)
      );
    });
  } else {
    const employee = new Employee(empName, id, email);
    const card = makeCard(
      employee.getName(),
      employee.getRole(),
      employee.getId(),
      employee.getEmail(),
      `<br />`
    );
    fs.appendFile(filename, card, (err) =>
      err ? console.log(err) : repeatInit(filename)
    );
  }
}

init();
