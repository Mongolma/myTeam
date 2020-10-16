const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
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
      type: "checkbox",
      name: "position",
      message: "What is your poision to this company?",
      choices: ["Emploee", "Manager", "Engineer1", "Engineer2", "Intern"],
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub name?",
    },
    {
      type: "input",
      name: "school",
      message: "What is your school number?",
    },
    {
      type: "input",
      name: "office",
      message: "What is your office number?",
    },
  ]);
}
async function init() {
  try {
    const response = await promptUser();
    const html = ques.htmlRenderer(response);
    await writeFileAsync("test.html", html);
    console.log("Success!");
  } catch (err) {
    console.log(err);
  }
}
init();
