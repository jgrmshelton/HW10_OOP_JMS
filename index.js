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
            <link rel="stylesheet" type="text/css" href="style.css" />
        </head>
        
        <body style="margin: 0; padding: 0; background-color: pink;">
            <header style="
                        border: solid 2px plum;
                        height: 200px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        ">
        
                <h1>DevSquad</h1>
            </header>
            <section style="
                        border: solid 2px plum;
                        background: white;
                        display: flex;
                        flex-wrap: nowrap;
                        ">
                <div style="
                            border: solid 2px plum;
                            width: 25%;
                            height: 425px;
                            text-align: center;
                            font-size: 1.5rem;
                            ">
                    Manager
                    <br />
                    <h5 style="text-align: left">
                        <span>Name: </span>
                    </h5>
                    <h5 style="text-align: left">
                        <span>Email: </span>
                    </h5>
                    <h5 style="text-align: left">
                        <span>ID: </span>
                    </h5>
                    <h5 style="text-align: left">
                        <span>Office Number: </span>
                    </h5>
                </div>
                <div style="
                        border: solid 2px plum;
                        width: 25%;
                        height: 425px;
                        text-align: center;
                        font-size: 1.5rem;
                        ">
                    Engineer
                    <br />
                    <h5 style="text-align: left">
                        <span>Name: </span>
                    </h5>
                    <h5 style="text-align: left">
                        <span>Email: </span>
                    </h5>
                    <h5 style="text-align: left">
                        <span>ID: </span>
                    </h5>
                    <h5 style="text-align: left">
                        <span>Office Number: </span>
                </div>
                <div style="
                    border: solid 2px plum;
                    width: 25%;
                    height: 425px;
                    text-align: center;
                    font-size: 1.5rem;
                    ">
                    Employee
                    <br />
                    <h5 style="text-align: left">
                        <span>Name: </span>
                    </h5>
                    <h5 style="text-align: left">
                        <span>Email: </span>
                    </h5>
                    <h5 style="text-align: left">
                        <span>ID: </span>
                    </h5>
                    <h5 style="text-align: left">
                        <span>Office Number: </span>
                </div>
                <div style="
                    border: solid 2px plum;
                    width: 25%;
                    height: 425px;
                    text-align: center;
                    font-size: 1.5rem;
                    ">
                    Intern
                    <br />
                    <h5 style="text-align: left">
                        <span>Name: </span>
                    </h5>
                    <h5 style="text-align: left">
                        <span>Email: </span>
                    </h5>
                    <h5 style="text-align: left">
                        <span>ID: </span>
                    </h5>
                    <h5 style="text-align: left">
                        <span>Office Number: </span>
                    </h5>
                </div>
            </section>
        </body>
        
        </html>`;
    });