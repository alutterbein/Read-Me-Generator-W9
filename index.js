// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs=require('fs')
const path = require('path')
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
        message: 'give the link to your deployed application',
        name: 'link'
    },
    {
        type: 'input',
        message: 'Give us the why, what, how of your project',
        name: 'description'
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
        message: 'list your contributers',
        name: 'Credits'
    },
    {
        type: 'checkbox',
        message: 'describe your readme',
        name: 'License',
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "Testing",
        message: "Desctibe testing of project",
      },
    {
        type: 'input',
        message: 'Enter your email and github profile for contact with questions',
        name: 'Questions'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers =>{writeToFile("./testrmdump/Readme.md", generateMarkdown ({ ...answers }))})
}

// Function call to initialize app
init();

