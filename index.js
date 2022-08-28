const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const { finished } = require('stream');
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
                finished();
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


prompt();

function finished (
//     <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">Cras justo odio</li>
//     <li class="list-group-item">Dapibus ac facilisis in</li>
//     <li class="list-group-item">Vestibulum at eros</li>
//   </ul>
//   <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>
)