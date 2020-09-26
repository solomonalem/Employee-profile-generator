const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, jobTitle, school) {
    super(name, id, email, jobTitle);

    this.school = school;
  }
}
module.exports = Intern;
