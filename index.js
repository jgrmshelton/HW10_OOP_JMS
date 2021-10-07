const Manager = require("./lib/Manager");
const Employee = require("./lib/Engineer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const render = require("./lib/pg-render");

const teamQuestions = [
  {
    type: "input",
    message: "fullName",
    name: "yourName",
  },
  {
    type: "list",
    choices: ["Employee", "Engineer", "Intern", "Manager"],
    message: "What is your job title?",
    name: "jobTitle",
  },
  {
    type: "input",
    name: "id",
    message: "What the team member's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team member's email?",
  },
];

const team = [];
const generateTeam = () => {
  inquirer
    .prompt(teamQuestions)
    .then((answers) => {
      inquirer
        .prompt([
          {
            when: () => answers.role === "Manager",
            type: "input",
            message: "What is their office number",
            name: "officeNumber",
          },
          {
            when: () => answers.role === "Engineer",

            type: "input",
            message: "Github Username:",
            name: "github",
          },

          {
            when: () => answers.role === "Employee",

            type: "input",
            message: "Github Username:",
            name: "github",
          },

          {
            when: () => answers.role === "Intern",

            type: "input",
            message: "School/University",
            name: "school",
          },

          {
            type: "confirm",
            message: "Would you like to add another team member?",
            name: "yes",
          },
        ])

        .then((answers1) => {
          if (answers1.role === "Manager") {
            const manager = new Manager(
              answers.name,
              answers.id,
              answers.email,
              answers.role,
              answers1.officeNumber
            );
            team.push(manager);
          }

          if (answers1.role === "Engineer") {
            const engineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              answers.role,
              answers1.github
            );
            team.push(engineer);
          }

          if (answers1.role === "Employee") {
            const employee = new Employee(
              answers.name,
              answers.id,
              answers.role,
              answers1.email,
            );
            team.push(employee);
          }

          if (answers1.role === "Intern") {
            const intern = new Intern(
              answers.name,
              answers.id,
              answers.email,
              answers.role,
              answers1.school
            );
            team.push(intern);
          }

          if (answers1.addMember) {
            generateTeam();
          } else {
            team.forEach((team) => {
              console.log(team);
            });

            fs.writeFile(outputPath, render(team), (err) => {
              if (err) {
                throw err;
              }
              console.log("Success, team HTML is created!");
            });
          }
        });
    })

    .catch((err) => {
      if (err) {
        throw err;
      }
    });
};

generateTeam();
