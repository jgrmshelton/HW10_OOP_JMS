//../lib/Employee.js
const Employee = require("../lib/Employee.js")

class Manager extends Employee {
    constructor(name, id, email, offNum) {
        super(name, id, email);
        this.offNum = offNum;
    }

    getRole() {
        return "Manager";
    }
}
  
module.exports = Manager;
