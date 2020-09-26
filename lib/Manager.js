const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, jobTitle,officeNumber) {
    super(name, id, email, jobTitle);

    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;
