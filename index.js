const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const teamRoster = [];

// Initial Questions
const prompt = () => {
    inquirer
    .prompt
    ([
        {
            type: 'list',
            name: 'action',
            message: 'Add To Your Roster:',
            choices: 
        [
            'Add A Manager',
            'Add An Engineer',
            'Add An Intern',
            'Finish Building Team Roster'
        ]
    }
])
    .then (({action}) => {
        switch (action) {
            case 'Add A Manager':
                addManager();
                break;
            case 'Add An Engineer':
                addEngineer();
                break;
            case 'Add An Intern':
                addIntern();
                break;
            default:
                break;
        }
    });
};

const addManager = () => {
    inquirer
    .prompt 
    ([
        {
            type: 'input',
            name: 'mangerName',
            message: 'Please enter team manager'+"'"+'s name:',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Please enter team manager'+"'"+'s employee ID:',
        },
        {
            type: 'input',
            name: 'mangerEmail',
            message: 'Please enter team manager'+"'"+'s email address:',
        },
        {
            type: 'input',
            name: 'mangerOffice',
            message: 'Please enter team manager'+"'"+'s office number:',
        },
    ])
    .then (({input}) => {
        const newManager = new Manager(input.managerName, input.managerID, input.managerEmail, input.managerOffice)
        teamRoster.push(newManager)
        prompt()
    });
};

const addEngineer = () => {
    inquirer
    .prompt
    ([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter engineer'+"'"+'s name:',
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'Please enter engineer'+"'"+'s employee ID:',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please enter engineer'+"'"+'s email address:',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Please enter engineer'+"'"+'s GitHub username:',
        },
    ])
    .then (({input}) => {
        const newEngineer = new Engineer(input.engineerName, input.engineerID, input.engineerEmail, input.engineerOffice)
        teamRoster.push(newEngineer)
        prompt()
    });
};

const addIntern = () => {
    inquirer
    .prompt
    ([
        {
            type: 'input',
            name: 'internName',
            message: 'Please enter intern'+"'"+'s name:',
        },
        {
            type: 'input',
            name: 'internID',
            message: 'Please enter intern'+"'"+'s employee ID:',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Please enter intern'+"'"+'s email address:',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Please enter intern'+"'"+'s school name:',
        },
    ])
    .then (({input}) => {
        const newIntern = new Intern(input.internName, input.internID, input.internEmail, input.internOffice)
        teamRoster.push(newIntern)
        prompt()
    });
};

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('Success!')
//     });
// };

function init() {
    prompt()
    .then(function(input) {
        console.log(input)
        // writeToFile("index.html", generateHTML(teamRoster));
    });
};

console.log("Welcome")
init();