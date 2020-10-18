// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//github paramter constructor
//getRole() should return "Engineer"
//Can get GitHub username via getGithub()
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(github){
        super(name)
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.github;
    }
}
module.exports = Engineer;