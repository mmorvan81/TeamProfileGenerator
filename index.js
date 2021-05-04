
//create variables
const fs = require("fs")
const inquirer = require("inquirer")
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const developer = require('./lib/developer');
const intern = require('./lib/intern');
const newEmployee = [];

//create function for new employees and initiate
function init() {
    StartHtml();
    AddEmployee();
}
init();

function NewEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },

        {
            type: "input",
            message: "What is your company id?",
            name: "name",
        },

        {
            type: "input",
            message: "What is your email address",
            name: "name",
        },
    ])
    .then(function(response) {

    })
}

function createGroup(){
    inquirer.prompt([
        {
        type: "list",
        name: "position",
        question: "Do you want to add anymore positions to the group?",
        choices: [
            "Manager",
            "Engineer",
            "Developer",
            "Intern",
            "I do not want to add anymore postions to this group."]
        }
        
    ])
        
    .then(answers => {
        switch (answers.choice) {
            case "Manager":
                createManager();
                break;
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createDeveloper();
                break;
            case "Intern":
                createIntern();
                break;

            default:
        }
    })
}

//create function/questions for new manager
function createManager()  {
    inquirer.prompt([
       {
        type: "input",
        name: "name",
        question: "What is the new manager's name?",
    },
       {
        type: "input",
        name: "phone",
        question: "What is the new manager's office number?",
    },
    {
        type: "input",
        name: "email",
        question: "What is the new manager's business email address?",
    },
    {
        type: "input",
        name: "id",
        question: "What is the new manager's company id?",
    },
    {
        type: "input",
        name: "github",
        question: "What is the new manager's github user name?",
    },
])
    .then(function(answer) {
        const manager = new manager( answer.name, answer.phone, answer.email, answer.id, answer.github )
        console.log(answer)
        createGroup()
    });
};

function createEngineer()  {
    inquirer.prompt([
       {
        type: "input",
        name:  "position",
        question: "What position have you been hired for?"
    },
    {
        type: "input",
        name: "name",
        question: "What is your full name?"
    },
       {
        type: "input",
        name: "phone",
        question: "What is your business office number?"
    },
    {
        type: "input",
        name: "email",
        question: "What is your business email address?"
    },
    {
        type: "input",
        name: "id",
        question: "What is your company business id?"
    },
    {
        type: "input",
        name: "github",
        question: "What is your github user name?"
    },
])
    .then(function(answer) {
        const engineer = new engineer(answer.position, answer.name, answer.phone, answer.email, answer.id, answer.github )
        console.log(answer)
        createGroup()
    });
};

function createDeveloper()  {
    inquirer.prompt([
       {
        type: "input",
        name:  "position",
        question: "What position have you been hired for?"
    },
    {
        type: "input",
        name: "name",
        question: "What is your full name?"
    },
       {
        type: "input",
        name: "phone",
        question: "What is your business office number?"
    },
    {
        type: "input",
        name: "email",
        question: "What is your business email address?"
    },
    {
        type: "input",
        name: "id",
        question: "What is your company business id?"
    },
    {
        type: "input",
        name: "github",
        question: "What is your github user name?"
    },
])
    .then(function(answer) {
        const developer = new developer(answer.position, answer.name, answer.phone, answer.email, answer.id, answer.github )
        console.log(answer)
        createGroup()
    });
};


function createIntern()  {
    inquirer.prompt([
       {
        type: "input",
        name:  "position",
        question: "What position have you been hired for?"
    },
    {
        type: "input",
        name: "name",
        question: "What is your full name?"
    },
       {
        type: "input",
        name: "phone",
        question: "What is your business office number?"
    },
    {
        type: "input",
        name: "email",
        question: "What is your business email address?"
    },
    {
        type: "input",
        name: "id",
        question: "Do you have a  business id?"
    },
    {
        type: "input",
        name: "github",
        question: "Do you have a github address?"
    },
])
.then(function(answer) {
    const intern = new intern(answer.position, answer.name, answer.phone, answer.email, answer.id, answer.github )
    console.log(answer)
    createGroup()
});
};


function buildGroup() {
    fs.writeFileSync();
}

