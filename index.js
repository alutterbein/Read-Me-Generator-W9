// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs=require('fs')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown') 
// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
        type: 'input',
        message: 'give a title to your readme',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give us the why, what, how of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Create a table of contents for your readme',
        name: 'ToC'
    },
    {
        type: 'input',
        message: 'Give instalation instructions for your project',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'How do we use your project?',
        name: 'Usage'
    },
    {
        type: 'input',
        message: 'describe your readme',
        name: 'Credits'
    },
    {
        type: 'input',
        message: 'describe your readme',
        name: 'License'
    },

]);

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

