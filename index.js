const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const render = require("./src/template.js");

const teamMembers = [];
const idArray = [];

function teamCreator() {
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What kind of team member do you want to add?",
          name: "memberType",
          choices: ["Engineer", "Intern", "Manager", "None"],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberType) {
          case "Engineer":
            addEngineer();
            break;
          case "Manager":
            addManager();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            writeTeam();
        }
      });
  }

  function addEngineer() {
    inquirer.prompt(questionsEngineer).then((engData) => {
      const engineer = new Engineer(
        engData.name,
        engData.id,
        engData.email,
        engData.github
      );
      teamMembers.push(engineer);
      idArray.push(engData.engineerId);
      createTeam();
    });
  }

  function addManager() {
    inquirer.prompt(questionsManager).then((manData) => {
      const manager = new Manager(
        manData.name,
        manData.id,
        manData.email,
        manData.officeNumber
      );
      teamMembers.push(manager);
      idArray.push(manData.managerId);
      createTeam();
    });
  }

  function addIntern() {
    inquirer.prompt(questionsIntern).then((intData) => {
      const intern = new Intern(
        intData.name,
        intData.id,
        intData.email,
        intData.school
      );
      teamMembers.push(intern);
      idArray.push(intData.internId);
      createTeam();
    });
  }

  function writeTeam() {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(teamMembers), "utf-8");
  }
  createTeam();
}

teamCreator();

const questionsManager = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the employee's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the employee's office number?",
    name: "officeNumber",
  },
];

const questionsEngineer = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the employee's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the employee's GitHub username?",
    name: "github",
  },
];

const questionsIntern = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the employee's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What school does the employee attend?",
    name: "school",
  },
];
