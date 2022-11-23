/** @format */
const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");
const fs = require("fs");

function addManager(filename, name, id, email, office) {
  const manager = new Manager(name, id, email, office);
  const newFilename = "." + filename;

  const newData = `  
    <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${manager.getName()}</p>
          <p class="subtitle is-6">Manager</p>
        </div>
      </div>

      <div class="content">
        <p class="id">${manager.getId()}</p>
        <p class="email">${manager.getEmail()}</p>
        <p class="office">${manager.getOfficeNumber()}</p>
      </div>
    </div>
  </div>`;

  fs.appendFile(newFilename, newData);
}

function addEngineer(name, id, email, github) {
  const engineer = new Engineer(name, id, email, github);

  return `  
    <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${engineer.getName()}</p>
          <p class="subtitle is-6">Manager</p>
        </div>
      </div>

      <div class="content">
        <p class="id">${engineer.getId()}</p>
        <p class="email">${engineer.getEmail()}</p>
        <p class="github">${engineer.getGitHub()}</p>
      </div>
    </div>
  </div>`;
}

function addIntern(name, id, email, school) {
  const intern = new Intern(name, id, email, school);

  return `  
    <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${intern.getName()}</p>
          <p class="subtitle is-6">Manager</p>
        </div>
      </div>

      <div class="content">
        <p class="id">${intern.getId()}</p>
        <p class="email">${intern.getEmail()}</p>
        <p class="school">${intern.getSchool()}</p>
      </div>
    </div>
  </div>`;
}

function addEmployee(name, id, email) {
  const employee = new Employee(name, id, email);

  return `  
    <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${employee.getName()}</p>
          <p class="subtitle is-6">Manager</p>
        </div>
      </div>

      <div class="content">
        <p class="id">${employee.getId()}</p>
        <p class="email">${employee.getEmail()}</p>
      </div>
    </div>
  </div>`;
}

module.exports = { addManager, addEngineer, addIntern, addEmployee };
