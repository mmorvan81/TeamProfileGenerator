
//Variable to link this file with the newEmployee file
const NewEmployee = require('./newEmployee');

//this line (extends) inherits the properties from newEmployee
class developer extends NewEmployee {

//this method (super) calls the parent's constructor function
    constructor (Name, Phone, Email, ID, Position, Github) {
            super (name, id, email);
            this.phone = phone;
}
    getPosition()   { return "developer";}
    getPhone()   {return this.phone;}
}

module.exports = developer;
