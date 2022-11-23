/** @format */

// TODO: Make inquirer
const inquirer = require("inquirer");
const fs = require("fs");
const makePage = require("./src/makePage");
const appendPage = require("./src/appendPage");
const endPage = require("./src/endPage");
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

function startFile(filename, data) {
  fs.writeFile(filename, data, (err) =>
    err ? console.log(err) : console.log("")
  );
}

function init() {
  inquirer.prompt(companyNameQues).then((compData) => {
    const newData = makePage(compData);
    const filename = `./${compData.company
      .toLowerCase()
      .split(" ")
      .join("_")}.html`;

    startFile(filename, newData);
    employeeInit(filename);
  });
}

function repeatInit() {
  inquirer.prompt(enderQues).then((res) => {
    if (res.repeat === "Yes") {
      employeeInit();
    } else {
      //finish the file
    }
  });
}

function employeeInit(filename) {
  inquirer.prompt(employeeQues).then((empData) => {
    empName = empData.name;
    id = empData.id;
    email = empData.email;
    if (empData.role === "Manager") {
      managerInit(filename, empName, id, email);
    } else if (empData.role === "Engineer") {
      engineerInit(empName, id, email);
    } else if (empData.role === "Intern") {
      internInit(empName, id, email);
    } else {
      const employee = new Employee(empName, id, email);
      team.push(employee);
      console.log(team);
      repeatInit();
    }
  });
}

function managerInit(filename, name, id, email) {
  inquirer.prompt(managerQues).then((manData) => {
    appendPage.addManager(filename, name, id, email, manData.office);
    repeatInit();
  });
}

function engineerInit(name, id, email) {
  inquirer.prompt(engineerQues).then((engData) => {
    const engineer = new Engineer(name, id, email, engData.github);
    team.push(engineer);
    console.log(team);
    repeatInit();
  });
}

function internInit(name, id, email) {
  inquirer.prompt(internQues).then((intData) => {
    const intern = new Intern(name, id, email, intData.school);
    team.push(intern);
    console.log(team);
    repeatInit();
  });
}

init();
// TODO: Write inquirer to HTML

// to use appendPage.addEmployee(name, id, email) etc
