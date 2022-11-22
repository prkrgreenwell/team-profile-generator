/** @format */

// TODO: Make inquirer
const inquirer = require("inquirer");
const fs = require("fs");
const maker = require("./src/makePage");
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
    choices: [
      { name: "Manager", value: 0 },
      { name: "Engineer", value: 1 },
      { name: "Intern", value: 2 },
      { name: "Other" },
    ],
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
    choices: [
      { name: "Yes", value: 0 },
      { name: "No", value: 1 },
    ],
  },
];

function init() {
  inquirer.prompt(companyNameQues).then((compData) => {
    const filename = `./${compData.company}.toLowerCase().split(" ").join("_").json`;
    console.log(filename);
    employeeInit();
  });
}

function employeeInit() {
  inquirer
    .prompt(employeeQues)
    .then((empData) => {
      empName = empData.name;
      id = empData.id;
      email = empData.email;
      if (empData.role === 0) {
        managerInit(empName, id, email);
      } else if (empData.role === 1) {
        engineerInit((empName, id, email));
      } else if (empData.role === 2) {
        internInit((empName, id, email));
      } else {
        const employee = new Employee(empName, id, email);
      }
    })
    .then(() => {
      repeatInit();
    });
}

function managerInit(name, id, email) {
  inquirer.prompt(managerQues).then((manData) => {
    const manager = new Manager(name, id, email, manData.office);
    console.log(manager);
  });
}

function engineerInit(name, id, email) {
  inquirer.prompt(engineerQues).then((engData) => {
    const engineer = new Engineer(name, id, email, engData.github);
  });
}

function internInit(name, id, email) {
  inquirer.prompt(internQues).then((intData) => {
    const intern = new Intern(name, id, email, intData.school);
  });

  function repeatInit() {
    inquirer.prompt(enderQues).then((res) => {
      if (res.repeat === 0) {
        employeeInit();
      }
    });
  }
}

init();
// TODO: Write inquirer to HTML

//Inquirers kind of work, but we need to figure out how to properly use promise chaining
