// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//officeNumber line 7 manager.test.js
//getRole(); return "Manager"
//getOffice();hosuld return office number
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(officeNumber)
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
    getOffice(){
        return this.officeNumber;
    }  
}
module.exports = Manager;