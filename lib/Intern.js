const Employee = require("../lib/Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        //use super - super keyword is used to access and call functions on an object's parent
        super(name, id, school);
        this.school = school;
    }

    getRole(engineer) {
        if (engineer === "Engineer") {
            return engineer;
        }
    }
    
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;