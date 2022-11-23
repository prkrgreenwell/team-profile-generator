/** @format */

// TODO: Import packages
const inquirer = require("inquirer");
const makePage = require("./src/makePage");
const addCard = require("./src/addCard");
const fs = require("fs");

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
      //finish the file
    }
  });
}

function employeeInit(filename) {
  inquirer.prompt(employeeQues).then((empData) => {
    empName = empData.name;
    id = empData.id;
    email = empData.email;
    role = empData.role;
    const newCard = addCard(empName, id, email, role);
    console.log(newCard);
  });
}

init();
