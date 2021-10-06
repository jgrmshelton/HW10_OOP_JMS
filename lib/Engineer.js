const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //use super - super keyword is used to access and call functions on an object's parent
        super(name, id, github);
        this.github = github;
    }

    getRole(engineer) {
        if (engineer === "Engineer") {
            return engineer;
        }
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;