const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const writeFileAsync = util.promisify(fs.writeFile);

const employees = [];
const managerQuestion = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
  },
];

const engineerQuestion = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer email address?",
  },
  {
    type: "input",
    name: "username",
    message: "What is the engineer GitHub name?",
  },
];

const internQuestion = [
  {
    type: "input",
    name: "name",
    message: "What is the intern name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern email address?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern school number?",
  },
];

const jobTitle = {
  type: "list",
  name: "title",
  message: "What's your job title?",
  choices: ["Manager", "Engineer", "Intern"],
};

const toNextEmployee = {
  type: "confirm",
  name: "nextEmployee",
  message: "Do you need to enter another employee? ",
  default: true,
};

async function init() {
  let question = "";
  const { title } = await inquirer.prompt(jobTitle);
  switch (title) {
    case "Manager":
      question = managerQuestion;
      break;
    case "Engineer":
      question = engineerQuestion;
      break;
    case "Intern":
      question = internQuestion;
      break;
    default:
  }
  getAnswer(question);
}
init();

async function getAnswer(questions) {
  try {
    questions.push(toNextEmployee);
    const { nextEmployee, ...answers } = await inquirer.prompt(questions);
    const { name, id, email, github, school, officeNumber } = answers;
    if (officeNumber) {
      employees.push(new Manager(name, id, email, officeNumber));
    } else if (github) {
      employees.push(new Engineer(name, id, email, github));
    } else {
      employees.push(new Intern(name, id, email, school));
    }
    if (nextEmployee) {
      init();
    } else {
      const html = render(employees);
      await writeFileAsync(outputPath, html);
    }
  } catch (err) {
    console.log(err);
  }
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
