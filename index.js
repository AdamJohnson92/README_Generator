// TODO: Include packages needed for this application

const inquirer = require("inquirer")
//const generateMarkdown = require("generateMarkdown")
const fs = require("fs")



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

        type: 'input',
        name: 'license',
        message: 'Provide the license for the application.',
    },
  
  ];

inquirer
  .prompt(questions) 
  .then((data) => {
    console.log(data)

    let readmeContent = 
    `# ${data.name}

## Description
${data.description}
    
## Installation
${data.installation}
    
## Usage
${data.usage}
    
## Credits
${data.credits}
    
## License
${data.license}`;

const filename = "draftREADME.md";

fs.writeFile(filename, readmeContent, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
  });



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
