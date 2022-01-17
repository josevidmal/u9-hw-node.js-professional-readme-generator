// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Which is the description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Which are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How is the application used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Which are the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How can the application be tested?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Which license is the application covered under?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL'],
    },
    {
        type: 'input',
        message: 'Which is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Which is your email address?',
        name: 'email',
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const myREADME = generateMarkdown(data);

    fs.writeFile(fileName, myREADME, (err) => 
        err ? console.error(err) : console.log('File successfully generated')
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
