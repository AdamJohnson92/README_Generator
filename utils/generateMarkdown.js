// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {

    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  
  } else if (license === 'MPL 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  
  } else if (license === 'ODC BY') {
    return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
  } else if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ## Description
  ${data.description}

  # Table of Contents
  Installation
  Usage
  Credits
  License
      
  ## Installation
  ${data.installation}
      
  ## Usage
  ${data.usage}
      
  ## Credits
  ${data.credits}
      
  ## License
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;

