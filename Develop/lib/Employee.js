// TODO: Write code to define and export the Employee class
//Can instantiate Employee instance (make a class) 
//name, id, email, parameter on constructor
//getName() returns name from my constructor
//getId() returns id from my constructor
//getEmail() returns emailfrom my constructor
//getRole() returns "Employee" from my constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email= email;
    }
    getName(){
        return name;
    }
    getId(){
        return id; 
    }
    getEmail(){
        return email; 
    }
    getRole(){
        return "Employee"; 
    }
}
module.exports = Employee;
