// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//school parameter in constructor
//getRole() should return "Intern"
//Can get school via getSchool() returns school
const Employee = require("./Employee");
class Intern extends Employee {
    constructor(school){
        super(name)
        this.school = school;
    }
    getRole(){
        return "Intern";
    }
    getSchool(){
        return name.school;
    }
}
module.exports = Intern;