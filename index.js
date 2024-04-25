// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs=require('fs')
const generateMarkdown = require('./utils/generateMarkdown') 
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'give a title to your readme',
        name: 'title'
    },
    {
        type: 'input',
        message: 'describe your readme',
        name: 'title'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, generateMarkdown(data))

}
// TODO: Create a function to initialize app
function init() {
    inquerer
    .prompt(questions)
    .then(answers =>{writeToFile('writeToFile'(Readme.md))})
}

// Function call to initialize app
init();

