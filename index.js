const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/generate-site");

var teamData = {
  manager: [],
  engineer: [],
  intern: [],
};
const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter team manager's name (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter team manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter manager's ID ,(Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter managers ID !");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter manager's email address ,(Required)",
        validate: (emailAddressInput) => {
          if (emailAddressInput) {
            return true;
          } else {
            console.log("Please enter managers email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "Enter manager's office number ,(Required)",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter managers office number  !");
            return false;
          }
        },
      },
    ])
    .then(({ name, id, email, office }) => {
      teamData.manager.push(new Manager(name, id, email, "Manager", office));
    });
};

const promptEmployee = () => {
  console.log(`
   
  ----------------     ADD A NEW EMPLOYEE      ----------------------
    
    `);
  return inquirer
    .prompt([
      {
        type: "checkbox",
        name: "jobTitle",
        message: "Select the job tile of the new employee? required",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then(({ jobTitle }) => {
      if (jobTitle[0] === "Engineer") {
        return promptEngineer();
      } else {
        return promptIntern();
      }
    })
    .then(() => {
      return inquirer.prompt([
        {
          type: "confirm",
          name: "confirmAddEmployee",
          message: "Would you like to enter another Employee?",
          default: false,
        },
      ]);
    })
    .then((result) => {
      console.log(result);
      //   employeeData.employees.push(result);
      console.log(result.confirmAddEmployee);
      if (result.confirmAddEmployee) {
        return promptEmployee();
      } else {
        return;
      }
    });
};

const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Engineer's name?, (Required)",
        validate: (employeeNameInput) => {
          if (employeeNameInput) {
            return true;
          } else {
            console.log("Please enter your employee name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter Engineer's ID ,(Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter Engineer's email address ,(Required)",
        validate: (emailAddressInput) => {
          if (emailAddressInput) {
            return true;
          } else {
            console.log("Please enter Engineer's email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter Engineer's  GitHub account name. (Required)",
        validate: (githabLink) => {
          if (githabLink) {
            return true;
          } else {
            console.log("Please enter github account name!");
            return false;
          }
        },
      },
    ])
    .then(({ name, id, email, github }) => {
      teamData.engineer.push(new Engineer(name, id, email, "Engineer", github));
    });
};
const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter name of Intern?, (Required)",
        validate: (employeeNameInput) => {
          if (employeeNameInput) {
            return true;
          } else {
            console.log("Please enter Intern's name !");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter Intern's ID ,(Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter intern's id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter Intern's email address ,(Required)",
        validate: (emailAddressInput) => {
          if (emailAddressInput) {
            return true;
          } else {
            console.log("Please enter Intern's email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter Intern's school ,(Required)",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter intern's school!");
            return false;
          }
        },
      },
    ])
    .then(({ name, id, email, school }) => {
      teamData.intern.push(new Intern(name, id, email, "Intern", school));
    });
};
promptManager()
  .then(promptEmployee)
  .then(() => {
    console.log("-----------");
    console.log(teamData);
    console.log("-----------");
    return generatePage(teamData);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
