/** @format */

const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");
const repeat = require("../index");

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

function createCard(empName, role, id, email, extra) {
  const card = `       
    <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${empName}</p>
              <p class="subtitle is-6">${role}</p>
            </div>
          </div>
  
          <div class="content">
            <p class="id">${id}</p>
            <p class="email">${email}</p>
            <p class="extra">${extra}</p>
          </div>
        </div>
        </div>`;

  console.log(card);
}

function addCard(empName, id, email, role) {
  if (role === "Manager") {
    inquirer.prompt(managerQues).then((manData) => {
      const manager = new Manager(empName, id, email, manData.office);
      const data = createCard(
        manager.getName(),
        manager.getRole(),
        manager.getId(),
        manager.getEmail(),
        manager.getOfficeNumber()
      );
      console.log(data);
    });
  } else if (role === "Engineer") {
    inquirer.prompt(engineerQues).then((engData) => {
      const engineer = new Engineer(empName, id, email, engData.github);
      return createCard(
        engineer.getName(),
        engineer.getRole(),
        engineer.getId(),
        engineer.getEmail(),
        engineer.getGitHub()
      );
    });
  } else if (role === "Intern") {
    inquirer.prompt(internQues).then((intData) => {
      const intern = new Intern(empName, id, email, intData.school);
      return createCard(
        intern.getName(),
        intern.getRole(),
        intern.getId(),
        intern.getEmail(),
        intern.getSchool()
      );
    });
  } else {
    const employee = new Employee(empName, id, email);
    return createCard(
      employee.getName(),
      employee.getRole(),
      employee.getId(),
      employee.getEmail(),
      ""
    );
  }
}

module.exports = addCard;
