const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
    {
        type: "list",
        choices: ["Employee", "Engineer", "Intern", "Manager"],
        message: "What is your job title?",
        name: "jobTitle",
    },
    {
        type: "input",
        message: "fullName",
        name: "yourName",
    },
    ])
    .then((response) => {
        var squad = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DevSquad</title>
            <link rel="stylesheet" type="text/css" href="style.css"/>
        </head>
        <body style="margin: 0; padding: 0">
            <header
                style="
        </html>

    })