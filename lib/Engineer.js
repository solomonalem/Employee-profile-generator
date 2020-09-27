const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, jobTitle, github) {
    super(name, id, email, jobTitle);
    this.github = github;
  }
}
module.exports = Engineer;
