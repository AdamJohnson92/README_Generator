// TODO: Include packages needed for this application

const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the Application?',
    },  

    {
        type: 'input',
        name: 'description',
        message: 'Describe what the purpose and function of the application.',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Describe any extra steps needed to install the application.',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Briefly describe how to use the application.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Provide any credits to contributors.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license from the following list.',
        choices: ['MIT', 'MPL 2.0', 'ODC BY', 'ISC', 'This application does not have a license']
    },
  
  ];

inquirer
  .prompt(questions) 
  .then((data) => {
    console.log(data)


fs.writeFile("draftREADME.md", generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
  });



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
