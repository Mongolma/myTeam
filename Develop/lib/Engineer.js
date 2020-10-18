const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(github)
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