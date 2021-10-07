const Manager = require("./lib/Manager");
const Employee = require("./lib/Engineer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "team.html");

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
              answers1.name,
              answers1.id,
              answers1.email,
              answers1.role,
              answers2.officeNumber
            );
            team.push(manager);
          }

          if (answers1.role === "Engineer") {
            const engineer = new Engineer(
              answers1.name,
              answers1.id,
              answers1.email,
              answers1.role,
              answers2.github
            );
            team.push(engineer);
          }

          if (answers1.role === "Employee") {
            const engineer = new Employee(
              answers1.name,
              answers1.id,
              answers1.role,
              answers2.email,
            );
            team.push(Employee);
          }

          if (answers1.role === "Intern") {
            const intern = new Intern(
              answers1.name,
              answers1.id,
              answers1.email,
              answers1.role,
              answers2.school
            );
            team.push(intern);
          }

          if (answers2.addMember) {
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
